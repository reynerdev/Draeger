import React from 'react';
import { ContainerLayout } from '../layout';
import { neutral, secondary } from '../../utils';
import MainButton from './MainButton';
import styled from 'styled-components';
const MainButtonContainer = () => {
  return (
    <Container>
      <ContainerLayout>
        <ButtonsWrapper>
          <MainButton background={'red'} />
          <MainButton />
          <MainButton />
        </ButtonsWrapper>
      </ContainerLayout>
    </Container>
  );
};

export default MainButtonContainer;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${neutral.backgrounMainButtonContainer};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: pink;
  padding: 36px;
  & button {
    margin-left: 96px;
  }
`;
