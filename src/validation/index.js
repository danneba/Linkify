import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*\d)(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is required"),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref("password"), null], "Passwords must match")
  //     .required("Confirm Password is required"),
});

export const signupSchema = yup.object().shape({
  first_name: yup.string().required("First Name Required"),
  last_name: yup.string().required("Last Name Required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const hostSignupSchema = yup.object().shape({
  name: yup.string().required("First Name Required"),
  website: yup.string().min(10),
  phone: yup.string().min(10).required("Phone Number Required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

// export const addEventSchema = yup.object().shape({
//   name: yup.string().required("Event Name Required"),
//   image: yup.string().required("Event Image Required"),
//   start_date: yup.date().required("Event Start Date Required"),
//   end_date: yup.date().required("Event End Date Required"),
//   description: yup.string().min(10).required("Event Description Required"),
// });
