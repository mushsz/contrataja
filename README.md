# ContrataJá - Plataforma de Serviços Profissionais

Site moderno e profissional para conectar clientes a profissionais verificados, desenvolvido com React, TypeScript, Styled Components, Framer Motion e autenticação JWT.

## 🚀 Tecnologias

### Frontend
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Styled Components** - CSS-in-JS
- **Framer Motion** - Animações suaves

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **JWT** - Autenticação com tokens
- **bcryptjs** - Hash de senhas

## 📦 Instalação

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
cp .env.example .env
# Edite .env e configure JWT_SECRET
npm run dev
```

## 🔐 Sistema de Autenticação

O sistema usa JWT (JSON Web Tokens) para autenticação:

- **Registro**: `POST /api/auth/register`
- **Login**: `POST /api/auth/login`
- **Verificar usuário**: `GET /api/auth/me` (protegido)

### Variáveis de Ambiente (Backend)

Crie um arquivo `.env` na pasta `server/`:

```env
PORT=3001
JWT_SECRET=seu_secret_jwt_super_seguro_aqui_mude_em_producao
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
```

## ✨ Funcionalidades

- ✅ Busca de serviços profissionais
- ✅ Lista de profissionais verificados
- ✅ Design responsivo e moderno
- ✅ Animações suaves
- ✅ Formulário de contato
- ✅ SEO otimizado
- ✅ **Sistema de autenticação JWT**
- ✅ **Registro e login de usuários**

## 🏗️ Estrutura do Projeto

```
projetoTCC-main/
├── src/                    # Frontend React
│   ├── components/         # Componentes React
│   ├── styles/            # Tema e estilos globais
│   └── utils/             # Utilitários (API, etc)
├── server/                # Backend Node.js
│   ├── src/
│   │   ├── controllers/   # Lógica de negócio
│   │   ├── middleware/    # Middlewares (auth, etc)
│   │   ├── routes/       # Rotas da API
│   │   ├── utils/        # Utilitários (JWT, etc)
│   │   └── config/       # Configurações (DB, etc)
│   └── package.json
└── package.json
```

## 🔄 Próximos Passos

- [ ] Implementar CRUD completo
- [ ] Integrar banco de dados (MongoDB/PostgreSQL)
- [ ] Adicionar perfil de usuário
- [ ] Sistema de avaliações
- [ ] Chat entre usuários

## 📝 Licença

© 2025 ContrataJá - Matheus Krigger
