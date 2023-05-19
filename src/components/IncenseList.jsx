import styled from 'styled-components';

import INCENSE_TYPES from '../constants/incenseList';

import { IncenseList as Crystal } from '../assets/images';

export default function IncenseList() {
  return (
    <Container>
      <h2>Incense List</h2>
      <List>
        {INCENSE_TYPES.map((type, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>{type}</li>
        ))}
      </List>
      <p>
        Share your appreciation with community members by
        gifting them AI-generated
        <br />
        Value Incense NFTs
      </p>
    </Container>
  );
}

const Container = styled.div`
  background: linear-gradient(to right, #70b5f9, #88d38f);
  text-align: center;
  font-family: 'Baloo 2';
  color: #fff;

  h2 {
    padding-block: 40px;
    font-size: 87px;
    font-weight: 500;
  }

  p {
    padding-block: 40px;
    font-size: 32px;
    line-height: 1.6;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  padding-inline: 50px;

  background: ${(({ theme }) => theme.colors.background)};

  font-family: 'Drukaatie Burti';
  font-size: 22px;
  

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${(({ theme }) => theme.colors.text)};

    width: 150px;
    height: 150px;

    background-image: url(${Crystal});
    background-size: cover;
  }
`;
