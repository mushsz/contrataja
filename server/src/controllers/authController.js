import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt.js';
import { findUserByEmail, createUser } from '../config/database.js';

// Registro de novo usuário
export const register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // Validação básica
    if (!nome || !email || !senha) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    if (senha.length < 6) {
      return res.status(400).json({ error: 'A senha deve ter no mínimo 6 caracteres' });
    }

    // Verifica se usuário já existe
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'Email já cadastrado' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Cria usuário (sem senha no objeto retornado)
    const newUser = createUser({
      nome,
      email,
      senha: hashedPassword, // Armazena hash, não a senha
    });

    // Remove senha do objeto antes de retornar
    const { senha: _, ...userWithoutPassword } = newUser;

    // Gera token JWT
    const token = generateToken(newUser);

    res.status(201).json({
      message: 'Usuário criado com sucesso',
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    console.error('Erro no registro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

// Login de usuário
export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Validação básica
    if (!email || !senha) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    // Busca usuário
    const user = findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    // Verifica senha
    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    // Remove senha do objeto antes de retornar
    const { senha: _, ...userWithoutPassword } = user;

    // Gera token JWT
    const token = generateToken(user);

    res.json({
      message: 'Login realizado com sucesso',
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

// Verifica token e retorna dados do usuário
export const me = async (req, res) => {
  try {
    // req.user é definido pelo middleware authenticateToken
    const user = req.user;
    res.json({ user });
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

