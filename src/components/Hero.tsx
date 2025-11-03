import { motion } from 'framer-motion';
import styled from 'styled-components';

const Wrap = styled.section`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary} 0%, #00b4d8 100%);
  color: #ffffff;
  text-align: center;
  padding: 72px 16px; /* Mais respiro para sensação moderna */
`;

const Title = styled.h1`
  font-family: Inter, system-ui, -apple-system, Arial, sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  letter-spacing: -0.3px;
  margin: 0 0 12px;
`;

const Subtitle = styled.p`
  font-family: Inter, system-ui, -apple-system, Arial, sans-serif;
  font-size: 17px;
  opacity: 0.95;
`;

const Row = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 12px 14px;
  width: min(520px, 90vw);
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  box-shadow: ${({ theme }) => theme.shadow.xs}; /* Profundidade leve */
`;

const CTA = styled.button`
  padding: 12px 18px;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.accent};
  color: #0a0a0a;
  font-weight: 700;
  cursor: pointer;
  transition: transform .15s ease, background-color .2s ease;
  &:hover { background: #ffcd00; }
  &:active { transform: translateY(1px); }
`;

export function Hero({ value, onChange, onBuscar }:{ value: string; onChange: (v: string) => void; onBuscar: () => void; }) {
  return (
    {/* Adicionada animação de fade-in na dobra principal */}
    <Wrap as={motion.section} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Title>Encontre o profissional certo para o seu serviço</Title>
      <Subtitle>Profissionais verificados a um clique de distância.</Subtitle>
      <Row>
        <Input
          aria-label="Buscar serviço"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); onBuscar(); } }}
          placeholder="Digite o serviço que procura..."
        />
        <CTA type="button" onClick={onBuscar}>Buscar</CTA>
      </Row>
    </Wrap>
  );
}


