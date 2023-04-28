import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/auth";
import { Sidebar } from "./Sidebar";

export default function Layout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "250px",
          position: "absolute",
        }}
      >
        <Sidebar />
      </Box>
      <Box
        sx={{
          backgroundColor: "black",
          width: "calc(100% - 250px)",
          float: "right",
          height: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
