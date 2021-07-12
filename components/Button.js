import React from 'react';
import styled from 'styled-components';
import { primary, primaryBlue, typeScale, neutral } from '../utils';
// const Button = ({ children }) => {
//   return <PrimaryButton>{children}</PrimaryButton>;
// };

// export default Button;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
`;
export const PrimaryButton = styled(Button)`
  background-color: ${primaryBlue[400]};
  font-size: ${typeScale.paragraph};
  padding: 0.5rem 1rem;
  color: ${neutral[100]};
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${primaryBlue[500]};
  font-weight: 700;
`;

export const ServiceButton = styled(Button)``;
