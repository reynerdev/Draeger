import React from 'react';
import { PrincipalLayout } from '../../components/layout';
import { Navbar } from '../../components/navbar';
import Servicios from '../../components/Servicios/Servicios';
import Header from '../../components/Servicios/Header';
import { ContainerLayout } from '../../components/layout';
import StepperComponent from '../../components/Servicios/StepperComponent';
import MainContent from '../../components/Servicios/MainContent';
const index = () => {
  return (
    <PrincipalLayout>
      <Navbar />
      <ContainerLayout>
        <Header />
        <StepperComponent />
        <MainContent />
      </ContainerLayout>
    </PrincipalLayout>
  );
};

export default index;
