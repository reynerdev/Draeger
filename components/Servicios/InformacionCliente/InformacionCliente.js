import React from 'react';
import styled from 'styled-components';
import { neutral } from '../../../utils';
import ContentWrapper from './ContentWrapper';
const InformacionCliente = () => {
  return (
    <MainContent>
      <ContentWrapper
        style={{ fontWeight: '700', color: neutral[700], fontSize: '25px' }}
      >
        Datos Principales
      </ContentWrapper>
    </MainContent>
  );
};

export default InformacionCliente;
const MainContent = styled.div`
  width: 100%;
`;
