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
  position: relative;
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

const Success = styled.p`
  color: #059669;
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

type RegisterProps = {
  onClose: () => void;
  onSwitchToLogin: () => void;
  onSuccess: () => void;
};

export function Register({ onClose, onSwitchToLogin, onSuccess }: RegisterProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (senha.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    setLoading(true);

    try {
      const data = await authApi.register(nome, email, senha);
      saveToken(data.token);
      setSuccess('Conta criada com sucesso!');
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1000);
    } catch (err: any) {
      setError(err.message || 'Erro ao criar conta');
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
        <Title>Registrar</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha (mínimo 6 caracteres)"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          {error && <Error>{error}</Error>}
          {success && <Success>{success}</Success>}
          <Button type="submit" disabled={loading}>
            {loading ? 'Criando conta...' : 'Criar conta'}
          </Button>
          <Switch type="button" onClick={onSwitchToLogin}>
            Já tem conta? Faça login
          </Switch>
        </Form>
      </Card>
    </Modal>
  );
}

