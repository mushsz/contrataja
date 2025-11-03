import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  text-align: center;
  padding: 56px 16px;
`;

const Wrap = styled.div`
  max-width: 520px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 0 0 8px;
`;

const Sub = styled.p`
  margin: 0 0 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  resize: vertical;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: #0a0a0a;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color .2s ease, transform .15s ease;
  &:hover { background: #ffcd00; }
  &:active { transform: translateY(1px); }
`;

const Feedback = styled.p`
  margin-top: 10px;
`;

export function Contact() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [feedback, setFeedback] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome || !email || !mensagem) { setFeedback('Preencha todos os campos.'); return; }
    setFeedback('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setNome(''); setEmail(''); setMensagem('');
  }

  return (
    <Section id="contato" aria-label="Formulário de contato">
      <Wrap>
        <Title>Fale Conosco</Title>
        <Sub>Tem dúvidas, sugestões ou quer anunciar seus serviços? Envie uma mensagem!</Sub>
        <Form onSubmit={onSubmit}>
          <Input aria-label="Nome" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <Input aria-label="E-mail" type="email" placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Textarea aria-label="Mensagem" rows={5} placeholder="Sua mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
          <Button as={motion.button} whileTap={{ scale: 0.98 }} type="submit">Enviar</Button>
        </Form>
        <Feedback aria-live="polite">{feedback}</Feedback>
      </Wrap>
    </Section>
  );
}


