import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NAV_ITEM from '../constants/inventoryNav';

export default function InventoryNav() {
  return (
    <div>
      <Title>My inventory</Title>
      <ul>
        {
          NAV_ITEM.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

const Title = styled.h3`
  text-align: center;
  margin-block: 50px;
  font-size: 30px;
  font-family: 'Baloo 2';
  font-weight: 500;
`;
