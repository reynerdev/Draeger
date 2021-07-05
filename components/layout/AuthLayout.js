import React from 'react';
import styled from 'styled-components';
const AuthLayout = ({ children }) => {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
};

export default AuthLayout;

const AuthLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
`;
