import { Field, FieldProps } from "formik";
import Rating from "@mui/material/Rating";

export interface RatingProps {
  name: string;
  label?: string;
  value?: number;
}

export const Ratings: React.FC<RatingProps> = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }: FieldProps) => {
        return (
          <Rating
            name={props.name}
            value={field.value}
            onChange={(e, newValue) => {
              form.setFieldValue(props.name, newValue);
            }}
          />
        );
      }}
    </Field>
  );
};

export default Ratings;

export const UncontrolledRatings: React.FC<RatingProps> = (props) => {
  return (
    <Rating name={props.name} value={props.value} precision={0.5} readOnly />
  );
};
