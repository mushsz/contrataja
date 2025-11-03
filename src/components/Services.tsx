import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ServicoKey } from '../data/profissionais';

export type CardItem = { key: ServicoKey; emoji: string; title: string; desc: string; extra?: boolean };

const Section = styled.section`
  padding: 40px 16px;
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
  background: #ffffff;
  border: 1px solid #eef0f3;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 6px 16px rgba(3,27,78,0.06);
  cursor: pointer;
  transition: transform .18s ease, box-shadow .18s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(3,27,78,0.08); }
`;

const CardTitle = styled.h3`
  font-family: Inter, system-ui, -apple-system, Arial, sans-serif;
  color: #0a5bd3;
  font-size: 18px;
  margin: 0 0 6px;
`;
const CardDesc = styled.p`
  color: #4b5563;
  font-size: 14px;
`;

const Side = styled.div`
  position: sticky;
  top: 86px;
  height: max-content;
`;

const Toggle = styled.button`
  background: #0a5bd3;
  color: #ffffff;
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  min-width: 150px;
  transition: background-color .2s ease;
  &:hover { background: #084ab0; }
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
        <Grid>
          {cards.map((c) => (
            <Card as={motion.button} key={c.key} onClick={() => onSelect(c.key)} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
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


