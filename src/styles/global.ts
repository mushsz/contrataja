import { createGlobalStyle } from 'styled-components';

// Estilos globais: tipografia moderna, gradiente sutil e transições suaves
export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
    scroll-behavior: smooth; /* Melhor UX ao navegar por âncoras */
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, Arial, sans-serif; /* Tipografia moderna */
    color: ${({ theme }) => theme.colors.text};
    background:
      radial-gradient(1200px 400px at 10% -10%, rgba(10,91,211,0.06), transparent 40%),
      radial-gradient(1200px 400px at 90% 110%, rgba(255,214,10,0.08), transparent 40%),
      ${({ theme }) => theme.colors.background}; /* Fundo com leve profundidade */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a { color: inherit; }
  button { font-family: inherit; }
  /* Transições padrão sutis para elementos interativos */
  a, button { transition: all .25s ease; }
`;


