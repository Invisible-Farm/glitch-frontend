import styled from 'styled-components';
import InventoryNav from '../components/InventoryNav';

export default function InventoryPage() {
  return (
    <Container>
      <InventoryNav />
    </Container>
  );
}

const Container = styled.div`
  color: ${(({ theme }) => theme.colors.black)};
  font-size: 40px;
  font-weight: 500;
`;
