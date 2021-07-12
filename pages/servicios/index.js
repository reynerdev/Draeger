import React from 'react';
import { PrincipalLayout } from '../../components/layout';
import { Navbar } from '../../components/navbar';
import Servicios from '../../components/Servicios/Servicios';
import Header from '../../components/Servicios/Header';
import { ContainerLayout } from '../../components/layout';
const index = () => {
  return (
    <PrincipalLayout>
      <Navbar />
      <ContainerLayout>
        <Header />
      </ContainerLayout>
    </PrincipalLayout>
  );
};

export default index;
