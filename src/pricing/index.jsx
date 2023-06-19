import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

const PricingCard = ({ title, price, headline, features, buttonText }) => {
  return (
    <Card
      style={{ width: "275px", height: "350px", backgroundColor: "#000000" }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h1"
          component="h2"
          style={{ color: "#FFFFFF" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h2"
          color="textSecondary"
          style={{ color: "#FFFFFF" }}
        >
          {price}
        </Typography>
        <Typography variant="h3" component="h3" style={{ color: "#FFFFFF" }}>
          {headline}
        </Typography>
        <Typography variant="h5" component="h4" style={{ color: "#FFFFFF" }}>
          {features}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button variant="contained" color="primary">
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PricingCard;
