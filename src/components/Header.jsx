import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import detectEthereumProvider from '@metamask/detect-provider';
import { useLocalStorage } from 'usehooks-ts';

import { Logo, Menu } from '../assets/images';

import useUserStore from '../hooks/useUserStore';

import AddressButton from './AddressButton';

export default function Header() {
  const userStore = useUserStore();
  const { wallet } = userStore;

  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  const [hasProvider, setHasProvider] = useState(null);

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));
    };

    getProvider();
  }, []);

  const handleConnect = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    await userStore.updateWallet(accounts);

    if (userStore.isConnectSuccess) {
      setAccessToken(accounts[0]);
    }
  };

  return (
    <Container>
      <HeaderWrapper>
        <MenuWrapper>
          <button type="button">더보기 버튼</button>
        </MenuWrapper>
        <LogoWrapper>
          <HomeLink to="/ivfm">Invisible Farm</HomeLink>
        </LogoWrapper>
        {accessToken ? (
          <ButtonWrapper>
            <AddressButton
              type="button"
              address={accessToken}
            />
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
            { hasProvider && wallet.accounts.length <= 0
        && (
          <ConnectButton
            type="button"
            onClick={handleConnect}
          >
            Connect Wallet
          </ConnectButton>
        )}
            { wallet.accounts.length > 0
        && (
          <AddressButton
            type="button"
            address={wallet.accounts[0]}
          />
        )}
          </ButtonWrapper>
        )}
      </HeaderWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 140px;

  padding: 30px 85px;

  background-color: ${(({ theme }) => theme.colors.primary)};
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuWrapper = styled.div`
  width: 55px;
  height: 55px;

  button {
    width: 100%;
    height: 100%;

    color: transparent;
    background: url(${Menu}) no-repeat 0 50%;
  }
`;

const LogoWrapper = styled.h1`
  width: 390px;
  height: 73px;
`;

const HomeLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;

  background: url(${Logo}) no-repeat 0 50%;
  background-size: contain;

  text-indent: -10000px;
`;

const ButtonWrapper = styled.div`
  button {
    color: #fff;
    border-radius: 2em;
    box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.5);

    width: 227px;
    height: 64px;

    font-family: 'Baloo 2';
    font-weight: 600;
    font-size: 26px;
  }
`;

const ConnectButton = styled.button`
  background-color: ${(({ theme }) => theme.colors.secondary)};
`;
