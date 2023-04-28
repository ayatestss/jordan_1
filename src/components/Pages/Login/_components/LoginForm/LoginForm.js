import {
  Typography,
  Box,
  Stack,
  IconButton,
  InputBase,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "@mui/material/Divider";
import { ReactComponent as Logo } from "../../../../../assets/SS Logo.svg";
import styled from "@emotion/styled";
import { useState, useRef } from "react";
import { app } from "../../../../../auth/firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const CustomIconButton = styled(IconButton)({
  fontSize: 22,
});

export const LoginForm = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        console.log({ result });
        const token = await result.user.getIdToken();
        console.log(token);
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // console.log({ credential });
        // const token = credential.accessToken;

        // console.log(token);

        // // Set the token somewhere
        // sessionStorage.setItem("token", token);
        // // The signed-in user info.

        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);

        // The email of the user's account used.
        // const email = error.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Box width="100%" height="100%" bgcolor="black">
      <Stack
        height="100%"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Stack alignItems="center" spacing={2}>
          <Logo height="80%" />

          <Typography variant="h7" fontWeight="bold" color="white">
            Welcome to the best online sneaker community!
          </Typography>
        </Stack>

        <Typography variant="h6" fontWeight={500} color="white" gutterBottom>
          Sign in with
        </Typography>
        <Stack direction="row" spacing={5} pb={4}>
          <Box
            bgcolor="white"
            justifyContent="center"
            alignItems="center"
            display="flex"
            p={1}
          >
            <CustomIconButton onClick={handleGoogleLogin}>
              <GoogleIcon fontSize="inherit" />
            </CustomIconButton>
          </Box>
          <Box
            bgcolor="white"
            justifyContent="center"
            alignItems="center"
            display="flex"
            p={1}
          >
            <CustomIconButton>
              <FacebookIcon fontSize="inherit" />
            </CustomIconButton>
          </Box>
          <Box
            bgcolor="white"
            justifyContent="center"
            alignItems="center"
            display="flex"
            p={1}
          >
            <CustomIconButton>
              <TwitterIcon fontSize="inherit" />
            </CustomIconButton>
          </Box>
        </Stack>

        <Divider
          style={{ width: "80%", background: "white", height: ".1rem" }}
        />

        <Box component="form" autoComplete="off" noValidate width="50%">
          <Stack textAlign="start" pb={2}>
            <Typography fontWeight="bold" color="white">
              Email
            </Typography>
            <InputBase
              sx={{
                flex: 1,
                backgroundColor: "white",
                width: "100%",
                p: 1,
              }}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Stack>
          <Stack textAlign="start">
            <Typography fontWeight="bold" color="white">
              Password
            </Typography>
            <InputBase
              sx={{
                flex: 1,
                backgroundColor: "white",
                width: "100%",
                p: 1,
              }}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            pt={2}
          >
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  Remember Me
                </Typography>
              }
            />
            <Typography fontWeight="500" color="white">
              Forgot Password
            </Typography>
          </Stack>
        </Box>
        <Button variant="contained" onClick={handleLogin}>
          Contained
        </Button>
      </Stack>
    </Box>
  );
};
