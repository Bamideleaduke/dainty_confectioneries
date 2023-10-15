import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import PageHeader from "../components/PageHeader";
import { Button } from "../components/shared/buttons/Buttons";
import { Colors } from "../constants/colors";
import { FormikHelpers, Formik, Form } from "formik";
import * as FormMeta from "../utils/validators/CartValidator";
import CheckboxControl from "../components/shared/forms/controls/CheckboxControl";
import { FormControlBase } from "../components/shared/forms/FormControl";
import FormControlWrapper from "../components/shared/forms/FormControlWrapper";
import { useState } from "react";
import InputControl from "../components/shared/forms/controls/InputControl";
import { useAppSelector } from "../utils/hooks/redux-hook";
import { currencyConverter } from "../utils/helper/Function";

const CartPage = () => {
  const { InputFieldNames } = FormMeta;
  const selectedCake = useAppSelector((state) => state.cakeData.selectedCake);
  console.log("cart", [...selectedCake]);

  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event: any) => {
    setSelectedGender(event.target.value);
  };
  const onSubmit = (values: any, { resetForm }: FormikHelpers<any>) => {
    resetForm();
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={FormMeta.cartInitialValue}
      validationSchema={FormMeta.cartValidationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // console.log(formik.values);
        return (
          <Form>
            <Box
              sx={{
                paddingTop: "6rem",
                width: { xs: "90%", md: "85%" },
                marginInline: "auto",
              }}
            >
              <PageHeader text="Cart" />

              <Box sx={{ padding: { xs: "2rem", md: "initial" } }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "2px 1px 9px 0px rgba(0,0,0,0.75)",
                  }}
                >
                  {/* <Box
                    component="img"
                    src={selectedCake[0].image}
                    alt={selectedCake[0].type}
                  /> */}
                  {/* <Box sx={{ margin: { xs: "1rem 0 1rem 1rem" } }}>
                    <Typography>{selectedCake[0].type}</Typography>
                    <Typography sx={{ fontWeight: "Bold" }}>
                      Price: {currencyConverter(selectedCake[0].price)}
                    </Typography>
                  </Box> */}
                </Box>
              </Box>

              <Box sx={{ width: { md: "40%" } }}>
                <Box>
                  {/* <CheckboxControl
                    name={InputFieldNames.DELIVERY_OR_PICKUP}
                    label={""}
                    options={["Deliver", "Pickup"]}
                    maxLength={2}
                  /> */}
                  <FormGroup>
                    <Box sx={{ display: "flex" }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedGender === "delivery"}
                            onChange={handleGenderChange}
                            value="delivery"
                            color="primary"
                          />
                        }
                        label="Deliver"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedGender === "pickup"}
                            onChange={handleGenderChange}
                            value="pickup"
                            color="primary"
                          />
                        }
                        label="Pickup"
                      />
                    </Box>
                  </FormGroup>
                </Box>
                <InputControl
                  name={InputFieldNames.DATE_NEEDED}
                  label={"Date Needed"}
                />
                <Box sx={{ marginBottom: "1rem" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h6">Delivery Address </Typography>
                    <Typography variant="h6" color={Colors.Primary}>
                      Change
                    </Typography>
                  </Box>
                  <Typography>
                    House 3, Anifalaje Close, Akobo Esatate, Ibadan
                  </Typography>
                </Box>
                <Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h6">Contact Information </Typography>
                    <Typography variant="h6" color={Colors.Primary}>
                      Change
                    </Typography>
                  </Box>
                  <Typography>halimatalesh8@gmail.com</Typography>
                  <Typography>08146058001</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "2.5rem",
                  }}
                >
                  <Button variant="outlined">Continue shopping</Button>
                  <Button>Checkout</Button>
                </Box>
              </Box>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CartPage;
