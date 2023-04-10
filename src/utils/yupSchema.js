import * as yup from "yup";

export const contactSchema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your full name should be at least 3 characters.")
      .max(50, "Your full name cannot be longer than 50 characters.")
      .required("Please enter your full name"),
    email: yup
      .string()
      .email("Must be a valid email address")
      .matches(/@[^.]*\./, "Must be a valid email address")
      .max(255, "Email cannot be longer than 255 characters")
      .required("Email is required"),
    subject: yup
      .string()
      .min(3, "Your subject should be at least 3 characters.")
      .max(100, "Your subject cannot be longer than 100 characters.")
      .required("Please enter a subject"),
    body: yup
      .string()
      .min(3, "Your body should be at least 3 characters.")
      .max(1000, "Your subject cannot be longer than 1000 characters.")
      .required("Please enter a body"),
  })
  .required();
