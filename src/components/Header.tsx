import { motion } from 'framer-motion';
import styled from 'styled-components';
import { isAuthenticated, removeToken } from '../utils/api';

// Estilo global do topo com foco em contraste, espaçamento e sticky
const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  box-shadow: ${({ theme }) => theme.shadow.xs}; /* Sombra sutil para profundidade */
`;

const Brand = styled.a`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.2px;
  color: #ffffff;
  text-decoration: none;
  font-family: Inter, system-ui, -apple-system, Arial, sans-serif;
  span { color: ${({ theme }) => theme.colors.accent}; }
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-family: Inter, system-ui, -apple-system, Arial, sans-serif;
  padding: 8px 10px;
  border-radius: 8px;
  transition: background-color .2s ease, transform .15s ease;
  &:hover { background: rgba(255,255,255,0.12); }
  &:active { transform: translateY(1px); }
`;

const AuthButton = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: #0a0a0a;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .2s ease, transform .15s ease;
  &:hover { background: #ffcd00; }
  &:active { transform: translateY(1px); }
`;

type HeaderProps = {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onLogout: () => void;
};

export function Header({ onLoginClick, onRegisterClick, onLogout }: HeaderProps) {
  const authenticated = isAuthenticated();

  const handleLogout = () => {
    removeToken();
    onLogout();
  };

  return (
    <Bar as={motion.header} initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <Brand href="#top">Contrata<span>Já</span></Brand>
      <Nav>
        <Link href="#servicos">Serviços</Link>
        <Link href="#porque">Por que escolher</Link>
        <Link href="#contato">Contato</Link>
        {authenticated ? (
          <AuthButton onClick={handleLogout}>Sair</AuthButton>
        ) : (
          <>
            <AuthButton onClick={onLoginClick}>Entrar</AuthButton>
            <AuthButton onClick={onRegisterClick}>Registrar</AuthButton>
          </>
        )}
      </Nav>
    </Bar>
  );
}


