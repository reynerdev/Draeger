import React from 'react';
import { ContainerLayout } from '../layout';
import { neutral, primary, primaryBlue, secondary } from '../../utils';
import MainButton from './MainButton';
import styled from 'styled-components';
const MainButtonContainer = () => {
  return (
    <Container>
      <ContainerLayout>
        <ButtonsWrapper>
          <MainButton
            background={'#fff'}
            textColor={neutral[700]}
            iconColor={primaryBlue[800]}
          />
          <MainButton
            background={primaryBlue[400]}
            textColor={primary.white}
            iconColor={'#fff'}
          />
          <MainButton
            background={secondary.green}
            textColor={primary.white}
            iconColor={'#fff'}
          />
          <MainButton
            background={secondary.orange}
            textColor={primary.white}
            iconColor={'#fff'}
          />
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
  ${'' /* background-color: pink; */}
  padding: 36px;
  & button {
    margin-left: 96px;
  }
`;
