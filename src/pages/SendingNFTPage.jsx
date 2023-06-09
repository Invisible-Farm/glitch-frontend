import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import styled from 'styled-components';

import { useLocalStorage } from 'usehooks-ts';
import { apiService } from '../services/ApiService';

export default function SendingNFTPage() {
  const [accessToken] = useLocalStorage('accessToken', '');
  const [letterContent] = useLocalStorage('letterContent', '');
  const [giftTokens, setGiftTokens] = useLocalStorage('giftTokens', '{}');

  const letter = JSON.parse(letterContent);

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [incenseList, setIncenseList] = useState([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const incenseItem = incenseList?.filter((incense) => incense.name === letter.value);

  let web3;
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);

    // console.log(web3);
  }

  const handleClickSend = async () => {
    const message = 'ITEM: \nBlooming Letter\nIncense NFT\nProof of Value SBT\n\nTYPE: \nPassion\n\nPRICE: \n5 matic';

    const signature = await web3.eth.personal.sign(message, accessToken, 'hello!');
    console.log(signature);

    window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: accessToken,
            to: letter.to,
            value: '11C37937E08000',
            gas: '0x5208',
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .then(() => {
        setTimeout(() => {
          navigate('/ivfm/generated');
        }, 300);
      });
  };

  const handleClickRegenerate = async () => {
    const { data: item } = await apiService.fetchIncenseNFT(incenseItem[0].id);

    setGiftTokens(JSON.stringify(item));
  };

  useEffect(() => {
    async function fetchData() {
      const { data: incenses } = await apiService.fetchIncenses();

      setIncenseList(incenses);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchImage() {
      console.log(incenseList);

      if (incenseList.length > 0) {
        const { data: item } = await apiService.fetchIncenseNFT(incenseItem[0].id);

        setGiftTokens(JSON.stringify(item));
      }
    }

    fetchImage();
  }, [incenseList]);

  const images = JSON.parse(giftTokens);

  return (
    <Container isOpen={isOpen}>
      <Title>
        <h3>Gift AI-generated Incense NFT and Proof of value SBT</h3>
        <p>
          Create AI-generated INCENSE NFT symbolizing the value generated by the recipient.
          And send it to the recipient along with PROOF OF VALUE SBT and a Blooming Letter.
        </p>
      </Title>
      <Wrapper>
        <Description>
          Press the REGENERATE button until you see the desired image.
          <br />
          <br />
          Once you find an image you like, click the SEND button.
          <br />
          <br />
          A private link will be generated for the recipient to mint their
          own AI-generated Incense NFT and Proof of Value SBT.
          <br />
          <br />
          Afterwards, you can personally send the link to the recipient through a text or message.
          <br />
          <br />
          <em>
            Cost for sending the Blooming Letter and NFTs:
            <br />
            5 matic (About $5)
          </em>
        </Description>
        <Outputs>
          <div>
            <p>Incense NFT</p>
            <span>
              Type:
              {' '}
              {letter.value}
            </span>
            <ImageWrapper>
              <img src={images.incenseImage} alt="Incense NFT preview" />
            </ImageWrapper>
            <button
              type="button"
              onClick={handleClickRegenerate}
            >
              Regenerate

            </button>
          </div>
          <div>
            <p>Proof of Value SBT</p>
            <span>
              Type:
              {' '}
              {letter.value}
            </span>
            <ImageWrapper>
              <img src={images.proofOfValueImage} alt="Proof of Value SBT preview" />
            </ImageWrapper>
          </div>
        </Outputs>
      </Wrapper>
      <ButtonWrapper>
        <SendButton
          type="button"
          onClick={toggleModal}
        >
          SEND & PAY WITH MATIC
        </SendButton>
      </ButtonWrapper>
      <div>
        {isOpen && (
          <ModalWrapper>
            <ModalContent>
              <h3>YOUR ITEMS & PAYMENT INFORMATION</h3>
              <h4>ITEM:</h4>
              <ul className="desc">
                <li key="Blooming Letter">Blooming Letter</li>
                <li key="Incense NFT">Incense NFT</li>
                <li key="Proof of Value SBT">Proof of Value SBT</li>
              </ul>
              <h4>TYPE:</h4>
              <p className="desc">{letter.value}</p>
              <h4>PRICE:</h4>
              <p className="desc">5 matic</p>
              <button
                type="button"
                id="pay-btn"
                onClick={handleClickSend}
              >
                SEND & PAY
              </button>
              <button
                type="button"
                id="close-btn"
                onClick={toggleModal}
              >
                X
              </button>
            </ModalContent>
          </ModalWrapper>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px 100px;

  position: relative;

  background-color: ${((props) => (props.isOpen ? 'rgba(0, 0, 0, 0.2)' : ''))}
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
  font-family: 'Baloo 2';

  position: relative;

  display: flex;
  gap: 10px;

  text-align: center;

  p {
    margin-block: 10px;
    color: ${(({ theme }) => theme.colors.text3)};
  }

  span {
    display: inline-block;
    margin-bottom: 10px;
    color: ${(({ theme }) => theme.colors.pink)};
  }

  button {
    background-color: ${(({ theme }) => theme.colors.text3)};
    margin-top: 10px;
    padding: 10px 20px;

    font-size: 20px;
    font-family: 'Baloo 2';
    color: ${(({ theme }) => theme.colors.primary)};

    box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;

  border: 1px solid ${(({ theme }) => theme.colors.border)};

  img {
    width: 100%;
    height: 100%;
  }
`;

const ButtonWrapper = styled.div`
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

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 20px;
  box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.5);
  background-color: white;

  width: 550px;

  padding: 30px;
`;

const ModalContent = styled.div`
  font-family: 'Baloo 2';

  font-size: 22px;
  color: ${(({ theme }) => theme.colors.text3)};

  text-align: center;

  h3 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  h4 {
    margin-top: 20px;
    font-weight: 600;
    text-align: left;
  }

  .desc {
    color: ${(({ theme }) => theme.colors.pink)};
    margin-top: 5px;

    text-align: left;
  }

  button {
  color: #fff;
  border-radius: 2em;
  box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.5);

  width: 130px;
  height: 54px;
  margin-top: 20px;

  font-family: 'Baloo 2';
  font-weight: 600;
  font-size: 20px;
  }
  
  button + button {
    margin-left: 10px;
  }

  #pay-btn {
    background-color: ${(({ theme }) => theme.colors.primary)};
  }

  #close-btn {
    background-color: ${(({ theme }) => theme.colors.pink)};
  }
`;
