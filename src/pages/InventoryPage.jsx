import styled from 'styled-components';

export default function InventoryPage() {
  return (
    <Container />
  );
}

const Container = styled.div`
  color: ${(({ theme }) => theme.colors.black)};
  font-size: 40px;
  font-weight: 500;
`;
