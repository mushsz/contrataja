import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Profissional } from '../data/profissionais';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 44px 16px 56px;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: Inter, system-ui, -apple-system, Arial, sans-serif;
  margin: 0 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
`;

const Card = styled.div`
  background: #f9fafb;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Name = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 6px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.subtext};
  margin: 0 0 4px;
`;

export function Professionals({ list }: { list: Profissional[] }) {
  if (!list.length) return null;
  return (
    <Section id="profissionais" aria-label="Profissionais disponíveis">
      <Wrap>
        <Title>Profissionais Disponíveis</Title>
        {/* Fade-in/slide-in para cada card ao ficar visível */}
        <Grid>
          {list.map((p, i) => (
            <Card as={motion.div} key={p.nome} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Img src={p.foto} alt={p.nome} />
              <Name>{p.nome}</Name>
              <Text>{p.resumo}</Text>
              <Text><strong>📞 Telefone:</strong> {p.telefone}</Text>
            </Card>
          ))}
        </Grid>
      </Wrap>
    </Section>
  );
}


