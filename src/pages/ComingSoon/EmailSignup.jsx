import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Box,
  TextField,
  Button,
  Stack,
  Alert,
  useMediaQuery,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import Logo from "../../assets/ss-logo.svg";
import { useMutation } from "@apollo/client";
import { CREATE_EMAIL } from "./graphql/addEmail";
import { useNavigate } from "react-router-dom";

// Define the fade-in animation
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export default function EmailSignup() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [errorMessage, setErrorMessage] = useState("");

  const [createEmail, { data, loading }] = useMutation(CREATE_EMAIL);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await createEmail({
        variables: {
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          },
        },
      });
      navigate("/confirmationPage");
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              animation: `${fadeInAnimation} 1s ease-in-out`,
            }}
          >
            <Box my={4}>
              <img
                src={Logo}
                alt="Logo"
                style={{ height: "30vh", width: "auto" }}
              />
            </Box>
            <Stack width="100%" spacing={2}>
              <TextField
                fullWidth
                label="First Name"
                {...register("firstName", { required: true })}
                error={!!errors.firstName}
                helperText={errors.firstName && "This field is required"}
              />

              <TextField
                fullWidth
                label="Last Name"
                {...register("lastName", { required: true })}
                error={!!errors.lastName}
                helperText={errors.lastName && "This field is required"}
              />
              <TextField
                fullWidth
                label="Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email && `${errors.email.message}`}
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
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
}
