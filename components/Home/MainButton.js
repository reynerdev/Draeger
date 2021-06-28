import React from 'react';
import { neutral, primaryFont, typeScale } from '../../utils';
import AssignmentIcon from '@material-ui/icons/Assignment';
import styled from 'styled-components';
const MainButton = (props) => {
  console.log(props, 'Console Log Props');
  return (
    <Main background={props.background} textColor={props.textColor}>
      <MainWrapper>
        <Logo>
          <AssignmentIcon
            style={{ color: props.iconColor, fontSize: '55px' }}
          />
        </Logo>
        <ButtonTitle textColor={props.textColor}>LLamadas</ButtonTitle>
      </MainWrapper>
    </Main>
  );
};

export default MainButton;

const backgroundColor = (props) => {
  const background = props.background;
  if (background) {
    return 'white';
  }
  if (background === 'white') {
    return 'white';
  } else {
    return background;
  }
};

const Main = styled.button`
  padding: 10px 36px;
  border-radius: 10px;
  background-color: ${(props) => props.background};
  ${'' /* background-color:${(props) => console.log(props)}  */}
  border: none;
  ${
    '' /*   width: 150px;
  height: 120px;
  background-color: white;
  display: flex;
  flex-direction: column;
  background: none;
  padding: 0;
  align-items: center;
  & div {
    width: 100%;
    flex-grow: 1;
  } */
  }
`;

const MainWrapper = styled.div``;
const Logo = styled.div`
  margin-bottom: 8px;
  & img {
    fill: blue;
  }
`;

const ButtonTitle = styled.div`
  color: ${(props) => props.textColor};
  font-size: ${typeScale.paragraph};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
