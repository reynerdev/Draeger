// This will be our component template to create the blocks of inputs fields

import React from 'react';
import ContentWrapper from './ContentWrapper';
import { primary, neutral } from '../../../utils';

const BlockContent = ({ title, description, inputfield }) => {
  return (
    <ContentWrapper style={{ padding: '62px' }}>
      <RightWrapper>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </RightWrapper>
      <LeftWrapper></LeftWrapper>
    </ContentWrapper>
  );
};
export default BlockContent;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &.title {
    color: ${primary[200]};
  }
  &.description {
    color: ${neutral[500]};
  }
`;
const LeftWrapper = styled.div``;
