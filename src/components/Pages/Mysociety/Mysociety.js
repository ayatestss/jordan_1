import { Container, Typography, Box } from "@mui/material";
import React from "react";

import { faker } from "@faker-js/faker";
const posts = [];

for (let i = 0; i < 15; i++) {
  posts.push({ name: faker.internet.userName(), });
}

export default function Mysociety() {
  return (
    <Container maxWidth="xl" bacj>
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        {posts.map((post) => (
          <Typography>@ lol{post.name}</Typography>
        ))}
      </Box>
    </Container>
  );
}
