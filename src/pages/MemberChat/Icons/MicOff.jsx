import React, { useState } from "react";
import MicOffIcon from "@mui/icons-material/MicOff";
import MicIcon from "@mui/icons-material/Mic";
import { Box } from "@mui/material";

export default function ChatPerson(props) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleMicOffClick = () => {
    setNotificationsEnabled(false);
  };

  const handleMicClick = () => {
    setNotificationsEnabled(true);
  };

  return (
    <Box display="flex" alignItems="center">
      <p>{props.name}</p>
      {notificationsEnabled ? (
        <MicOffIcon onClick={handleMicOffClick} />
      ) : (
        <Box display="flex" alignItems="center">
          <p>Notifications disabled</p>
          <MicIcon onClick={handleMicClick} />
        </Box>
      )}
    </Box>
  );
}
