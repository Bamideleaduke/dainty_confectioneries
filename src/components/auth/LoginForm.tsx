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
  MailIcon,
} from "../../assets/icons/Icons";
import { Colors } from "../../constants/colors";
import { useAppDispatch } from "../../utils/hooks/redux-hook";
import { login } from "../../utils/redux/features/AuthSlice";

const LoginForm = ({ setOpen }: any) => {
  const { InputFieldNames } = FormMeta;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (values: any, { resetForm }: FormikHelpers<any>) => {
    // resetForm();
    dispatch(login(values));
    setOpen(false);
    // if (localStorage.getItem("user")) navigate(`${RouteList.CART}`);
    // console.log("login", values);
  };
  return (
    <Box
      sx={{
        width: { md: "400px" },
        // marginInline: "auto",
        // padding: "1rem",
        // margin: { md: "6rem auto 2rem" },
        textAlign: "center",
        // boxShadow: { md: "2px 1px 9px 0px rgba(0,0,0,0.75)" },
      }}
    >
      <Box sx={{ marginBottom: "1rem" }}>
        <DaintyLogo sx={{ fontSize: "6rem" }} />
        <Typography variant="h4">Welcome back</Typography>
      </Box>
      <Formik
        enableReinitialize={true}
        initialValues={FormMeta.LoginInitialValue}
        validationSchema={FormMeta.LoginValidationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          // console.log(formik.values);
          return (
            <Form>
              <Box>
                <InputControl
                  name={InputFieldNames.EMAIL}
                  placeholder={"Email address"}
                  backgroundColor
                  startAdornment={<MailIcon />}
                />
                <PasswordControl
                  name={InputFieldNames.PASSWORD}
                  label={""}
                  maxLength={7}
                  placeholder="Password"
                  backgroundColor
                />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button variant="text">Remember me</Button>
                  <Button variant="text" sx={{ color: Colors.Danger }}>
                    Forgot Password
                  </Button>
                </Box>
                <Box
                  sx={{
                    // display: { sm: "flex" },
                    alignItems: "center",
                    justifyContent: { xs: "center", sm: "center" },
                    marginTop: { xs: "1rem", sm: "2rem" },
                  }}
                >
                  <Button
                    fullWidth
                    type="submit"
                    // onClick={() => {
                    //   navigate(`${RouteList.CART}`);
                    // }}
                  >
                    Login
                  </Button>
                  <Box sx={{ width: "70%", marginInline: "auto" }}>
                    <Button
                      variant="outlined"
                      startIcon={<GoogleIcon />}
                      fullWidth
                      sx={{
                        margin: "2rem 0 1.5rem",
                        borderRadius: "30px",
                        fontSize: { xs: "0.7rem", md: "initial" },
                      }}
                    >
                      Sign up with Google
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<FacebookLogo />}
                      fullWidth
                      sx={{
                        borderRadius: "30px",
                        fontSize: { xs: "0.7rem", md: "initial" },
                      }}
                    >
                      Sign up with Facebook
                    </Button>
                  </Box>
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
          onClick={() => navigate("/sign-up")}
        >
          Sign up
        </Typography>
      </Typography>
    </Box>
  );
};

export default LoginForm;
