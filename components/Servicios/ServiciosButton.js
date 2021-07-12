import { ServiceButton } from '../Button';
import React from 'react';
import styled from 'styled-components';

const ServiciosButton = ({ bgcolor, children }) => {
  return (
    <ServiceButtonEdited style={{ backgroundColor: bgcolor }}>
      {children}
    </ServiceButtonEdited>
  );
};

export default ServiciosButton;

// adding css extra to the Servicios Button

const ServiceButtonEdited = styled(ServiceButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
`;
