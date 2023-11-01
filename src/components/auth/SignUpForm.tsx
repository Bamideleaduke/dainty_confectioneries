import { Box, Typography } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import { Button } from "../shared/buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { RouteList } from "../../constants/routes";
import * as FormMeta from "../../utils/validators/AuthValidator";
import InputControl from "../shared/forms/controls/InputControl";
import { PasswordControl } from "../shared/forms/controls/PasswordControl";
import {
  DaintyLogo,
  FacebookLogo,
  GoogleIcon,
  LocationIcon,
  MailIcon,
  Username,
} from "../../assets/icons/Icons";
import { Colors } from "../../constants/colors";
import { useState } from "react";
import Dialog from "../shared/dialogs/Dialog";
import Congratulation from "../../assets/congratulation.svg";

const SignUpForm: React.FC = () => {
  const { InputFieldNames } = FormMeta;
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const onSubmit = (values: any, { resetForm }: FormikHelpers<any>) => {
    // resetForm();
  };
  return (
    <Box
      sx={{
        width: "400px",
        marginInline: "auto",
        padding: "1rem",
        margin: "6rem auto 2rem",
        textAlign: "center",
        boxShadow: "2px 1px 9px 0px rgba(0,0,0,0.75)",
      }}
    >
      <Box sx={{ margin: "0 0 1rem" }}>
        <DaintyLogo sx={{ fontSize: "6rem" }} />
        <Typography variant="h4">Create account</Typography>
      </Box>
      <Formik
        enableReinitialize={true}
        initialValues={FormMeta.SignupInitialValue}
        validationSchema={FormMeta.SignupValidationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          // console.log(formik.values);
          return (
            <Form>
              <InputControl
                name={InputFieldNames.USERNAME}
                // label={"Username"}
                placeholder={"Username"}
                startAdornment={<Username />}
                backgroundColor
              />
              <InputControl
                name={InputFieldNames.EMAIL}
                // label={"Email address"}
                placeholder={"Email address"}
                startAdornment={<MailIcon />}
                backgroundColor
              />
              <Box>
                <PasswordControl
                  name={InputFieldNames.PASSWORD}
                  // label={""}
                  maxLength={7}
                  placeholder="Password"
                  backgroundColor
                />
                <PasswordControl
                  name={InputFieldNames.CONFIRM_PASSWORD}
                  label={""}
                  maxLength={7}
                  placeholder="Confirm password"
                  backgroundColor
                />
                <InputControl
                  name={InputFieldNames.DELIVERY_ADDRESS}
                  label={""}
                  placeholder={"Delivery address"}
                  startAdornment={<LocationIcon />}
                  backgroundColor
                />
                <Box
                  sx={{
                    // display: { sm: "flex" },
                    // alignItems: "center",
                    // justifyContent: { xs: "center", sm: "center" },
                    marginTop: { xs: "1rem", sm: "2rem" },
                  }}
                >
                  <Button
                    fullWidth
                    onClick={() => {
                      // navigate(`${RouteList.CART}`);
                      setOpenDialog(true);
                    }}
                  >
                    Signup
                  </Button>
                </Box>
                <Box sx={{ width: "70%", marginInline: "auto" }}>
                  <Button
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    fullWidth
                    sx={{ margin: "2rem 0 1.5rem", borderRadius: "30px" }}
                  >
                    Sign up with Google
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<FacebookLogo />}
                    fullWidth
                    sx={{ borderRadius: "30px" }}
                  >
                    Sign up with Facebook
                  </Button>
                </Box>
              </Box>
            </Form>
          );
        }}
      </Formik>
      <Typography sx={{ marginTop: "2rem" }}>
        Do’nt have an account?{" "}
        <Typography
          component="span"
          color={Colors.Primary}
          onClick={() => navigate("/login")}
        >
          Login
        </Typography>
      </Typography>
      <Dialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        children={
          <Box >
            <Box component="img" src={Congratulation} />
            <Typography>Account Registration Successfully</Typography>
          </Box>
        }
      />
    </Box>
  );
};

export default SignUpForm;
