import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as yup from "yup";

const styles = {
  root: {
    width: "100%",
  },
  heading: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
  },
  textField: {
    margin: "0.5rem",
    width: "100%",
  },
  button: {
    margin: "1rem",
    backgroundColor: "#3f51b5",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#303f9f",
    },
  },
};

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
});

const ChangeUsernamePage = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    schema
      .validate({ username }, { abortEarly: false })
      .then(() => {
        // Submit form
      })
      .catch((err) => {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div style={styles.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="change-username-content"
          id="change-username-header"
        >
          <Typography style={styles.heading}>Change Username</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form style={styles.form} onSubmit={handleSubmit}>
            <TextField
              style={styles.textField}
              label="New Username"
              variant="outlined"
              value={username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
            />
            <Button style={styles.button} variant="contained" type="submit">
              Save
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ChangeUsernamePage;
