import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Hero as HeroImg } from '../assets/images';

export default function Hero() {
  return (
    <Container>
      <h2>Empowering Community</h2>
      <p>{'Capturing and Validating Community\'s intangible Values'}</p>
      <SendLink to="/ivfm/letter">
        Send Blooming Letters
        and Incense kits
      </SendLink>
    </Container>
  );
}

const Container = styled.div`
  height: 750px;
  padding-top: 250px;
  background: url(${HeroImg}) no-repeat 50% 60%;

  text-align: center;
  font-family: 'Baloo 2';
  color: #fff;

  h2 {
    font-size: 87px;
  }

  p {
    margin-block: 12px 30px;
    font-size: 37px;
    font-weight: 600;
  }
`;

const SendLink = styled(Link)`
  border-radius: 1em;
  background: ${(({ theme }) => theme.colors.tertiary)};
  opacity: 0.9;
  box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.5);

  display: inline-block;
  width: 430px;
  height: 114px;
  padding-block: 20px;

  color: #fff;
  font-weight: 600;
  font-size: 37px;
`;
