/* eslint-disable max-len */
import * as Yup from "yup";

export const InputFieldNames = {
  QUANTITY: "quantity",
  DELIVERY_OR_PICKUP: "delivery-or-pickup",
  DATE_NEEDED: "date-needed",
  TOTAL: "total",
  DELIVERY_ADDRESS: "delivery-address",
  EMAIL: "email",
  PHONE_NUMBER: "phone-number",
} as const;
const NG_PHONE_PATTERN = /^(\+?234|0|\+?2340)(80|81|90|70|91)\d{8}$/;

export interface CartProps {
  [InputFieldNames.QUANTITY]: string;
  [InputFieldNames.DELIVERY_OR_PICKUP]: string;
  [InputFieldNames.DATE_NEEDED]: string;
  [InputFieldNames.TOTAL]: number;
  [InputFieldNames.DELIVERY_ADDRESS]: string;
  [InputFieldNames.EMAIL]: string;
  [InputFieldNames.PHONE_NUMBER]: string;
}

export const cartInitialValue = {
  [InputFieldNames.QUANTITY]: "",
  [InputFieldNames.DELIVERY_OR_PICKUP]: "",
  [InputFieldNames.DATE_NEEDED]: "",
  [InputFieldNames.TOTAL]: "",
  [InputFieldNames.DELIVERY_ADDRESS]: "",
  [InputFieldNames.EMAIL]: "",
  [InputFieldNames.PHONE_NUMBER]: "",
};

export const cartValidationSchema = Yup.object().shape({
  [InputFieldNames.QUANTITY]: Yup.string().required("This field is required"),
  [InputFieldNames.DELIVERY_OR_PICKUP]: Yup.string().required(
    "This field is required"
  ),
  [InputFieldNames.DATE_NEEDED]: Yup.string().required(
    "This field is required"
  ),
  [InputFieldNames.TOTAL]: Yup.string().required("This field is required"),
  [InputFieldNames.DELIVERY_ADDRESS]: Yup.string().required(
    "This field is required"
  ),
  [InputFieldNames.EMAIL]: Yup.string().required("This field is required"),
  [InputFieldNames.PHONE_NUMBER]: Yup.string().required(
    "This field is required"
  ),
});
