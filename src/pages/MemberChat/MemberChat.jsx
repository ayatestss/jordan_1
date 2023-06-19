import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
  Stack,
  Button,
  MenuItem,
  Menu,
  Fade,
  Drawer,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon for the new button
import MemberChatSidebar from "./MemberChatSidebar";
import MicOff from "../MemberChat/Icons/MicOff";
import InsertPhoto from "../MemberChat/Icons/InsertPhoto";
import AttachFile from "../MemberChat/Icons/AttachFile";
const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi John!", sender: "Jane", timestamp: new Date() },
    { text: "Hey Jane!", sender: "John", timestamp: new Date() },
    { text: "How are you?", sender: "Jane", timestamp: new Date() },
    {
      text: "I'm good, thanks. How about you?",
      sender: "John",
      timestamp: new Date(),
    },
    { text: "I am doing well!", sender: "Jane", timestamp: new Date() },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    const now = new Date(); // get current date/time
    setMessages([
      ...messages,
      { text: message, sender: "me", timestamp: now }, // add timestamp property
    ]);
    setMessage("");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files;
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };
  // Add this state hook to manage the sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Add this function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Drawer anchor="left" open={sidebarOpen} onClose={toggleSidebar}>
          <Box sx={{ width: 250, overflow: "auto" }} role="presentation">
            <MemberChatSidebar onClose={toggleSidebar} />
          </Box>
        </Drawer>
        <AppBar position="static">
          <Box
            sx={{ display: "flex", alignItems: "center", padding: "8px 12px" }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="toggle-sidebar"
              onClick={toggleSidebar}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Avatar sx={{ bgcolor: "white", mr: 2 }}>J</Avatar>
            <Typography variant="h6">John</Typography>
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<MoreVertIcon />}
              sx={{ marginLeft: "auto" }}
            >
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>
                  <DeleteIcon /> Delete
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ArchiveIcon /> Archive
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <MicOff /> Muted
                </MenuItem>
              </Menu>
            </Button>
          </Box>
        </AppBar>
        <Box
        // sx={{ flexGrow: 1, overflowY: "auto", padding: "16px" }}
        >
          <List sx={{ marginBottom: "16px" }}>
            {messages.map((message, i) => (
              <ListItem
                key={i}
                alignItems="flex-start"
                sx={{
                  "&.me": {
                    flexDirection: "row-reverse",
                    textAlign: "right",
                  },
                }}
                className={message.sender === "me" ? "me" : ""}
              >
                <Avatar
                  sx={{
                    bgcolor:
                      message.sender === "me"
                        ? "secondary.main"
                        : "primary.main",
                    mr: message.sender === "me" ? 0 : 2,
                  }}
                >
                  {message.sender[0].toUpperCase()}
                </Avatar>
                <Box
                  component="div"
                  sx={{
                    borderRadius: "10px",
                    padding: "8px 12px",
                    backgroundColor:
                      message.sender === "me"
                        ? "secondary.light"
                        : "primary.light",
                  }}
                >
                  <Typography sx={{ color: "common.white" }}>
                    {message.text}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {new Date(message.timestamp).toLocaleString()}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <form onSubmit={handleSend}>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "20px",
              padding: "8px",
              marginBottom: "16px",
            }}
          >
            <TextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              sx={{ flexGrow: 1, mr: 1 }}
              fullWidth
            />
          </Box>
        </form>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="end"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <AttachFile />
          <InsertPhoto />
          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};
export default Chat;
