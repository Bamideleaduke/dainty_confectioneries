/* eslint-disable max-len */
import * as Yup from "yup";

export const InputFieldNames = {
  REVIEW_TITLE: "quantity",
  YOUR_REVIEW: "delivery-or-pickup",
  NAME: "date-needed",
  PHONE_NUMBER: "phone-number",
  MY_OPINION: "my-opinion",
  RATING: "rating",
  NAVIGATION_RATING: "navigation",
  SATISFACTION_RATING: "satisfaction",
  DELIVERY_SERVICE_RATING: "delivery-service",
} as const;
const NG_PHONE_PATTERN = /^(\+?234|0|\+?2340)(80|81|90|70|91)\d{8}$/;

export interface ReviewProps {
  [InputFieldNames.REVIEW_TITLE]: string;
  [InputFieldNames.YOUR_REVIEW]: string;
  [InputFieldNames.NAME]: string;
  [InputFieldNames.PHONE_NUMBER]: string;
  [InputFieldNames.MY_OPINION]: boolean;
  [InputFieldNames.RATING]: number;
  [InputFieldNames.NAVIGATION_RATING]: number;
  [InputFieldNames.SATISFACTION_RATING]: number;
  [InputFieldNames.DELIVERY_SERVICE_RATING]: number;
}

export const reviewInitialValue = {
  [InputFieldNames.REVIEW_TITLE]: "",
  [InputFieldNames.YOUR_REVIEW]: "",
  [InputFieldNames.NAME]: "",
  [InputFieldNames.PHONE_NUMBER]: "",
  [InputFieldNames.MY_OPINION]: false,
  [InputFieldNames.RATING]: 0,
  [InputFieldNames.NAVIGATION_RATING]: 0,
  [InputFieldNames.SATISFACTION_RATING]: 0,
  [InputFieldNames.DELIVERY_SERVICE_RATING]: 0,
};

export const reviewValidationSchema = Yup.object().shape({
  [InputFieldNames.REVIEW_TITLE]: Yup.string().required(
    "This field is required"
  ),
  [InputFieldNames.YOUR_REVIEW]: Yup.string().required(
    "This field is required"
  ),
  [InputFieldNames.NAME]: Yup.string().required("This field is required"),
  [InputFieldNames.PHONE_NUMBER]: Yup.string()
    .required("This field is required")
    .test(InputFieldNames.PHONE_NUMBER, "Enter valid phone number", (value) =>
      NG_PHONE_PATTERN.test(value.replaceAll(" ", ""))
    ),
  [InputFieldNames.MY_OPINION]: Yup.boolean().oneOf(
    [true],
    "You must agree to continue"
  ),
  [InputFieldNames.RATING]: Yup.number()
    .required("This field is required")
    .positive("Rating must be a positive number"),
  [InputFieldNames.NAVIGATION_RATING]: Yup.number()
    .required("This field is required")
    .positive("Rating must be a positive number"),
  [InputFieldNames.SATISFACTION_RATING]: Yup.number()
    .required("This field is required")
    .positive("Rating must be a positive number"),
  [InputFieldNames.DELIVERY_SERVICE_RATING]: Yup.number()
    .required("This field is required")
    .positive("Rating must be a positive number"),
});
