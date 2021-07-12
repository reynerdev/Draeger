import React from 'react';
import { typeScale, primaryBlue } from '../../utils';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { PrimaryButton, TertiaryButton } from '../Button';
const Form = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <FormWrapper>
        <AuthContainer>
          <img
            width="100%"
            src="/images/technologyforlife.png"
            alt="technologyforlife"
          />
          <h1
            style={{
              fontSize: typeScale.header2,
              textAlign: 'center',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            Bienvenido
          </h1>
          <FormsContainer style={{ width: '100%' }}>
            <AuthContent>
              {/* <FormControl variant="outlined">
                <InputLabel>Email</InputLabel>
                <OutlinedInput id="email" type="email" label="Email" />
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="campoName">Name</InputLabel>
                <OutlinedInput id="component-outlined" label="Name" />
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="campoPrueba">Prueba</InputLabel>
                <OutlinedInput id="component-outlined" label="Prueba" />
              </FormControl> */}
              <FormPart>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="email">Correo electronico</InputLabel>
                  <OutlinedInput
                    id="outlined"
                    label="Correo electronico"
                    type="email"
                  />
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="password">Contraseña</InputLabel>
                  <OutlinedInput
                    id="outlined"
                    label="Contraseña "
                    type={'password'}
                  />
                </FormControl>
                <PrimaryButton>Iniciar sesion</PrimaryButton>
              </FormPart>
            </AuthContent>
          </FormsContainer>
          <TertiaryButton>Olvide mi contraseña</TertiaryButton>
        </AuthContainer>
      </FormWrapper>
    </div>
  );
};

export default Form;

const FormWrapper = styled.div`
  padding: 0px 1rem;
  margin: 0px auto;
  max-width: 320px;
  // background-color: peru;
  // background-image: url('/images/backgroundloginform.webp');
`;

const AuthContainer = styled.div`
  display: grid;
  row-gap: 24px;
  grid-template-rows: repeat(6, min-content);
  justify-items: center;
  min-height: 100vh;
  padding-top: 24px;
  padding-bottom: 90px;
  align-content: center;
`;

const FormsContainer = styled.div`
  width: 100%;
`;

const AuthContent = styled.div`
  width: 100%;
`;

const FormPart = styled.form`
  display: grid;
  row-gap: 16px;
`;
