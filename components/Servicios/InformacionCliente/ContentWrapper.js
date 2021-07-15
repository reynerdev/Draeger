// This component will givus the padding necssary for each
// horizontal block of content
import React from 'react';
import styled from 'styled-components';

const ContentWrapper = ({ children, style }) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

export default ContentWrapper;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  ${'' /* border-bottom: 1px solid rgba(189, 190, 192, 0.35); */};
`;
