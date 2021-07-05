import React from 'react';
import { typeScale } from '../../utils/typography';
import styled from 'styled-components';
import { InputLabel, Input, FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
const Form = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <FormWrapper>
        <AuthContainer>
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
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="email"> Email</InputLabel>
                <Input variant="outlined" id="email" type="email">
                  Email
                </Input>
              </FormControl>
            </AuthContent>
          </FormsContainer>
        </AuthContainer>
      </FormWrapper>
    </div>
  );
};

export default Form;

const FormWrapper = styled.div`
  padding: 0px 5rem;
  margin: 0px auto;
  max-width: 320px;
`;

const AuthContainer = styled.div`
  display: grid;
  row-gap: 24px;
  grid-template-rows: repeat(6, min-content);
  justify-items: center;
  min-height: 100vh;
  padding-top: 24px;
  padding-bottom: 90px;
`;

const FormsContainer = styled.div`
  width: 100%;
`;

const AuthContent = styled.div`
  width: 100%;
`;
