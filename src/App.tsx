import { useMemo, useState } from 'react';
import { profissionaisData, ServicoKey, Profissional } from './data/profissionais';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services, CardItem } from './components/Services';
import { Professionals } from './components/Professionals';
import { Why } from './components/Why';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Register } from './components/Register';

const allCards: CardItem[] = [
  { key: 'engenheiro', emoji: '👷‍♂️', title: 'Engenheiro', desc: 'Projetos e consultoria técnica.' },
  { key: 'pedreiro', emoji: '🧱', title: 'Pedreiro', desc: 'Construção e reformas.' },
  { key: 'eletricista', emoji: '💡', title: 'Eletricista', desc: 'Instalações e reparos elétricos.' },
  { key: 'encanador', emoji: '🚰', title: 'Encanador', desc: 'Serviços hidráulicos e manutenção.' },
  { key: 'pintor', emoji: '🎨', title: 'Pintor', desc: 'Pintura residencial e comercial.' },
  { key: 'jardineiro', emoji: '🌿', title: 'Jardineiro', desc: 'Manutenção e paisagismo.' },
  { key: 'marceneiro', emoji: '🪚', title: 'Marceneiro', desc: 'Móveis sob medida.', extra: true },
  { key: 'faxineiro', emoji: '🧹', title: 'Faxineiro', desc: 'Limpeza geral e pós-obra.', extra: true },
  { key: 'baba', emoji: '👶', title: 'Babá', desc: 'Cuidado infantil.', extra: true },
  { key: 'cuidador', emoji: '❤️', title: 'Cuidador de Idosos', desc: 'Apoio e acompanhamento.', extra: true },
  { key: 'motorista', emoji: '🚗', title: 'Motorista', desc: 'Transporte particular.', extra: true },
  { key: 'professor', emoji: '📚', title: 'Professor Particular', desc: 'Aulas de reforço e idiomas.', extra: true },
  { key: 'designer', emoji: '🎨', title: 'Designer Gráfico', desc: 'Identidade visual e artes.', extra: true },
  { key: 'programador', emoji: '💻', title: 'Programador', desc: 'Sites e sistemas personalizados.', extra: true },
  { key: 'fotografo', emoji: '📷', title: 'Fotógrafo', desc: 'Eventos e ensaios.', extra: true },
];

export function App() {
  const [busca, setBusca] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [selecionado, setSelecionado] = useState<ServicoKey | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const filteredCards = useMemo(() => {
    const term = busca.trim().toLowerCase();
    if (!term) return allCards;
    return allCards.filter((c) => `${c.emoji} ${c.title}`.toLowerCase().includes(term));
  }, [busca]);

  const showToggle = useMemo(() => !busca.trim(), [busca]);
  const profissionais = useMemo<Profissional[]>(() => (selecionado ? profissionaisData[selecionado] : []), [selecionado]);

  function handleBuscar() {
    // apenas filtra visualmente; comportamento igual ao original
    // se não houver termo, restaura estado do "ver mais"
    if (!busca.trim()) setExpanded(false);
  }

  return (
    // Estrutura principal com fundo e tipografia vindos do GlobalStyle/Theme
    <div style={{ minHeight: '100vh' }}>
      {/* Header com navegação clara e contraste */}
      <Header
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
        onLogout={() => window.location.reload()}
      />
      {/* Hero com CTA destacado e busca acessível */}
      <Hero value={busca} onChange={setBusca} onBuscar={handleBuscar} />
      {/* Serviços com cards responsivos e botão de ver mais */}
      <Services
        cards={filteredCards.filter(c => !c.extra || expanded)}
        onSelect={(key) => setSelecionado(key)}
        expanded={expanded}
        setExpanded={setExpanded}
        showExtrasToggle={showToggle}
      />
      {/* Lista de profissionais com microanimações */}
      <Professionals list={profissionais} />
      {/* Benefícios do produto com grid responsivo */}
      <Why />
      {/* Contato com feedback em tempo real */}
      <Contact />
      <Footer />

      {/* Modais de autenticação */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
          onSuccess={() => window.location.reload()}
        />
      )}
      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
          onSuccess={() => window.location.reload()}
        />
      )}
    </div>
  );
}


