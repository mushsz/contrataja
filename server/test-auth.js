// Script de teste para verificar se o sistema JWT está funcionando
import fetch from 'node-fetch';

const API_URL = 'http://localhost:3001/api';

async function testAuth() {
  console.log('🧪 Testando sistema de autenticação JWT...\n');

  try {
    // 1. Teste de Health Check
    console.log('1️⃣ Testando Health Check...');
    const healthRes = await fetch(`${API_URL.replace('/api', '')}/health`);
    const healthData = await healthRes.json();
    console.log('✅ Health Check:', healthData.message, '\n');

    // 2. Teste de Registro
    console.log('2️⃣ Testando Registro de usuário...');
    const registerData = {
      nome: 'Teste User',
      email: `teste${Date.now()}@example.com`,
      senha: 'senha123',
    };

    const registerRes = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerData),
    });

    if (!registerRes.ok) {
      const error = await registerRes.json();
      throw new Error(`Registro falhou: ${error.error}`);
    }

    const registerResult = await registerRes.json();
    console.log('✅ Registro bem-sucedido!');
    console.log('   Usuário:', registerResult.user.email);
    console.log('   Token recebido:', registerResult.token.substring(0, 20) + '...', '\n');

    const token = registerResult.token;

    // 3. Teste de Login
    console.log('3️⃣ Testando Login...');
    const loginRes = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: registerData.email,
        senha: registerData.senha,
      }),
    });

    if (!loginRes.ok) {
      const error = await loginRes.json();
      throw new Error(`Login falhou: ${error.error}`);
    }

    const loginResult = await loginRes.json();
    console.log('✅ Login bem-sucedido!');
    console.log('   Token recebido:', loginResult.token.substring(0, 20) + '...', '\n');

    // 4. Teste de rota protegida (me)
    console.log('4️⃣ Testando rota protegida /auth/me...');
    const meRes = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!meRes.ok) {
      const error = await meRes.json();
      throw new Error(`Rota protegida falhou: ${error.error}`);
    }

    const meResult = await meRes.json();
    console.log('✅ Rota protegida funcionando!');
    console.log('   Usuário autenticado:', meResult.user.email, '\n');

    // 5. Teste de token inválido
    console.log('5️⃣ Testando token inválido...');
    const invalidRes = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer token_invalido_123',
      },
    });

    if (invalidRes.ok) {
      throw new Error('Token inválido foi aceito (erro de segurança!)');
    }

    console.log('✅ Token inválido rejeitado corretamente!', '\n');

    console.log('🎉 Todos os testes passaram! Sistema JWT está funcionando corretamente.');
  } catch (error) {
    console.error('❌ Erro nos testes:', error.message);
    process.exit(1);
  }
}

// Aguarda servidor iniciar
setTimeout(() => {
  testAuth().catch(console.error);
}, 2000);

