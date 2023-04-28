import { Grid, MenuItem, Select, Typography } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

const shoeSizes = [
  { value: 3, label: "3" },
  { value: 3.5, label: "3.5" },
  { value: 4, label: "4" },
  { value: 4.5, label: "4.5" },
  { value: 5, label: "5" },
  { value: 5.5, label: "5.5" },
  { value: 6, label: "6" },
  { value: 6.5, label: "6.5" },
  { value: 7, label: "7" },
  { value: 7.5, label: "7.5" },
  { value: 8, label: "8" },
  { value: 8.5, label: "8.5" },
  { value: 9, label: "9" },
  { value: 9.5, label: "9.5" },
  { value: 10, label: "10" },
  { value: 10.5, label: "10.5" },
  { value: 11, label: "11" },
  { value: 11.5, label: "11.5" },
  { value: 12, label: "12" },
  { value: 12.5, label: "12.5" },
  { value: 13, label: "13" },
  { value: 13.5, label: "13.5" },
  { value: 14, label: "14" },
  { value: 14.5, label: "14.5" },
  { value: 15, label: "15" },
  { value: 15.5, label: "15.5" },
];
export default function ShowIntakeForm(props) {
  const {
    formField: { shoeBrand, shoeName, askingFor, shoeSize, description },
  } = props;
  return (
    <>
      <Grid container spacing={3} pt={4}>
        <Grid item xs={12}>
          <InputField name={shoeBrand.name} label={shoeBrand.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={shoeName.name} label={shoeName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <SelectField
            name={shoeSize.name}
            label={shoeSize.label}
            data={shoeSizes}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={askingFor.name} label={askingFor.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={description.name}
            label={description.label}
            multiline
            minRows={3}
            maxRows={5}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
