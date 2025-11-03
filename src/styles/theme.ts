// Tema central para padronizar cores, tipografia e espaçamento
export const theme = {
  colors: {
    background: '#f6f7fb',
    surface: '#ffffff',
    primary: '#0A5BD3', // azul destaque
    primaryHover: '#084ab0',
    accent: '#FFD60A', // amarelo para CTAs
    text: '#111827',
    subtext: '#4B5563',
    border: '#EEF0F3',
    footer: '#023e8a',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '14px',
  },
  shadow: {
    xs: '0 1px 3px rgba(3,27,78,0.06)',
    sm: '0 4px 12px rgba(3,27,78,0.06)',
    md: '0 8px 20px rgba(3,27,78,0.08)',
  },
  spacing: (v: number) => `${v * 4}px`,
};

export type AppTheme = typeof theme;


