export type Profissional = {
  nome: string;
  foto: string;
  resumo: string;
  telefone: string;
};

export type ServicoKey =
  | 'engenheiro'
  | 'pedreiro'
  | 'eletricista'
  | 'encanador'
  | 'pintor'
  | 'jardineiro'
  | 'marceneiro'
  | 'faxineiro'
  | 'baba'
  | 'cuidador'
  | 'motorista'
  | 'professor'
  | 'designer'
  | 'programador'
  | 'fotografo';

export const profissionaisData: Record<ServicoKey, Profissional[]> = {
  engenheiro: [
    { nome: 'Carlos Silva', foto: 'https://via.placeholder.com/300x200', resumo: 'Engenheiro civil com 10 anos de experiência.', telefone: '(51) 99999-1111' },
    { nome: 'Mariana Souza', foto: 'https://via.placeholder.com/300x200', resumo: 'Especialista em projetos estruturais.', telefone: '(51) 98888-2222' },
  ],
  pedreiro: [
    { nome: 'João Pereira', foto: 'https://via.placeholder.com/300x200', resumo: 'Pedreiro com 15 anos de experiência.', telefone: '(51) 97777-3333' },
    { nome: 'Antônio Lima', foto: 'https://via.placeholder.com/300x200', resumo: 'Especialista em acabamento e alvenaria.', telefone: '(51) 96666-4444' },
  ],
  eletricista: [
    { nome: 'Paulo Mendes', foto: 'https://via.placeholder.com/300x200', resumo: 'Eletricista certificado.', telefone: '(51) 95555-5555' },
    { nome: 'Fernanda Alves', foto: 'https://via.placeholder.com/300x200', resumo: 'Experiência em manutenção elétrica.', telefone: '(51) 94444-6666' },
  ],
  encanador: [
    { nome: 'Rogério Santos', foto: 'https://via.placeholder.com/300x200', resumo: 'Encanador com 12 anos de experiência.', telefone: '(51) 93333-7777' },
    { nome: 'Cláudia Ferreira', foto: 'https://via.placeholder.com/300x200', resumo: 'Especialista em manutenção hidráulica.', telefone: '(51) 92222-8888' },
  ],
  pintor: [
    { nome: 'Eduardo Rocha', foto: 'https://via.placeholder.com/300x200', resumo: 'Pintor profissional com técnicas modernas.', telefone: '(51) 91111-9999' },
    { nome: 'Luciana Prado', foto: 'https://via.placeholder.com/300x200', resumo: 'Especialista em pintura decorativa.', telefone: '(51) 90000-0001' },
  ],
  jardineiro: [
    { nome: 'Pedro Campos', foto: 'https://via.placeholder.com/300x200', resumo: 'Experiência em paisagismo.', telefone: '(51) 90000-0002' },
    { nome: 'Ana Beatriz', foto: 'https://via.placeholder.com/300x200', resumo: 'Cuidados com plantas ornamentais.', telefone: '(51) 90000-0003' },
  ],
  marceneiro: [
    { nome: 'Roberto Lima', foto: 'https://via.placeholder.com/300x200', resumo: 'Móveis sob medida e restauração.', telefone: '(51) 90000-0004' },
    { nome: 'Sofia Martins', foto: 'https://via.placeholder.com/300x200', resumo: 'Especialista em design de móveis.', telefone: '(51) 90000-0005' },
  ],
  faxineiro: [
    { nome: 'Maria Oliveira', foto: 'https://via.placeholder.com/300x200', resumo: 'Limpeza residencial e pós-obra.', telefone: '(51) 90000-0006' },
    { nome: 'José Almeida', foto: 'https://via.placeholder.com/300x200', resumo: 'Serviços de limpeza comercial.', telefone: '(51) 90000-0007' },
  ],
  baba: [
    { nome: 'Camila Torres', foto: 'https://via.placeholder.com/300x200', resumo: 'Babá com 8 anos de experiência.', telefone: '(51) 90000-0008' },
    { nome: 'Renata Souza', foto: 'https://via.placeholder.com/300x200', resumo: 'Especialista em cuidados infantis.', telefone: '(51) 90000-0009' },
  ],
  cuidador: [
    { nome: 'Marcos Vieira', foto: 'https://via.placeholder.com/300x200', resumo: 'Cuidador de idosos com formação em enfermagem.', telefone: '(51) 90000-0010' },
    { nome: 'Patrícia Gomes', foto: 'https://via.placeholder.com/300x200', resumo: 'Experiência em cuidados paliativos.', telefone: '(51) 90000-0011' },
  ],
  motorista: [
    { nome: 'André Costa', foto: 'https://via.placeholder.com/300x200', resumo: 'Motorista particular e executivo.', telefone: '(51) 90000-0012' },
    { nome: 'Felipe Ramos', foto: 'https://via.placeholder.com/300x200', resumo: 'Experiência em transporte de passageiros.', telefone: '(51) 90000-0013' },
  ],
  professor: [
    { nome: 'Laura Fernandes', foto: 'https://via.placeholder.com/300x200', resumo: 'Professora de inglês e espanhol.', telefone: '(51) 90000-0014' },
    { nome: 'Ricardo Lopes', foto: 'https://via.placeholder.com/300x200', resumo: 'Aulas de matemática e física.', telefone: '(51) 90000-0015' },
  ],
  designer: [
    { nome: 'Isabela Nunes', foto: 'https://via.placeholder.com/300x200', resumo: 'Designer gráfico especialista em branding.', telefone: '(51) 90000-0016' },
    { nome: 'Thiago Moreira', foto: 'https://via.placeholder.com/300x200', resumo: 'Criação de artes digitais.', telefone: '(51) 90000-0017' },
  ],
  programador: [
    { nome: 'Lucas Martins', foto: 'https://via.placeholder.com/300x200', resumo: 'Desenvolvedor full-stack.', telefone: '(51) 90000-0018' },
    { nome: 'Fernanda Ribeiro', foto: 'https://via.placeholder.com/300x200', resumo: 'Especialista em sistemas web.', telefone: '(51) 90000-0019' },
  ],
  fotografo: [
    { nome: 'Bruno Almeida', foto: 'https://via.placeholder.com/300x200', resumo: 'Fotógrafo de eventos e ensaios.', telefone: '(51) 90000-0020' },
    { nome: 'Carla Mendes', foto: 'https://via.placeholder.com/300x200', resumo: 'Especialista em fotografia.', telefone: '(51) 90000-0021' },
  ],
};


