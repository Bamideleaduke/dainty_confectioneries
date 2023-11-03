import { Box, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import InputControl from "./shared/forms/controls/InputControl";
import * as FormMeta from "../utils/validators/ReviewValidator";
import Checkbox from "./shared/forms/Checkbox";
import RatingControl from "./shared/forms/controls/RatingControl";
import { Button } from "./shared/buttons/Buttons";

const ReviewForm = () => {
  const { InputFieldNames } = FormMeta;
  const onSubmit = (values: any, { resetForm }: FormikHelpers<any>) => {
    // resetForm();
  };
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "initial" },
        marginInline: "auto",
      }}
    >
      <Formik
        enableReinitialize={true}
        initialValues={FormMeta.reviewInitialValue}
        validationSchema={FormMeta.reviewValidationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          console.log(formik.values);
          return (
            <Form>
              <Box>
                <Typography variant="h5" sx={{ marginBottom: "0.5rem" }}>
                  Leave A Review
                </Typography>
                <RatingControl
                  name={InputFieldNames.RATING}
                  label={"Your overall rating"}
                />
                <RatingControl
                  name={InputFieldNames.NAVIGATION_RATING}
                  label={
                    "How user-friendly is the navigation system of the website?"
                  }
                />
                <RatingControl
                  name={InputFieldNames.SATISFACTION_RATING}
                  label={"Are you satisfied with the cake/ pastries you got?"}
                />
                <RatingControl
                  name={InputFieldNames.DELIVERY_SERVICE_RATING}
                  label={
                    "How reliable is the delivery service provided  through the website?"
                  }
                />
                <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                  <InputControl
                    name={InputFieldNames.REVIEW_TITLE}
                    label="Title of your review"
                    placeholder={"Summarize your review"}
                  />
                  <InputControl
                    name={InputFieldNames.YOUR_REVIEW}
                    label="Your  review"
                    placeholder={"Tell people your review"}
                    multiline
                    rows={4}
                  />
                  <InputControl
                    name={InputFieldNames.NAME}
                    label="Your name"
                    placeholder={"Tell us your name"}
                  />
                  <InputControl
                    name={InputFieldNames.PHONE_NUMBER}
                    label="Your Phone number "
                    placeholder={"Tell us your phone number"}
                  />

                  <Checkbox
                    name={InputFieldNames.MY_OPINION}
                    label="This review is based on my own experience and is my opinion."
                    value={formik.values[InputFieldNames.MY_OPINION]}
                    onChange={(e) => {
                      formik.setFieldValue(
                        InputFieldNames.MY_OPINION,
                        e.target.checked
                      );
                    }}
                    sx={{ fontSize: "0.7rem" }}
                  />
                </Box>
              </Box>
              <Button type="submit" sx={{ marginTop: "1.5rem" }}>
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default ReviewForm;
