import styled from 'styled-components';

const Bar = styled.footer`
  background: ${({ theme }) => theme.colors.footer};
  color: #ffffff;
  text-align: center;
  padding: 16px;
`;

export function Footer() {
  return (
    <Bar>
      <p>© 2025 ContrataJá - Todos os direitos reservados - Matheus Krigger</p>
    </Bar>
  );
}


