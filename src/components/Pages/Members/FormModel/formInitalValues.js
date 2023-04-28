import intakeFormModel from "./intakeFormModel";

const {
  formField: {
    firstName,
    lastName,
    email,
    phoneNumber,
    shoeBrand,
    shoeSize,
    shoeName,
    description,
    askingFor,
    files,
  },
} = intakeFormModel;

export default {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [phoneNumber.name]: "",
  [askingFor.name]: "",
  [shoeBrand.name]: "",
  [shoeName.name]: "",
  [shoeSize.name]: "",
  [description.name]: "",
  [files.name]: null,
};
