import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { authApi, saveToken } from '../utils/api';

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 32px;
  max-width: 420px;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 24px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.button`
  padding: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Error = styled.p`
  color: #dc2626;
  font-size: 14px;
  margin: 0;
  text-align: center;
`;

const Switch = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-decoration: underline;
  margin-top: 8px;
  font-size: 14px;
`;

const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.subtext};
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

type LoginProps = {
  onClose: () => void;
  onSwitchToRegister: () => void;
  onSuccess: () => void;
};

export function Login({ onClose, onSwitchToRegister, onSuccess }: LoginProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await authApi.login(email, senha);
      saveToken(data.token);
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={onClose}>
      <Card
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Close onClick={onClose}>×</Close>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          {error && <Error>{error}</Error>}
          <Button type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
          <Switch type="button" onClick={onSwitchToRegister}>
            Não tem conta? Registre-se
          </Switch>
        </Form>
      </Card>
    </Modal>
  );
}

