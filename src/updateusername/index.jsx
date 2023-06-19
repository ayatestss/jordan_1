import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as yup from "yup";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";

const ChangeUsername = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

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

    const handleFormSubmit = (values) => {
      console.log(values);
    };

    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="change-username-content"
          id="change-username-header"
        >
          <Typography style={styles.heading}>Change Username</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobile ? undefined : "span 4",
                      },
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Username "
                      name="userName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </AccordionDetails>
      </Accordion>
      /* 
       <Box m="20px">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        //validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
              <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />

  </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Save Changes
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );    
    */
    );
  };
  const initialValues = {
    userName: "",
  };
};

export default ChangeUsername;
