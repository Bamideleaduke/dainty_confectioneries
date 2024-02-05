import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { Formik, FormikHelpers, Form } from "formik";
import * as FormMeta from "../../utils/validators/CartValidator";
import { Colors } from "../../constants/colors";
import DateInput from "../shared/forms/DatePicker";
import InputControl from "../shared/forms/controls/InputControl";
import { Button } from "../../components/shared/buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { config } from "../payment/Flutterwave";
import { RadioGroup } from "../shared/forms/Radio";
import { RouteList } from "../../constants/routes";

const AddToCartForm = ({
  cake,
  selectedCake,
}: {
  cake: any;
  selectedCake: any;
}) => {
  const { InputFieldNames } = FormMeta;
  const handleFlutterPayment = useFlutterwave(config);
  const navigate = useNavigate();

  const onSubmit = (values: any, { resetForm }: FormikHelpers<any>) => {
    resetForm();

    try {
      values[InputFieldNames.QUANTITY] = cake.amount;
      values[InputFieldNames.TOTAL] = cake.amount * selectedCake.price;

      const val = {
        ...values,
      };
      const checkout = () => {
        handleFlutterPayment({
          callback: (response) => {
            if (response?.status === "completed") {
              closePaymentModal();
              navigate(RouteList.ORDERCONFIRMATION);
            }
          },
          onClose: () => {
            navigate("/products");
          },
        });
      };
      checkout();
      return val;
    } catch (error) {
    }
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={FormMeta.cartInitialValue}
      validationSchema={FormMeta.cartValidationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Box
              sx={{
                width: { md: "40%" },
                marginTop: "3rem",
              }}
            >
              <Box>
                <RadioGroup
                  name={InputFieldNames.DELIVERY_OR_PICKUP}
                  options={[
                    { label: "deliver", value: "Deliver" },
                    { label: "pickup", value: "Pickup" },
                  ]}
                />
              </Box>

              <DateInput
                id={InputFieldNames.DATE_NEEDED}
                label={"Date & Time Needed:"}
                name={InputFieldNames.DATE_NEEDED}
                // error={undefined}
                value={formik.values[InputFieldNames.DATE_NEEDED]}
                onChange={() => {
                  const dateValue = formik.values[InputFieldNames.DATE_NEEDED];
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
                  <Typography variant="h6">Contact Information </Typography>
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
                onClick={() => {
                  navigate("/products");
                }}
              >
                Continue shopping
              </Button>
              <Button
                type="submit"
                sx={{
                  backgroundColor: Colors.Primary,
                  color: Colors.White,
                }}
              >
                Checkout
              </Button>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddToCartForm;
