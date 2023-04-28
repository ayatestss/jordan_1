import {
  Box,
  Stack,
  Typography,
  InputBase,
  Button,
  Alert,
} from "@mui/material";
import React from "react";
import Logo from "../../assets/ss-logo.svg";

function ConfirmationPage() {
  return (
    <Box
      bgcolor="black"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography color="white">Confirmed</Typography>
    </Box>
  );
}

export default ConfirmationPage;
