/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';

import { Petal } from '../assets/images';

export default function SendingLetterPage() {
  return (
    <Container>
      <Title>
        <h3>Sending blooming letter</h3>
        <p>Your letter will be privately delivered to the recipient</p>
      </Title>
      <LetterWrapper>
        <Input>
          <h4>BLOOMING LETTER</h4>
          <p>
            Have you experienced anyone who had a positive influence on you personally,
            or created invisible value for the good of your community?
            <br />
            <br />
            Leave a letter expressing gratitude, respect, compliment, or smile
            for the value created by that person.
          </p>
          <form>
            <div>
              <label htmlFor="input-community">Community:</label>
              <input type="text" id="input-community" />
            </div>
            <div>
              <label htmlFor="input-from">From:</label>
              <input type="text" id="input-from" />
            </div>
            <div>
              <label htmlFor="input-to">To:</label>
              <input type="text" id="input-to" />
            </div>
            <div>
              <label htmlFor="input-by">Value created by him/her:</label>
              <input type="text" id="input-by" />
            </div>
            <div>
              <fieldset>
                <legend>My response:</legend>
                <div>
                  <input type="radio" id="gratitude" name="response" value="gratitude" checked />
                  <label htmlFor="gratitude">Gratitude</label>
                </div>
                <div>
                  <input type="radio" id="respect" name="response" value="respect" />
                  <label htmlFor="respect">Respect</label>
                </div>
                <div>
                  <input type="radio" id="compliment" name="response" value="compliment" />
                  <label htmlFor="compliment">Compliment</label>
                </div>
                <div>
                  <input type="radio" id="smile" name="response" value="smile" />
                  <label htmlFor="smile">Smile:)</label>
                </div>
              </fieldset>
            </div>
            <div>
              <label htmlFor="input-story">Story:</label>
              <textarea id="input-story" />
            </div>
          </form>
        </Input>
        <OutputWrapper>
          <Output>
            <h4>BLOOMING LETTER</h4>
            <p>
              Have you experienced anyone who had a positive influence on you personally,
              or created invisible value for the good of your community?
              <br />
              <br />
              Leave a letter expressing gratitude, respect, compliment, or smile
              for the value created by that person.
            </p>
            <dl>
              <dt>From:</dt>
              <dd>{}</dd>
              <dt>To:</dt>
              <dd>{}</dd>
              <dt>Value created by him/her:</dt>
              <dd>{}</dd>
              <dt>My response:</dt>
              <dd>{}</dd>
              <dt>story:</dt>
              <dd>{}</dd>
            </dl>
          </Output>
          <em>Preview Image</em>
        </OutputWrapper>
      </LetterWrapper>
      <ButtonWrapper>
        <NextButton type="button">NEXT</NextButton>
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

const LetterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-block: 20px 30px;
`;

const Input = styled.div`
  font-family: 'Drukaatie Burti';

  width: 550px;
  height: 700px;

  padding: 40px;

  color: ${(({ theme }) => theme.colors.text3)};
  border: 1px solid ${(({ theme }) => theme.colors.pink)};
  background-color: ${(({ theme }) => theme.colors.letterBackground)};
  box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.5);

  h4 {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
  }

  p {
    margin-block: 30px;
    font-size: 20px;
    text-align: center;
  }
`;

const OutputWrapper = styled.div`
  position: relative;

  font-family: 'Drukaatie Burti';

  width: 600px;
  height: 710px;

  background: url(${Petal}) no-repeat 0 0;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  em {
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);

    color: ${(({ theme }) => theme.colors.pink4)};
    font-size: 20px;
    font-weight: 300;
  }
`;

const Output = styled.div`
  color: ${(({ theme }) => theme.colors.text3)};
  text-align: center;

  width: 400px;
  height: 500px;

  border: 1px solid ${(({ theme }) => theme.colors.pink3)};

  h4 {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  p {
    margin-block: 20px;
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const NextButton = styled.button`
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
