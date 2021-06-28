import React from 'react';
import styled from 'styled-components';
import { primaryBlue, typeScale } from '../../utils';
const Title = () => {
  return <Welcome>Hola, Reyner Loza</Welcome>;
};

export default Title;

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: ${typeScale.header3};
  color: ${primaryBlue[700]};
  font-weight: 700;
`;
