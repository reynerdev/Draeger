import React from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';
import styled from 'styled-components';
import ServiciosButton from './ServiciosButton';
import AddIcon from '@material-ui/icons/Add';
import { typeScale, primaryBlue, neutral, secondary } from '../../utils';
const Header = () => {
  return (
    <HeaderWrapper>
      <MainLogoWrapper>
        <LogoWrapper>
          <AssignmentIcon style={{ color: 'black', fontSize: 40 }} />
        </LogoWrapper>
        <div className="ServiciosTitle">Servicios</div>
      </MainLogoWrapper>
      <RightWrapper>
        <ButtonWrapper>
          <ServiciosButton bgcolor={primaryBlue[500]}>
            <AddIcon style={{ fontSize: 32, color: neutral[100] }} />
          </ServiciosButton>
          <div
            style={{
              color: neutral[700],
              fontWeight: '700',
              fontSize: '18px',
            }}
          >
            Ver llamadas
          </div>
        </ButtonWrapper>
        <ButtonWrapper>
          <ServiciosButton bgcolor={secondary.orange}>
            <AddIcon style={{ fontSize: 32, color: neutral[100] }} />
          </ServiciosButton>
          <div
            style={{ color: neutral[700], fontWeight: '700', fontSize: '18px' }}
          >
            Agregar
          </div>
        </ButtonWrapper>
        <ReportSelectorWrapper>Selector </ReportSelectorWrapper>
      </RightWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  //   background-color: peru;
  align-items: center;
  padding: 3em 0;
`;

const MainLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  & .ServiciosTitle {
    font-size: ${typeScale.header3};
    font-weight: 700;
  }
  margin-right: 72px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;
`;
const RightWrapper = styled.div`
  display: flex;
  width: 100%;
  //  background: pink;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //   background-color: green;
  margin-right: 32px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ReportSelectorWrapper = styled.div`
  margin-left: auto;
`;
