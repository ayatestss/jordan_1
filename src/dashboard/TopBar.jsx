import React, { useState } from "react";
import { Box, IconButton, useTheme, Badge, Typography } from "@mui/material";
import { tokens } from "../theme/theme";
import InputBase from "@mui/material/InputBase";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchBar from "../components/SearchBar";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notificationCount, setNotificationCount] = useState(3);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        ml="15px"
      >
        <Typography variant="h3" color={colors.grey[100]}>
          Welcome, Alanis
        </Typography>
      </Box>
      {/* SEARCH BAR */}
      <Box>
        <SearchBar />
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <div style={{ marginRight: "1rem" }}>
          <IconButton
            aria-label="notifications"
            aria-controls="notification-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <Badge badgeContent={notificationCount} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Menu
            id="notification-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Notification 1</MenuItem>
            <MenuItem onClick={handleClose}>Notification 2</MenuItem>
            <MenuItem onClick={handleClose}>Notification 3</MenuItem>
          </Menu>
        </div>

        <div>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <PersonOutlinedIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Box>
    </Box>
  );
};

export default Topbar;
