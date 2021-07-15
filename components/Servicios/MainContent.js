import React from 'react';
import styled from 'styled-components';
import { neutral, backgrounds } from '../../utils';
import InformacionCliente from './InformacionCliente/InformacionCliente';
const MainContent = () => {
  return (
    <Main>
      <InformacionCliente />
      <Line />
    </Main>
  );
};

export default MainContent;
const Main = styled.div`
  width: 100%;
  background-color: ${backgrounds.backgroundServicio};
  padding: 32px;
`;

const Line = styled.hr`
  border-top: 1px solid rgba(189, 190, 192, 0.35);
  margin: 0px;
`;
