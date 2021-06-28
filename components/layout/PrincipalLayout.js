import React from 'react';
import { neutral, backgrounds } from '../../utils';
import styled from 'styled-components';
const PrincipalLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PrincipalLayout;

const Wrapper = styled.div`
  background-color: ${backgrounds.background};
  height: 100vh;
`;
