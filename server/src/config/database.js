// Configuração do banco de dados
// Por enquanto, usando memória. Substitua por MongoDB/PostgreSQL quando implementar CRUD

// Simulação de banco em memória (temporário até implementar CRUD)
export const users = [];

// Função auxiliar para encontrar usuário por email
export const findUserByEmail = (email) => {
  return users.find((u) => u.email === email);
};

// Função auxiliar para encontrar usuário por ID
export const findUserById = (id) => {
  return users.find((u) => u.id === id);
};

// Função para criar usuário (temporário)
export const createUser = (userData) => {
  const newUser = {
    id: Date.now().toString(),
    ...userData,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  return newUser;
};

