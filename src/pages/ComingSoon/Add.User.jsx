import { TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const AddUser = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // send request to the  <db></db>
      const response = await fetch('http://localhost:4000/userReg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        mode: 'cors',
      });

      const data = await response.json();
      //   console.log(await data);

      navigate('/confirmationPage');
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  };

  return (
    <>
      <TextField
        fullWidth
        label="Last Name"
        {...register('lastName', { required: true })}
        error={!!errors.lastName}
        helperText={errors.lastName && 'This field is required'}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit(onSubmit)}
      >
        Sign Up
      </Button>
      {errorMessage ? (
        <Alert severity="error" color="error">
          {errorMessage}
        </Alert>
      ) : null}
    </>
  );
};
