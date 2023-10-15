import { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import * as FormMeta from "../utils/validators/Customization";
import { useNavigate } from "react-router-dom";
import { InchSelection } from "../components/InchSelection";
import FormControlWrapper from "../components/shared/forms/FormControlWrapper";
import CheckboxControl from "../components/shared/forms/controls/CheckboxControl";
import InputControl from "../components/shared/forms/controls/InputControl";
import SelectControl from "../components/shared/forms/controls/SelectControl";
import { RouteList } from "../constants/routes";
import { DataProps } from "../utils/types/ProductDescriptionTypes";
import { Button } from "./shared/buttons/Buttons";

const Checkout: React.FC = () => {
  const { InputFieldNames } = FormMeta;
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event: any) => {
    setSelectedGender(event.target.value);
  };
  const icingOption = [
    { key: "--Please select--", value: "--Please select--" },
    { key: "Hair care", value: "Hair care" },
    { key: "Skin care", value: "Skin care" },
    { key: "Manicure", value: "Manicure" },
  ];
  const onSubmit = (values: any, { resetForm }: FormikHelpers<any>) => {
    resetForm();
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={FormMeta.customizationInitialValue}
      validationSchema={FormMeta.customizationValidationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // console.log(formik.values);
        return (
          <Form>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedGender === "credit-card"}
                    onChange={handleGenderChange}
                    value="credit-card"
                    color="primary"
                  />
                }
                label="Credit Card"
              />
              <InputControl
                name={InputFieldNames.COLOUR}
                label={"Card Number"}
                placeholder="Card Number"
              />
              <Grid container       justifyContent="space-between" sx={{columnGap: { sm: 3 }}}>
                <Grid item md={6}>
                  <InputControl
                    name={InputFieldNames.PERSONALIZED_MESSAGE}
                    label={"Expiration Date"}
                    placeholder="MM/YY"
                  />
                </Grid>
                <Grid item md={3}>
                  <InputControl
                    name={InputFieldNames.PERSONALIZED_MESSAGE}
                    label={"CVV"}
                    placeholder="cvv"
                  />
                </Grid>
              </Grid>
              <FormGroup>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedGender === "bank transfer"}
                        onChange={handleGenderChange}
                        value="bank transfer"
                        color="primary"
                      />
                    }
                    label="Bank Transfer"
                  />
                  <Typography>
                    You will be provided with bank account details to continue
                    your purchase
                  </Typography>

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedGender === "flutterwave"}
                        onChange={handleGenderChange}
                        value="flutterwave"
                        color="primary"
                      />
                    }
                    label="Flutterwave"
                  />
                  <Typography>
                    You will be redirected to flutterwave your purchase
                  </Typography>
                </Box>
              </FormGroup>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                //   onClick={() => {
                //     navigate(`${RouteList.CART}`);
                //   }}
                >
                  Make Payment
                </Button>
              </Box>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Checkout;
