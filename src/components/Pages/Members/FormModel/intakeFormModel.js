export default {
  formId: "intakeForm",
  formField: {
    firstName: {
      name: "firstName",
      label: "First Name",
      requiredErrMsg: "First name is required.",
    },
    lastName: {
      name: "lastName",
      label: "Last Name",
      requiredErrMsg: "Last name is required.",
    },
    email: {
      name: "email",
      label: "Email",
      requiredErrMsg: "email is required.",
    },
    phoneNumber: {
      name: "phoneNumber",
      label: "Phone Number",
      requiredErrMsg: "Phone number is required.",
      invalidErrMsg: "Must be a valid Phone Number",
    },
    shoeName: {
      name: "shoeName",
      label: "Name",
      requiredErrMsg: "Shoe name is required.",
    },
    shoeBrand: {
      name: "shoeBrand",
      label: "Sneaker Brand",
      requiredErrMsg: "Shoe Brand is required.",
    },
    shoeSize: {
      name: "shoeSize",
      label: "Size",
      requiredErrMsg: "Shoe Size is required.",
    },
    askingFor: {
      name: "askingFor",
      label: "What are you looking to have done",
      requiredErrMsg: "This is required to submit.",
    },
    description: {
      name: "description",
      label: "Description",
      requiredErrMsg: "This is required to submit.",
    },
    files: {
      name: "file",
      label: "File",
    },
  },
};
