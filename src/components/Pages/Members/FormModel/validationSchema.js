import * as Yup from "yup";
import intakeFormModel from "./intakeFormModel";

const {
  formField: {
    firstName,
    lastName,
    email,
    phoneNumber,
    shoeBrand,
    shoeSize,
    askingFor,
    description,
    shoeName,
    files,
  },
} = intakeFormModel;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrMsg}`),
    [phoneNumber.name]: Yup.string()
      .required(`${phoneNumber.requiredErrMsg}`)
      .matches(phoneRegExp, `${phoneNumber.invalidErrMsg}`),
  }),
  Yup.object().shape({
    [shoeName.name]: Yup.string().required(`${shoeName.requiredErrMsg}`),
    [shoeBrand.name]: Yup.string().required(`${shoeBrand.requiredErrMsg}`),
    [shoeSize.name]: Yup.number().required(`${shoeSize.requiredErrMsg}`),
    [askingFor.name]: Yup.string().required(`${askingFor.requiredErrMsg}`),
    [description.name]: Yup.string(),
  }),
  Yup.object().shape({
    [files.name]: Yup.mixed().required("FIles are required"),
  }),
];
