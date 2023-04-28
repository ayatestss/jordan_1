import {
  Typography,
  Stack,
  Alert,
  AlertTitle,
  Button,
  TextField,
  InputBase,
} from "@mui/material";
import { ReactComponent as Logo } from "../../../assets/SS Logo.svg";
import { Box, styled, keyframes } from "@mui/system";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_EMAIL } from "./graphql/addEmail";
import { useNavigate } from "react-router-dom";
import { FlareSharp } from "@mui/icons-material";

const fadeInFirst = keyframes`
0% {
//   transform: rotate(-22deg);
opacity: 0;
}
100% {
    // transform: rotate(40deg);
opacity: 1;
}
`;

const fadeInSecond = keyframes`

0%,50% {
//   transform: rotate(-22deg);
opacity: 0;
}
100% {
    // transform: rotate(40deg);
opacity: 1;
}
`;

const MyComp = styled("div")({
  animation: `${fadeInFirst} 1.5s ease-in`,
});
const MyCompSecond = styled("div")({
  animation: `${fadeInSecond} 2s ease-in-out`,
});
export const ComingSoon = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    // e.preventDefault();
    // const regEx =
    //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (regEx.test(email)) {
    //   setMessage(<Alert severity="success">Email is Valid</Alert>);
    // } else if (!regEx.test(email) && email !== "") {
    //   setMessage("");
    // } else {
    //   return null;
    // }
  };

  const [createEmail, { error, data, reset, loading, success }] =
    useMutation(CREATE_EMAIL);

  return (
    <Box
      width="100%"
      height="100vh"
      bgcolor="black"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack alignItems="center" spacing={3} pb={7} width="auto">
        <MyComp>
          <Logo height="30vh" width="auto" />
        </MyComp>
        <Typography
          variant="h4"
          fontStyle="italic"
          color="white"
          textAlign="center"
          width="38vh"
          fontSize="2.6vh"
        >
          Our mission is to create a platform that will cultivate a community of
          sneakerheads by giving them the power to market their brand and manage
          their business.
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="white"
          textAlign="center"
          fontSize="1.7rem"
        >
          Join the waitlist below
        </Typography>
        <MyCompSecond>
          <div style={{ display: "flex", width: "auto", height: "auto" }}>
            <InputBase
              style={{
                border: "solid white",
                borderRadius: "0.2rem",
                width: "25vh",
                fontSize: "2vh",
                background: "white",
              }}
              placeholder="Enter your email address"
              required
              id="email"
              type="email"
              value={email}
              onChange={handleSubmit}
            ></InputBase>
            <Button
              style={{
                background: "#FFD700",
                border: "none",
                borderRadius: "0.3rem",
                marginLeft: "0.5rem",
                color: "white",
              }}
              onClick={async () => {
                try {
                  await createEmail({
                    variables: {
                      data: {
                        email: email,
                      },
                    },
                  });
                  navigate("/confirmationPage");
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              Sign Up
            </Button>
          </div>
        </MyCompSecond>
        <AlertTitle>{message}</AlertTitle>
        {error && <Alert severity="error">{error.message}</Alert>}
        {success && <Alert severity="success">{success.message}</Alert>}
      </Stack>
    </Box>
  );
};
