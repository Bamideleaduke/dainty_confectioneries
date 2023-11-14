import {
  Box,
  // Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
import { useEffect, useState } from "react";
import InputControl from "../components/shared/forms/controls/InputControl";
import { useAppDispatch, useAppSelector } from "../utils/hooks/redux-hook";
import { currencyConverter } from "../utils/helper/Function";
// import DateInput from "../components/shared/forms/DatePicker";
// import DatePicker from "../components/shared/forms/DatePicker";
import Counter from "../components/Counter";
import selectedCakeSlice, {
  calculateTotal,
} from "../utils/redux/features/cakeSlice";
import DatePickerValue from "../components/shared/forms/DatePicker";
import DateInput from "../components/shared/forms/DatePicker";
import UsageSample from "../components/shared/forms/UsageSamples";
import Checkbox from "../components/shared/forms/Checkbox";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Checked } from "../assets/icons/iconComponents/Checked";
import CartContainer from "../components/cart/CartContainer";
import PaystackButton from "react-paystack/dist/paystack-button";
import Paystack from "../components/payment/Paystack";
import FlutterWave from "../components/payment/Flutterwave";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { InputFieldNames } = FormMeta;
  const selectedCakeData = localStorage.getItem("selectedCake");
  const cake = useAppSelector((state) => state.cakeData);
  const dispatch = useAppDispatch();
const navigate= useNavigate()
  let selectedCake: any;

  if (selectedCakeData) {
    selectedCake = JSON.parse(selectedCakeData);
  } else {
    selectedCake = {};
  }

  const [selectDelivery, setSelectDelivery] = useState("");

  // const handleGenderChange = (e: any) => {
  //   setSelectedGender(e.target.value);
  //   console.log(e.target.value);
  // };
  const onSubmit = (values: any, { resetForm }: FormikHelpers<any>) => {
    resetForm();
    values[InputFieldNames.DELIVERY_OR_PICKUP] = selectDelivery;
    values[InputFieldNames.TOTAL] = cake.amount * selectedCake.price;
    const val = {
      ...values,
    };
    // return val;
    console.log("value", val);
  };

  useEffect(() => {
    dispatch(calculateTotal(selectedCake.price));
  }, [dispatch, selectedCake.price]);
  let delivery = 2000;
  return (
    <Box
      sx={{
        paddingTop: "6rem",
      }}
    >
      <PageHeader text="Cart" />
      <Box
        sx={{
          margin: "3rem 0",
          width: { xs: "90%", md: "85%", lg: "80%" },
          marginInline: "auto",
        }}
      >
        <CartContainer
          selectedCake={selectedCake}
          amount={cake.amount}
          deliveryFee={delivery}
        />

        <Formik
          enableReinitialize={true}
          initialValues={FormMeta.cartInitialValue}
          validationSchema={FormMeta.cartValidationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            console.log("formik", formik.values);
            return (
              <Form>
                <Box
                  sx={{
                    marginTop: "3rem",
                  }}
                >
                  <Box
                    sx={{
                      width: { md: "40%" },
                    }}
                  >
                    <Box>
                      <CheckboxControl
                        name={InputFieldNames.DELIVERY_OR_PICKUP}
                        label={""}
                        options={["Deliver", "Pickup"]}
                        maxLength={1}
                        oneOption
                        flex
                        initialValue={
                          formik.values[InputFieldNames.DELIVERY_OR_PICKUP] ||
                          null
                        }
                      />
                    </Box>

                    <DateInput
                      id={InputFieldNames.DATE_NEEDED}
                      label={"Date & Time Needed:"}
                      name={InputFieldNames.DATE_NEEDED}
                      // error={undefined}
                      value={formik.values[InputFieldNames.DATE_NEEDED]}
                      onChange={() => {
                        const dateValue =
                          formik.values[InputFieldNames.DATE_NEEDED];
                        const formattedDate =
                          dayjs(dateValue).format("YYYY-MM-DD HH:mm");
                        formik.setFieldValue(
                          InputFieldNames.DATE_NEEDED,
                          formattedDate
                        );
                      }}
                    />

                    <Box sx={{ marginBottom: "1rem" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h6">Delivery Address </Typography>
                        <Typography
                          variant="h6"
                          color={Colors.Primary}
                          sx={{ cursor: "pointer" }}
                        >
                          Change
                        </Typography>
                      </Box>
                      {/* <Typography>
                      House 3, Anifalaje Close, Akobo Esatate, Ibadan
                      {formik.values[InputFieldNames.DELIVERY_ADDRESS]}
                    </Typography> */}
                      <InputControl
                        name={InputFieldNames.DELIVERY_ADDRESS}
                        label={""}
                        placeholder="House 3, Anifalaje Close, Akobo Esatate, Ibadan"
                      />
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h6">
                          Contact Information{" "}
                        </Typography>
                        <Typography
                          variant="h6"
                          color={Colors.Primary}
                          sx={{ cursor: "pointer" }}
                        >
                          Change
                        </Typography>
                      </Box>
                      <InputControl
                        name={InputFieldNames.EMAIL}
                        label={""}
                        placeholder="Enter your email address"
                        variant="standard"
                      />
                      <InputControl
                        name={InputFieldNames.PHONE_NUMBER}
                        label={""}
                        placeholder="Enter your phone number"
                        variant="standard"
                      />

                      {/* <Typography>halimatalesh8@gmail.com</Typography>
                    <Typography>08146058001</Typography> */}
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "2.5rem",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        minWidth: { xs: "30px", md: "64px" },
                        padding: { xs: "7px", md: "8px 40px" },
                      }}
                      onClick={()=>{
              navigate("/products")
                }}
                    >
                      Continue shopping
                    </Button>
                    {/* <Button
                      component={PaystackButton}
                      {...componentProps}
                      sx={{
                        backgroundColor: Colors.Primary,
                        color: Colors.White,
                      }}
                    /> */}
                    {/* <Paystack /> */}
                    <FlutterWave />
                  </Box>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
};

export default CartPage;
