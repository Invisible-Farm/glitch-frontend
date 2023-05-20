import styled from 'styled-components';

import { useState } from 'react';
import { abbreviatedAddress } from '../utils/format';

// eslint-disable-next-line react/prop-types
export default function AddressButton({ address }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickDisconnect = () => {
    console.log('1111', window.ethereum.isConnected());

    if (window.ethereum.isConnected()) {
      window.ethereum.on('disconnect', (error) => {
        if (error) {
          console.error('Disconnect error:', error);
        }
        // Perform actions when disconnection occurs
        // Example: Update UI or display a message indicating disconnection
      });
    }

    console.log('2222', window.ethereum.isConnected());
  };

  return (
    <>
      <Button
        type="button"
        onClick={toggleMenu}
      >
        {abbreviatedAddress(address)}
      </Button>
      {isOpen && (
        <Menu>
          <button type="button">My Inventory</button>
          <button
            type="button"
            onClick={handleClickDisconnect}
          >
            Disconnect
          </button>
        </Menu>
      )}
    </>
  );
}

const Button = styled.button`
  position: relative;

  background-color: ${(({ theme }) => theme.colors.pink5)};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #fff;
  border-radius: 2em;
  box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.5);

  width: 227px;
  height: 64px;

  font-family: 'Baloo 2';
  font-weight: 600;
  font-size: 26px;
`;

const Menu = styled.div`
  position: absolute;

  margin-top: 5px;
  width: 227px;

  background-color: white;
  overflow: hidden;
  border-radius: 2em;
  box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.5);
  padding-bottom: 10px;

  button {
    display: block;

    font-size: 20px;
    font-family: 'Baloo 2';

    width: 100%;
    padding-top: 10px;
  }
`;
