import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ServicoKey } from '../data/profissionais';

export type CardItem = { key: ServicoKey; emoji: string; title: string; desc: string; extra?: boolean };

const Section = styled.section`
  padding: 48px 16px; /* Espaçamento consistente */
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`;

const Card = styled.button`
  text-align: left;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  cursor: pointer;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  &:hover { transform: translateY(-2px); box-shadow: ${({ theme }) => theme.shadow.md}; border-color: rgba(10,91,211,0.25); }
`;

const CardTitle = styled.h3`
  font-family: Inter, system-ui, -apple-system, Arial, sans-serif;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  margin: 0 0 6px;
`;
const CardDesc = styled.p`
  color: ${({ theme }) => theme.colors.subtext};
  font-size: 14px;
`;

const Side = styled.div`
  position: sticky;
  top: 86px;
  height: max-content;
`;

const Toggle = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  min-width: 150px;
  transition: background-color .2s ease;
  &:hover { background: ${({ theme }) => theme.colors.primaryHover}; }
`;

export function Services({ cards, onSelect, expanded, setExpanded, showExtrasToggle }:{
  cards: CardItem[];
  onSelect: (key: ServicoKey) => void;
  expanded: boolean;
  setExpanded: (v: boolean) => void;
  showExtrasToggle: boolean;
}) {
  return (
    <Section id="servicos" aria-label="Lista de serviços">
      <Wrap>
        {/* Adicionado stagger suave para os cards aparecerem em sequência */}
        <Grid>
          {cards.map((c) => (
            <Card as={motion.button} key={c.key} onClick={() => onSelect(c.key)} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <CardTitle>{c.emoji} {c.title}</CardTitle>
              <CardDesc>{c.desc}</CardDesc>
            </Card>
          ))}
        </Grid>
        {showExtrasToggle && (
          <Side>
            <Toggle type="button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Ver menos ➖' : 'Ver mais ➕'}
            </Toggle>
          </Side>
        )}
      </Wrap>
    </Section>
  );
}


