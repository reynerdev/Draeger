import React from 'react';
import AuthLayout from '../layout/AuthLayout';
import PhotosGrid from './PhotosGrid';
import Form from './Form';
const Login = () => {
  return (
    <AuthLayout>
      <PhotosGrid />
      <Form />
    </AuthLayout>
  );
};

export default Login;
