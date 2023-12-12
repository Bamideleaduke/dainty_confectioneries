/* eslint-disable max-len */
import * as Yup from "yup";

export const InputFieldNames = {
  USERNAME: "username",
  EMAIL: "email",
  DELIVERY_ADDRESS: "delivery-address",
  PASSWORD: "password",
  CONFIRM_PASSWORD: "confirm-password",
} as const;

const NG_PHONE_PATTERN = /^(\+?234|0|\+?2340)(80|81|90|70|91)\d{8}$/;

export interface LoginProps {
  [InputFieldNames.EMAIL]: string;
  [InputFieldNames.PASSWORD]: string;
}
export interface SignupProps {
  [InputFieldNames.USERNAME]: string;
  [InputFieldNames.EMAIL]: string;
  [InputFieldNames.PASSWORD]: string;
  [InputFieldNames.CONFIRM_PASSWORD]: number;
  [InputFieldNames.DELIVERY_ADDRESS]: string;
}

export const LoginInitialValue = {
  [InputFieldNames.EMAIL]: "",
  [InputFieldNames.PASSWORD]: "",
};
export const SignupInitialValue = {
  [InputFieldNames.USERNAME]: "",
  [InputFieldNames.EMAIL]: "",
  [InputFieldNames.DELIVERY_ADDRESS]: "",
  [InputFieldNames.PASSWORD]: "",
  [InputFieldNames.CONFIRM_PASSWORD]: "",
};

export const LoginValidationSchema = Yup.object().shape({
  [InputFieldNames.EMAIL]: Yup.string().required("This field is required"),
  [InputFieldNames.PASSWORD]: Yup.string().required("This field is required"),
});
export const SignupValidationSchema = Yup.object().shape({
  [InputFieldNames.USERNAME]: Yup.string().required("This field is required"),
  [InputFieldNames.EMAIL]: Yup.string().required("This field is required"),
  [InputFieldNames.DELIVERY_ADDRESS]: Yup.string().required(
    "This field is required"
  ),
  [InputFieldNames.PASSWORD]: Yup.string().required("This field is required"),
  [InputFieldNames.CONFIRM_PASSWORD]: Yup.string().required(
    "This field is required"
  ),
});
