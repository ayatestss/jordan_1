import { Box, Button, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { Highlights } from "./_components/Highlights/Highlights";
import { LoginForm } from "./_components/LoginForm/LoginForm";
import { useAuth } from "../../../auth/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  let navigate = useNavigate();

  const { user, login } = useAuth();
  const handleLoginClick = () => {
    const testUser = {
      name: "Alanis",
      loggedIn: true,
    };

    login(testUser);
    console.log(user);

    console.log("Login");
    navigate("/member");
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLoginClick}
          >
            Login
          </Button>
        </Box>
        {/* <Grid container height="100vh">
          <Grid md={6}>
            <Box width="100%" height="100%">
              <LoginForm />
            </Box>
          </Grid>
          <Grid md={6}>
            <Box width="100%" height="100%">
              <Highlights />
            </Box>
          </Grid>
        </Grid> */}
      </Box>
    </Container>
  );
}
