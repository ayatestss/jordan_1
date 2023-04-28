import { Badge, Box, Stack, Typography } from "@mui/material";
import { ReactComponent as SSLogo } from "../../assets/white_logo.svg";
import { GiConverseShoe } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { BsSafe2 } from "react-icons/bs";
import { IoMdStats } from "react-icons/io";
import { AiOutlineCompass } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdHome, MdListAlt, MdOutlineMessage } from "react-icons/md";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "../../auth/auth";
import { GrLogout } from "react-icons/gr";

const SidebarLink = ({ text, Icon, notificationNumber, onClick, link }) => {
  return (
    <Box
      sx={{
        width: "70%",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Box pr={2}>
        {Icon ? (
          <Badge badgeContent={notificationNumber} color="secondary" max={20}>
            <Icon size={30} />
          </Badge>
        ) : null}
      </Box>
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "1.5rem",
          transition: "box-shadow 200ms",
          ":hover": {
            boxShadow: "inset 0 -3px 0 0  #FDE400",
          },
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={link ? link : "/member"}
        >
          {text}
        </Link>
        {/* <Outlet /> */}
      </Typography>
    </Box>
  );
};

export const Sidebar = () => {
  const { logOut } = useAuth();

  const handleLogout = () => {
    logOut();
  };

  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        backgroundColor: "white",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        height="100%"
        spacing={3}
        pt={2}
      >
        <SSLogo width="60%" />

        <SidebarLink text="Home" Icon={MdHome} />
        <SidebarLink text="Statistics" Icon={IoMdStats} link="/member/stats" />
        {/* <SidebarLink text="Groups" notificationNumber={2} Icon={GrGroup} />. */}
        <SidebarLink text="Projects" Icon={MdListAlt} link="/member/projects" />
        <SidebarLink
          text="Messages"
          link="/messages"
          notificationNumber={3}
          Icon={MdOutlineMessage}
        />
      </Stack>

      <Stack
        sx={{
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 2,
          }}
        >
          <SidebarLink
            text="Logout"
            Icon={GrLogout}
            link="login"
            onClick={handleLogout}
          />
        </Box>
      </Stack>
    </Box>
  );
};
