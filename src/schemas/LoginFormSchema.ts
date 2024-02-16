import * as Yup from "yup";

export const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must have 3 characters")
      .required("Password is required"),
  });