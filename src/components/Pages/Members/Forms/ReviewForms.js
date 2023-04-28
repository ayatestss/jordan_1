import { Grid, Typography } from "@mui/material";
import { useFormikContext } from "formik";

export default function ReviewForm(props) {
  const formikProps = useFormikContext();

  const { values } = formikProps;

  const StyledTextValue = ({ label, value }) => {
    return (
      <Typography fontSize="1rem">
        <span style={{ fontWeight: "bold" }}>{label}:</span> {value}
      </Typography>
    );
  };
  return (
    <>
      <Typography variant="h4" pt={5}>
        Your Info
      </Typography>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledTextValue
            label="Name"
            value={`${values.firstName} ${values.lastName}`}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextValue label="Email" value={values.email} />
        </Grid>
        <Grid item xs={12}>
          <StyledTextValue label="Phone" value={values.phoneNumber} />
        </Grid>
      </Grid>
      <Typography variant="h4" pt={5}>
        Shoe Info
      </Typography>
      <hr />

      <Grid container spacing={2}>
      {values.askingFor && (
          <Grid item xs={12}>
            <StyledTextValue label="Project Description" value={values.askingFor} />
          </Grid>
        )}
        <Grid item xs={12}>
          <StyledTextValue
            label="Shoe"
            value={`${values.shoeBrand} ${values.shoeName}`}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextValue label="Size" value={values.shoeSize} />
        </Grid>
        {values.description && (
          <Grid item xs={12}>
            <StyledTextValue label="Additional Info" value={values.description} />
          </Grid>
        )}
      </Grid>
    </>
  );
}
