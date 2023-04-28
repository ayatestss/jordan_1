import { Height } from "@mui/icons-material";
import { Box, Typography, Grid, Stack, Container } from "@mui/material";
import { fontWeight, height } from "@mui/system";
import React, { useEffect } from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { useQuery } from "@apollo/client";
import { MEMBER_STATS } from "./graphql/MemberStats";

const StatusCard = ({ title, amount }) => (
  <Box
    bgcolor="white"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "260px",
    }}
  >
    <Typography
      style={{
        fontSize: "40px",
        fontWeight: "bold",
      }}
      color="black"
    >
      {title}
    </Typography>
    <Typography
      style={{
        fontSize: "100px",
        fontWeight: "bold",
      }}
      color="black"
    >
      {amount}
    </Typography>
  </Box>
);

const TestBox400 = () => (
  <Box bgcolor="green">
    <Typography variant="h4" color="white" height="400px">
      New
    </Typography>
  </Box>
);

const Percent = ({ amount }) => (
  <Box bgcolor={amount > 0 ? "#7AFF64" : "#FF8D8D"} px={3} borderRadius="50px">
    <Typography
      style={{
        fontSize: "40px",
        fontWeight: "bold",
      }}
      color={amount > 0 ? "#117C00" : "#840F09"}
    >
      {amount > 0 ? `+ ${amount}` : amount}%
    </Typography>
  </Box>
);

const CardWithPercent = ({ title, amount, percent }) => (
  <Box
    bgcolor="white"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      height: "400px",
    }}
  >
    <Typography
      style={{
        fontSize: "40px",
        fontWeight: "bold",
      }}
      color="black"
    >
      {title}
    </Typography>
    <Typography
      style={{
        fontSize: "100px",
        fontWeight: "bold",
      }}
      color="black"
    >
      {amount}
    </Typography>
    <Percent amount={percent} />
  </Box>
);

const Profit = () => (
  <Box
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "185px",
    }}
    bgcolor="white"
  >
    <Typography
      style={{
        fontSize: "40px",
        fontWeight: "bold",
      }}
      color="black"
    >
      Profit
    </Typography>
    <Typography
      style={{
        fontSize: "64px",
        fontWeight: "bold",
      }}
      color="black"
    >
      $111.33
    </Typography>
  </Box>
);

const AVGTime = () => (
  <Box
    mt={2}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "185px",
    }}
    bgcolor="white"
  >
    <Typography
      style={{
        fontSize: "40px",
        fontWeight: "bold",
      }}
      color="black"
    >
      AVG Time
    </Typography>
    <Typography
      style={{
        fontSize: "40px",
        fontWeight: "bold",
      }}
      color="black"
    >
      5 Days
    </Typography>
  </Box>
);

const MemberDashboard = () => {
  const { loading, error, data } = useQuery(MEMBER_STATS, {
    variables: { id: "631df9a8a9e499f3251e951d" },
  });
  return (
    <Container
      style={{
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <Typography variant="h1" color="white">
        Dashboard
      </Typography>

      <Grid container spacing={3} pt={4}>
        <Grid item xs={12} md={4}>
          <StatusCard
            title="Not Started"
            amount={data?.memberStatsById.notStarted}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatusCard title="Started" amount={data?.memberStatsById.started} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatusCard
            title="Finished"
            amount={data?.memberStatsById.finished}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} pt={4}>
        <Grid item xs={12}>
          <Dashboard />
        </Grid>
        {/* <Grid item xs={12} md={4}>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Profit />
                  <AVGTime />
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <CardWithPercent
                  title="New Clients"
                  amount={23}
                  percent={2.7}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <CardWithPercent title="Requests" amount={4} percent={-6} />
              </Grid> */}
      </Grid>
    </Container>
  );
};

export default MemberDashboard;
