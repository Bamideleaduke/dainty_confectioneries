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

export const LoginValidationSchema = Yup.object().shape({});
export const SignupValidationSchema = Yup.object().shape({});
