import { Alert, Grid, Icon, Stack, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import formInitalValues from "./FormModel/formInitalValues";
import IntakeForm from "./Forms/IntakeForm";
import intakeFormModel from "./FormModel/intakeFormModel";
import validationSchema from "./FormModel/validationSchema";
import ShowIntakeForm from "./Forms/ShoeIntakeForm";
import PhotoUploadForm from "./Forms/PhotoUploadForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MEMBER_BY_ID } from "./graphql/MemberInfo";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import { CREATE_CONTRACT } from "./graphql/CreateContract";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { CREATE_CLIENT } from "./graphql/CreateClient";
import { CLIENT_BY_EMAIL } from "./graphql/ClientByEmail";
import ReviewForm from "./Forms/ReviewForms";

const steps = ["Info", "Sneaker Info", "Photos", "Review"];

const { formId, formField } = intakeFormModel;
export default function MemberIntakeForm() {
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const [myLoading, setMyLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formInital, setFormInital] = useState(formInitalValues);
  const currentValidationSchema = validationSchema[activeStep];

  let { memberId } = useParams();

  // Not Needed data pulled in Backend
  const {
    loading: memberLoading,
    error: memberError,
    data: memberData,
  } = useQuery(MEMBER_BY_ID, {
    variables: { id: memberId },
  });

  const [findClient] = useLazyQuery(CLIENT_BY_EMAIL);

  const [createClient] = useMutation(CREATE_CLIENT);

  const [createContract] = useMutation(CREATE_CONTRACT);

  useEffect(() => {
    let authToken = sessionStorage.getItem("token");
    // console.log(authToken);
    if (!memberLoading) {
      formInital.memberId = memberData?.memberById.id;
    }

    if (memberError) {
      console.log(memberError);
    }
    // console.log(loading);
  }, [memberLoading]);

  const isLastStep = activeStep === steps.length - 1;

  const handleBackStep = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    // alert(JSON.stringify(values, null, 2));
    setMyLoading(false);

    if (values.file) {
      // Pull data from form
      const formData = new FormData();
      const { file } = values;
      const fileArr = Object.keys(file).map((key) => file[key]);
      fileArr.forEach((imageFile) => {
        formData.append("files", imageFile);
      });

      //   // Hit the photo upload Route.
      const res = await axios.post(
        // "https://morning-tor-15921.herokuapp.com/upload",
        `${process.env.REACT_APP_API_URL}/upload`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
          onUploadProgress: (data) => {
            setProgress(Math.round((100 * data.loaded) / data.total));
          },
        }
      );

      // Res from photo upload route.
      const locations = res.data;

      // Look for Client
      const { data: foundClientData } = await findClient({
        variables: {
          email: values.email,
        },
      });

      if (!foundClientData) {
        // Create Client
        console.log("no found client");
        const { data: createdClientData } = await createClient({
          variables: {
            data: {
              email: values.email,
              firstName: values.firstName,
              lastName: values.lastName,
              memberId: memberId,
            },
          },
        });

        await createContract({
          variables: {
            data: {
              client: createdClientData.creatClient.id,
              memberId: memberId,
              eta: "",
              stage: "",
              photos: locations,
              price: "",
              reported: false,
              notes: "",
            },
          },
        });
      } else {
        await createContract({
          variables: {
            data: {
              client: foundClientData.clientByEmail.id,
              memberId: memberId,
              eta: "",
              stage: "",
              photos: [],
              price: "",
              reported: false,
              notes: "",
            },
          },
        });
      }

      console.log(foundClientData);
      actions.setSubmitting(false);

      setActiveStep(activeStep + 1);
    }
  }

  const _handleSubmit = (values, actions) => {
    if (isLastStep) {
      setMyLoading(true);

      _submitForm(values, actions);
    }

    // if (values.files.length === 0) {
    //   console.log("rooosdfa")
    // }
    actions.setTouched({});
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  };
  const handleReset = () => {
    setActiveStep(0);
    setProgress(0);
  };

  const renderStepContent = (step, setFieldValue) => {
    switch (step) {
      case 0:
        return <IntakeForm formField={formField} />;
      case 1:
        return (
          <div>
            <ShowIntakeForm formField={formField} />
          </div>
        );
      case 2:
        return (
          <div>
            <PhotoUploadForm
              formField={formField}
              setFieldValue={setFieldValue}
            />
          </div>
        );
      case 3:
        return (
          <Container>
            <ReviewForm />

            {/* <Button color="secondary" variant="contained" onClick={handleReset}>
              Reset
            </Button> */}
          </Container>
        );

      default:
        return <div>Not Found</div>;
    }
  };

  if (myLoading || memberLoading) {
    return (
      <Container
        container
        sx={{
          bgcolor: "white",
          height: "100vh",
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          height="100%"
          alignItems="center"
        >
          <CircularProgress size={200} />
        </Stack>
      </Container>
    );
  }

  return (
    <>
      <Container
        sx={{
          bgcolor: "white",
          py: 3,
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        {activeStep === steps.length && !myLoading ? (
          <Container sx={{ height: "100%" }}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <CheckCircleIcon sx={{ fontSize: 140, mb: 4, color: "green" }} />
              <Typography variant="h1" align="center">
                Thank you!
              </Typography>
              <Typography variant="p" align="center">
                Please Allow 24 - 48 hours for {memberData.memberById.firstName}{" "}
                to respond.
              </Typography>
            </Stack>
          </Container>
        ) : (
          <Container
            // disableGutters
            maxWidth="lg"
            sx={{
              // background: "purple",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Formik
              initialValues={formInital}
              validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
            >
              {({ isSubbmitting, setFieldValue }) => (
                <Form
                  id={formId}
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant="h1" align="center">
                      Member form
                    </Typography>

                    <Stepper activeStep={activeStep} alternativeLabel>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                    {renderStepContent(activeStep, setFieldValue)}
                  </Box>

                  <Stack direction="row" justifyContent="space-between" pt={3}>
                    {activeStep !== 0 && (
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={handleBackStep}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      color="secondary"
                      variant="contained"
                      disabled={isSubbmitting}
                      type="submit"
                    >
                      {isLastStep ? "Submit" : "Next"}
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Container>
        )}
      </Container>
    </>
  );
}
