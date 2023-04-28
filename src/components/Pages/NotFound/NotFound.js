import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          width: "100%",
          float: "right",
          height: "100%",
        }}
      >
        <Container
          sx={{
            height: "100vh",
          }}
        >
          <Stack
            spacing={2}
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h1" color="white">
              Page Not Found 😢
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
