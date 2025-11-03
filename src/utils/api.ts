// Configuração da API e interceptors para autenticação

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Função para fazer requisições autenticadas
export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('token');

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Erro desconhecido' }));
    throw new Error(error.error || 'Erro na requisição');
  }

  return response.json();
};

// Funções específicas de autenticação
export const authApi = {
  register: async (nome: string, email: string, senha: string) => {
    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ nome, email, senha }),
    });
  },

  login: async (email: string, senha: string) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, senha }),
    });
  },

  me: async () => {
    return apiRequest('/auth/me');
  },
};

// Função para salvar token após login
export const saveToken = (token: string) => {
  localStorage.setItem('token', token);
};

// Função para remover token (logout)
export const removeToken = () => {
  localStorage.removeItem('token');
};

// Função para verificar se está autenticado
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

