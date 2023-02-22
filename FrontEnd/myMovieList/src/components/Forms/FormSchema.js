import * as yup from "yup";

export const RegisterFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name field must be at least 3 characters long")
    .required("Name field is required"),
  surname: yup.string().required("Surname field is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email field is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .required("Password field is required"),
  username: yup
    .string()
    .min(5, "Username field must be atleast 5 characters long")
    .required("Username field is required"),
});

export const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email field is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .required("Password field is required"),
});

export const EditProfileFormSchema = yup.object().shape({
  name: yup.string().min(3, "Name field must be at least 3 characters long"),
  surname: yup.string(),
  email: yup.string().email("Please enter a valid email address"),
  password: yup.string().min(5, "Password must be at least 5 characters long"),
  username: yup
    .string()
    .min(5, "Username field must be atleast 5 characters long"),
});

export const AddPostFormSchema = yup.object().shape({
  title: yup.string().max(30, "Max number of characters for title are 30"),
  text: yup.string().max(400, "Maximum number of characters for a post are 400"),
  file: yup.mixed().required("Required")
})

export const BrowseFormSchema = yup.object().shape({
  search: yup.string()
})

