import { Grid, Typography } from "@mui/material";
import InputField from "../components/InputField";
import React from "react";
import PhoneInput from "../components/PhoneInput";
export default function IntakeForm(props) {
  const {
    formField: { firstName, lastName, email, phoneNumber },
  } = props;
  return (
    <>
      <Grid container spacing={3} pt={4}>
        <Grid item xs={12}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <PhoneInput
            label={phoneNumber.label}
            name={phoneNumber.name}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
