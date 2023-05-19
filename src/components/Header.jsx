import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Logo, Menu } from '../assets/images';

export default function Header() {
  return (
    <Container>
      <HeaderWrapper>
        <MenuWrapper>
          <button type="button">더보기 버튼</button>
        </MenuWrapper>
        <LogoWrapper>
          <HomeLink to="/">Invisible Farm</HomeLink>
        </LogoWrapper>
        <ButtonWrapper>
          <button type="button">Connect Wallet</button>
        </ButtonWrapper>
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
    background-color: ${(({ theme }) => theme.colors.secondary)};
    box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.5);

    width: 227px;
    height: 64px;

    font-family: 'Baloo 2';
    font-weight: 600;
    font-size: 26px;
  }
`;
