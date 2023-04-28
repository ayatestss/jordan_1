import { Box, Stack, styled, keyframes } from "@mui/system";
import React from "react";
import { ReactComponent as Logo } from "../../../assets/SS Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../stylesheets/ConfirmationPage.module.css";
import { Typography } from "@mui/material";

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

function ConfirmationPage() {
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
      <MyComp>
        <Stack alignItems="center" spacing={3} pb={7}>
          <Logo height="30vh" width="auto" />
          <Typography
            variant="h2"
            color="white"
            fontWeight="bold"
            textAlign="center"
            fontSize="3rem"
          >
            Thank You!
          </Typography>
          <Typography
            fontSize="1.8rem"
            variant="h3"
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            We've added you to our list, be sure to check your inbox.
          </Typography>
          <div className={styles.socialMediaLogo}>
            <div className={styles.designLogo}>
              <a href="">
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  inverse
                  className={styles.logo}
                />
              </a>
              {/* <a href="">
                <FontAwesomeIcon
                  icon={faSquareTwitter}
                  inverse
                  className={styles.logo}
                />
              </a> */}
              <a href="">
                <FontAwesomeIcon
                  icon={faInstagram}
                  inverse
                  className={styles.logo}
                />
              </a>
              {/* <a href="">
                <FontAwesomeIcon
                  icon={faTiktok}
                  inverse
                  className={styles.logo}
                />
              </a> */}
            </div>
          </div>
        </Stack>
      </MyComp>
      <MyCompSecond></MyCompSecond>
    </Box>
  );
}

export default ConfirmationPage;
