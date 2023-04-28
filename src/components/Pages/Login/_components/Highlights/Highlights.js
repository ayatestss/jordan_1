import { Image } from "@mui/icons-material";
import { Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";

import myImage from "../../../../../assets/Desktop - 14 1.svg";

export const Highlights = () => {
  return (
    <Box width="100%" height="100%">
      <Stack
        justifyContent="center"
        height="100%"
        width="100%"
        alignItems="center"
        spacing={3}
      >
        <Stack textAlign="left" width="400px">
          <Typography fontWeight="bold" variant="h1">
            One Stop
          </Typography>
          <Typography fontWeight="bold" variant="h1">
            Shop
          </Typography>
        </Stack>

        <img src={myImage} width="400px" />

        <Typography fontSize={17}>
          For all your Sneaker needs.{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            Buisness
          </span>{" "}
          or{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            Personal
          </span>
          .
        </Typography>
      </Stack>
    </Box>
  );
};
