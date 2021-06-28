import React from 'react';
import styled from 'styled-components';

const ContainerLayout = ({ children }) => {
  return <Container> {children}</Container>;
};

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
export default ContainerLayout;
