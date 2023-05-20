/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Petal } from '../assets/images';
import { apiService } from '../services/ApiService';

import useLetterFormStore from '../hooks/useLetterFormStore';

export default function SendingLetterPage() {
  const navigate = useNavigate();

  const letterFormStore = useLetterFormStore();
  const { fields } = letterFormStore;

  const [accessToken] = useLocalStorage('accessToken', '');
  const [, setLetterContent] = useLocalStorage('letterContent', '');

  const handleClickNext = () => {
    if (letterFormStore.isValidateFailed()) {
      return;
    }

    setLetterContent(JSON.stringify(fields));

    navigate('/ivfm/send');
  };

  const [incenseList, setIncenseList] = useState();
  const [communityList, setCommunityList] = useState();

  useEffect(() => {
    async function fetchData() {
      const { data: incenses } = await apiService.fetchIncenses();
      const { data: communities } = await apiService.fetchCommunities();

      const sortedIncenses = incenses.sort((a, b) => {
        if (a.useYn === b.useYn) {
          return 0;
        }

        if (a.useYn === 'y' && b.useYn === null) {
          return -1;
        }

        return 1;
      });

      setIncenseList(sortedIncenses);
      setCommunityList(communities);
    }

    fetchData();
  }, []);

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
          <Form>
            <div className="answers">
              <label htmlFor="input-community">Community:</label>
              <select
                name="values"
                id="input-community"
                onChange={(e) => letterFormStore.changeField((
                  { community: e.target.value }))}
              >
                <option value="" selected>Select your community</option>
                {communityList?.map((item) => (
                  <option
                    key={item.id}
                    value={item.name}
                    className="inputs"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="answers">
              <label htmlFor="input-from">From:</label>
              <input
                readOnly
                value={accessToken}
                type="text"
                id="input-from"
                className="inputs"
                onChange={(e) => letterFormStore.changeField((
                  { from: e.target.value }))}
              />
            </div>
            <div className="answers">
              <label htmlFor="input-to">To:</label>
              <input
                type="text"
                id="input-to"
                className="inputs"
                onChange={(e) => letterFormStore.changeField((
                  { to: e.target.value }))}
              />
            </div>
            <div className="answers">
              <label htmlFor="input-value">Value created by him/her:</label>
              <select
                name="values"
                id="input-value"
                onChange={(e) => letterFormStore.changeField((
                  { value: e.target.value }))}
              >
                <option value="" selected className="inputs">Please select one</option>
                {incenseList?.map((item) => (
                  item.useYn === 'y' ? (
                    <option
                      key={item.id}
                      value={item.name}
                      className="inputs"
                    >
                      {item.name}

                    </option>
                  ) : (
                    <option
                      key={item.id}
                      value={item.name}
                      className="inputs"
                      disabled
                    >
                      {`${item.name} (미지원)`}
                    </option>
                  )
                ))}
              </select>
            </div>
            <div className="answers">
              <fieldset
                onChange={(e) => letterFormStore.changeField((
                  { response: e.target.value }))}
              >
                <legend>My response:</legend>
                <div>
                  <input type="radio" id="gratitude" name="response" value="gratitude" />
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
            <div className="answers">
              <label htmlFor="input-story">Story:</label>
              <textarea
                id="input-story"
                placeholder="Elaborate your experience with them."
                className="inputs"
                onChange={(e) => letterFormStore.changeField((
                  { story: e.target.value }))}
              />
            </div>
          </Form>
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
              <div className="dl-wrapper">
                <dt>From:</dt>
                <dd>{accessToken}</dd>
              </div>
              <div className="dl-wrapper">
                <dt>To:</dt>
                <dd>{fields.to}</dd>
              </div>
              <div className="dl-wrapper">
                <dt>Value created by him/her:</dt>
                <dd>{fields.value}</dd>
              </div>
              <div className="dl-wrapper">
                <dt>My response:</dt>
                <dd>{fields.response}</dd>
              </div>
              <div className="dl-wrapper story-output-wrapper">
                <dt>story:</dt>
                <dd>{fields.story}</dd>
              </div>
            </dl>
          </Output>
          <em>Preview Image</em>
        </OutputWrapper>
      </LetterWrapper>
      <ButtonWrapper>
        <NextButton
          type="button"
          onClick={handleClickNext}
        >
          NEXT
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px 100px;

  select option {
    color: white;
  }
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

const Form = styled.form`
  label, legend {
    font-weight: 300;
    font-size: 20px;
  }

  .inputs {
    border: 1px solid #c1c1c1;
    border-radius: 5px;
    width: 80%;
    font-size: 18px;

    font-family: 'Drukaatie Burti';
    font-weight: 300;
    color: ${(({ theme }) => theme.colors.pink)};
    padding: 5px 8px;
  }

  .answers + .answers {
    margin-top: 5px;
  }

  textarea {
    width: 100% !important;
    height: 150px;
    font-size: 16px !important;
    resize: none;
  }

  textarea::placeholder {
    color: ${(({ theme }) => theme.colors.pink)};
  }

  option {
/*  */
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
  padding: 20px;

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

  .dl-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 300;

    overflow: hidden;
  }

  .dl-wrapper + .dl-wrapper {
    margin-top: 10px;
  }

  dt, dd {
    display: inline-block;
  }

  dd {
    border: 1px solid red;
    border-style: dotted;
    width: 180px;
    height: 20px;
  }

  .story-output-wrapper {
    display: block;
    text-align: left;

    dd {
      display: block;
      
      width: 100%;
      height: 100px;
      margin-top: 10px;
      padding: 5px;
    }
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
