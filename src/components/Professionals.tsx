import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Profissional } from '../data/profissionais';

const Section = styled.section`
  background: #ffffff;
  border-top: 1px solid #eef0f3;
  padding: 36px 16px 48px;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #0a5bd3;
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
  border: 1px solid #eef0f3;
  padding: 14px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(3,27,78,0.06);
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Name = styled.h4`
  color: #0a5bd3;
  margin: 0 0 6px;
`;

const Text = styled.p`
  color: #4b5563;
  margin: 0 0 4px;
`;

export function Professionals({ list }: { list: Profissional[] }) {
  if (!list.length) return null;
  return (
    <Section id="profissionais" aria-label="Profissionais disponíveis">
      <Wrap>
        <Title>Profissionais Disponíveis</Title>
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


