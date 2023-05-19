import styled from 'styled-components';

export default function SendingNFTPage() {
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
        <Description>
          Once you press the SEND button,
          <br />
          a private link will be generated for the recipient to mint their
          own AI-generated Incense NFT with a design of their choosing and Proof of Value SBT.
          <br />
          <br />
          Afterwards, you can personally send the link to the recipient through a text or message.
          <br />
          <br />
          <em>
            Cost for sending the Blooming Letter and NFT: $5 + Gas FEE
          </em>
        </Description>
        <Outputs>
          <div>
            <ImageWrapper>
              {/* <img src="" alt="Incense NFT preview" /> */}
            </ImageWrapper>
            <p>Incense NFT</p>
          </div>
          <div>
            <ImageWrapper>
              {/* <img src="" alt="Proof of Value SBT preview" /> */}
            </ImageWrapper>
            <p>Proof of Value SBT</p>
          </div>
          <em>Preview Image</em>
        </Outputs>
      </Wrapper>
      <ButtonWrapper>
        <SendButton type="button">SEND</SendButton>
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-block: 100px 130px;

  font-family: 'Drukaatie Burti';

  font-size: 20px;
`;

const Description = styled.p`
  width: 520px;

  color: ${(({ theme }) => theme.colors.text3)};

  em {
    color: ${(({ theme }) => theme.colors.pink2)};
  }
`;

const Outputs = styled.div`
  position: relative;

  display: flex;
  gap: 10px;

  text-align: center;

  p {
    margin-top: 10px;
    color: ${(({ theme }) => theme.colors.text3)};
  }

  em {
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translateX(-50%);

    color: ${(({ theme }) => theme.colors.pink2)};
    font-weight: 300;
}
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;

  border: 1px solid ${(({ theme }) => theme.colors.border)};
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const SendButton = styled.button`
  color: #fff;
  border-radius: 2em;
  background-color: ${(({ theme }) => theme.colors.primary)};
  box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.5);

  width: 130px;
  height: 54px;

  font-family: 'Baloo 2';
  font-weight: 600;
  font-size: 20px;
`;
