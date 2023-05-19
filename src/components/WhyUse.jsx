import styled from 'styled-components';

export default function WhyUse() {
  return (
    <Container>
      <h2>
        Why use
        <br />
        Invisible Farm?
      </h2>
      <p>
        Invisible Farm is a community tool and NFT art project that captures
        and visualizes the intangible values within the community and human
        relationships.
        <br />
        <br />
        By writing a letter expressing gratitude and awarding them with
        Incense NFTs and Proof of Value (SBT), you can authenticate their
        overlooked contributions and bring forth the unseen value from the
        physical world into the on-chain,
        creating a new narrative of significance.
      </p>
    </Container>
  );
}

const Container = styled.div`
  background: ${(({ theme }) => theme.colors.background)};

  text-align: center;
  font-family: 'Baloo 2';
  color: ${(({ theme }) => theme.colors.text2)};

  padding-block: 40px 80px;

  h2 {
    font-size: 87px;
  }

  p {
    margin-top: 40px;
    padding-inline: 180px;

    font-size: 30px;
    line-height: 1.6;
  }
`;
