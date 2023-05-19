import styled from 'styled-components';

import { FarmingProcess as FarmingImg } from '../assets/images';

export default function FarmingProcess() {
  return (
    <Container>
      <h2>Farming Process</h2>
      <Wrapper>
        <ul>
          <li>
            <h4>STEP 1 (Sender): CULTIVATION</h4>
            <p>
              Write a heartfelt Blooming Letter expressing gratitude for
              the value created by the other person.
            </p>
          </li>
          <li>
            <h4>STEP 2 : EXTRACTION</h4>
            <p>
              Purchase the AI-generated INCENSE NFT capturing the value created
              by that person, along with the corresponding PROOF OF VALUE
              (SBT token, non-transferable) to provide evidence.
              Then, send them the link to mint the NFT.
            </p>
          </li>
          <li>
            <h4>STEP 3 : Gratitude Harvesting</h4>
            <p>
              {`Once you've sent the letter and gift to the recipient, 
              mint a gratitude NFT from Invisible Farm. It's free!`}
            </p>
          </li>
          <li>
            <h4>STEP 4 (Gift recipient) : Value Harvesting</h4>
            <p>
              {`Once you enter the Invisible Farm website through the provided link,
              generate your desired image as an INCENSE NFT using AI and mint it.
              Don't forget to also mint your PROOF OF VALUE.
              Showcase the value you've created to the world with utmost joy and pride!`}
            </p>
          </li>
        </ul>
        <ImageWrapper>
          <img src={FarmingImg} alt="Introduce farming process" />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Baloo 2';
  color: ${(({ theme }) => theme.colors.text2)};

  h2 {
    padding-block: 60px;
    text-align: center;
    font-size: 87px;
  }

  li {
    width: 800px;
    padding: 30px 20px;
    border-radius: 20px;

    background: #DBF1DC;
  }

  li + li {
    margin-top: 20px;
  }

  h4 {
    font-size: 26px;
    font-weight: 600;
  }
  
  p {
    font-size: 20px;
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  padding: 0 100px 100px;

  display: flex;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  width: 370px;

  img {
    width: 100%;
  }
`;
