import React from "react";
import { Formik } from "formik";
import {
  TextField,
  Box,
  Container,
  Button,
  FormControlLabel,
  Grid,
  Stack,
} from "@mui/material";
import * as Yup from "yup";

const handleSubmit = (event) => {
  event.PreventDefault();
};

const SignupPage = () => {
  return (
    <>
      <Forkmik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().max(255).required("First Name is required"),
          lastName: Yup.string().max(255).required("Last Name is required"),
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(16).required("Password is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <TextField
                    id="firstname-login"
                    type="firstname"
                    value={values.firstName}
                    name="firstname"
                    label="First Name"
                    fullWidth
                  />
                  <TextField
                    id="lastname-login"
                    type="lastname"
                    value={values.lastName}
                    name="lastname"
                    label="Last Name"
                    fullWidth
                  />
                  <TextField
                    id="email-login"
                    type="email"
                    name="email"
                    label="Email"
                    fullWidth
                  />
                  <TextField
                    id="phone-login"
                    type="phone"
                    name="phone"
                    label="Phone"
                    fullWidth
                  />
                  <TextField
                    id="address-login"
                    type="addres"
                    name="address"
                    label="Address"
                    fullWidth
                  />
                  <TextField label="Password" />
                  <TextField label="Confirm Password" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to these terms and conditions"
                  />
                  <Button type="submit" variant="contained" size="large">
                    Sign Up
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        )}
      </Forkmik>
    </>
  );
};

export default SignupPage;
