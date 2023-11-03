import React from "react";
import { FormControlBase } from "../FormControl";
import FormControlWrapper from "../FormControlWrapper";

interface RatingControlProps {
  name: string;
  label: string;
}
const RatingControl: React.FC<RatingControlProps> = (props) => {
  return (
    <FormControlWrapper name={props.name} label={props.label}>
      <FormControlBase control="rating" name={props.name} />
    </FormControlWrapper>
  );
};

export default RatingControl;
