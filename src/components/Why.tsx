import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section`
  background: #ffffff;
  padding: 48px 16px;
`;

const Wrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #0a5bd3;
  text-align: center;
  margin: 0 0 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`;

const Card = styled.div`
  background: #f5f7fb;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 6px 14px rgba(3,27,78,0.05);
`;

const Icon = styled.span`
  display: block;
  font-size: 28px;
  margin-bottom: 8px;
`;

export function Why() {
  const items = [
    { icon: '⚡', title: 'Rápido e Fácil', text: 'Encontre o profissional ideal em poucos cliques, sem burocracia.' },
    { icon: '✅', title: 'Profissionais Verificados', text: 'Prestadores avaliados com foco em qualidade e segurança.' },
    { icon: '💬', title: 'Atendimento Direto', text: 'Converse diretamente com o profissional para alinhar os detalhes.' },
    { icon: '💰', title: 'Preço Justo', text: 'Negocie valores e escolha a melhor proposta para o seu orçamento.' },
  ];
  return (
    <Section id="porque">
      <Wrap>
        <Title>Por que escolher o ContrataJá?</Title>
        <Grid>
          {items.map((i, idx) => (
            <Card as={motion.div} key={i.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}>
              <Icon>{i.icon}</Icon>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
            </Card>
          ))}
        </Grid>
      </Wrap>
    </Section>
  );
}


