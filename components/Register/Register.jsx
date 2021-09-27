import React from 'react'
import Form from '../Register/Form'
import PhotosGrid from '../Register/PhotosGrid'
import AuthLayout from '../layout/AuthLayout'
const Register = () => {
  return (
    <AuthLayout>
      <PhotosGrid />
      <Form />
    </AuthLayout>
  )
}

export default Register;
