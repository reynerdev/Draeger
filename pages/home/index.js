import React from 'react';
import { ContainerLayout, PrincipalLayout } from '../../components/layout';
import { Navbar } from '../../components/navbar';
import MainButtonContainer from '../../components/Home/MainButtonContainer';
import Title from '../../components/Home/Title';
const index = () => {
  console.log(Navbar);
  return (
    <PrincipalLayout>
      <Navbar />
      <Title />
      <MainButtonContainer />
    </PrincipalLayout>
  );
};
export default index;
