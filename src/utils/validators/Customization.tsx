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

export const customizationValidationSchema = Yup.object().shape({
  [InputFieldNames.CAKE_FILING]: Yup.string().required(
    "This field is required"
  ),
  [InputFieldNames.SHAPE]: Yup.string().required("This field is required"),
  [InputFieldNames.ICING_TYPE]: Yup.string().required("This field is required"),
  [InputFieldNames.FLAVOUR]: Yup.array().min(1, "Select at least one flavor").required("This field is required"),
  [InputFieldNames.CAKE_SIZE]: Yup.string().required("This field is required"),
  [InputFieldNames.COLOUR]: Yup.string().required("This field is required"),
  [InputFieldNames.PERSONALIZED_MESSAGE]: Yup.string().required(
    "This field is required"
  ),
});
