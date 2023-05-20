import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function GeneratedPage() {
  const navigate = useNavigate();

  const handleClickMint = () => {
    navigate('/ivfm/minted');
  };

  return (
    <Container>
      <Title>
        <h3>Send Incense NFT & Proof of Value SBT</h3>
        <p>
          Present the Incense NFT and Proof of Value SBT (Non-transferable)
          as a gift, validating the value created by the recipient.
        </p>
      </Title>
      <Wrapper>
        <h3>SHARE CLAIM LINK</h3>
        <p>
          Share the below link with allowlisted person so they can view letter and claim their NFTs
          <br />
        </p>
        <ClipBoardSection>
          <p>
            {`Hey there! My friend (recipient's name)! I've sent you a Blooming Letter
          along with an INCENSE NFT and PROOF OF VALUE SBT as a gift!
          Please check them out on the Invisible Farm website through
          the link below.`}
            <br />
            → www.invisiblefarm.xyz/minting/1
          </p>
          <button type="button">COPY</button>
        </ClipBoardSection>
        <p>
          Lastly, we would like to present the participants with a
          GRATITUDE NFT as a token of appreciation.
          <br />
          <br />
          This NFT can also serve as a membership feature within Invisible Farm.
        </p>
      </Wrapper>
      <ButtonWrapper>
        <SendButton
          type="button"
          onClick={handleClickMint}
        >
          Mint the Gratitude NFT
        </SendButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px 100px;
`;

const Title = styled.div`
  font-family: 'Baloo 2';

  h3 {
    color: ${(({ theme }) => theme.colors.black)};
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    color: ${(({ theme }) => theme.colors.gray)};
  }
`;

const Wrapper = styled.div`
  padding-top: 60px;

  text-align: center;
  font-family: 'Drukaatie Burti';
  color: ${(({ theme }) => theme.colors.text3)};

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 100px;
  }

  h3 {
    margin-block: 10px 20px;
    font-size: 30px;
  }

  p {
    font-size: 20px;
    width: 800px;
  }
`;

const ClipBoardSection = styled.div`
  text-align: right;
  
  p {
    background-color: ${(({ theme }) => theme.colors.pink3)};

    width: 550px;
    margin-top: 20px;
    padding: 10px;

    font-weight: 300;
    text-align: left;
    line-height: 1.4;
  }

  button {
    margin-block: 5px 30px;

    background-color: ${(({ theme }) => theme.colors.text3)};
    color: #fff;

    padding: 5px;
    border-radius: 5px;

    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 60px;

  text-align: center;
`;

const SendButton = styled.button`
  color: #fff;
  border-radius: 2em;
  background-color: ${(({ theme }) => theme.colors.primary)};
  box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.5);

  width: 250px;
  height: 54px;

  font-family: 'Baloo 2';
  font-weight: 600;
  font-size: 20px;
`;
