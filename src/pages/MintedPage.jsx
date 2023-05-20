import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MintedPage() {
  return (
    <Container>
      <h2>🎉</h2>
      <h3>Congratulations!</h3>
      <p>
        The Gratitude NFT has also been successfully minted!
        <br />
        <br />
        Go to your inventory and check out your NFTs and letters.
      </p>
      <StyledLink to="/ivfm/inventory">
        Go to my inventory
      </StyledLink>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 120px;

  text-align: center;
  font-family: 'Drukaatie Burti';
  color: ${(({ theme }) => theme.colors.text3)};

  h2 {
    font-size: 100px;
  }

  h3 {
    margin-top: 20px;
    font-size: 30px;
  }

  p {
    font-size: 20px;
    margin-block: 30px 120px;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;

  color: #fff;
  border-radius: 2em;
  background-color: ${(({ theme }) => theme.colors.primary)};
  box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.5);

  width: 250px;
  height: 54px;

  font-family: 'Baloo 2';
  font-weight: 600;
  font-size: 20px;
  line-height: 54px;
`;
