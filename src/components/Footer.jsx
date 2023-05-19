import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { LogoVertical } from '../assets/images';

export default function Footer() {
  return (
    <Container>
      <LogoWrapper>
        <img src={LogoVertical} alt="Invisible Farm Logo" />
      </LogoWrapper>
      <AboutUs>
        <ul>
          <li>
            <Link to="/">Twitter</Link>
          </li>
          <li>
            <Link to="/">Instagram</Link>
          </li>
          <li>
            <Link to="/">Discord</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Contact us</Link>
          </li>
        </ul>
      </AboutUs>
    </Container>
  );
}

const Container = styled.div`
  padding: 130px 100px 80px;
  background-color: ${(({ theme }) => theme.colors.primary)};

  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const LogoWrapper = styled.div`
  width: 200px;

  img {
    width: 100%;
  }
`;

const AboutUs = styled.div`
  display: flex;

  ul {
    display: flex;
  }

  ul + ul {
    margin-left: 300px;
  }

  li + li {
    margin-left: 150px;
  }

  a {
    color: #fff;
  }
`;
