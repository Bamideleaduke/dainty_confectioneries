/* eslint-disable max-len */
import * as Yup from "yup";

export const InputFieldNames = {
  CAKE_FILING: "cake-filling",
  SHAPE: "shape",
  ICING_TYPE: "icing-type",
  FLAVOUR: "flavour",
  CAKE_SIZE: "cake-size",
  COLOUR: "colour",
  PERSONALIZED_MESSAGE: "personalized-message",
} as const;
const NG_PHONE_PATTERN = /^(\+?234|0|\+?2340)(80|81|90|70|91)\d{8}$/;

export interface CustomizationProps {
  [InputFieldNames.CAKE_FILING]: string;
  [InputFieldNames.SHAPE]: string;
  [InputFieldNames.ICING_TYPE]: string;
  [InputFieldNames.FLAVOUR]: [];
  [InputFieldNames.CAKE_SIZE]: string;
  [InputFieldNames.COLOUR]: string;
  [InputFieldNames.PERSONALIZED_MESSAGE]: string;
}

export const customizationInitialValue = {
  [InputFieldNames.CAKE_FILING]: "",
  [InputFieldNames.SHAPE]: "",
  [InputFieldNames.ICING_TYPE]: "",
  [InputFieldNames.FLAVOUR]: [],
  [InputFieldNames.CAKE_SIZE]: "",
  [InputFieldNames.COLOUR]: "",
  [InputFieldNames.PERSONALIZED_MESSAGE]: "",
};

export const customizationValidationSchema = Yup.object().shape({});
