import styled from 'styled-components';

import { abbreviatedAddress } from '../utils/format';

// eslint-disable-next-line react/prop-types
export default function AddressButton({ address }) {
  return (
    <Button type="button">
      {abbreviatedAddress(address)}
    </Button>

  );
}

const Button = styled.button`
  background-color: ${(({ theme }) => theme.colors.pink5)};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
