import React from "react";
import { Box, Stack, Typography, Alert } from "@mui/material";
import { keyframes } from "@emotion/react";
import Logo from "../../assets/ss-logo.svg";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function ConfirmationPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="column" alignItems="center" spacing={2}>
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
          <Box my={1}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "30vh", width: "auto" }}
            />
          </Box>
        </Box>

        <Typography
          variant="h4"
          color="white"
          fontWeight="bold"
          textAlign="center"
          sx={{ pb: 2 }}
        >
          Thank you for joining us!
        </Typography>

        <Alert severity="success">Confirmed!</Alert>
      </Stack>
    </Box>
  );
}

export default ConfirmationPage;
