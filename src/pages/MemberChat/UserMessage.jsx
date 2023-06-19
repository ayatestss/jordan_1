import {
  Button,
  Typography,
  Avatar,
  Stack,
  ListItem,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme/theme";

const UserMessage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ListItem>
      <Stack direction="row" spacing={2}>
        <Avatar>H</Avatar>
        <Typography
          variant="h5"
          color={colors.grey[100]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          Name
        </Typography>
        <Typography
          variant="h5"
          color={colors.grey[100]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          How long ago message was sent
        </Typography>
      </Stack>
    </ListItem>
  );
};

export default UserMessage;
