// import React from 'react';
// import logo from './logo.svg';
import { Box } from "@mui/material";
import { PaystackButton } from "react-paystack";
import { Colors } from "../../constants/colors";
import { Button } from "../shared/buttons/Buttons";
// import { PaystackButton } from 'react-paystack' as any;
// import './App.css';
interface Customer {
  email: string;
  phone_number: string;
  name: string;
}
interface Customizations {
  title: string;
  description: string;
  logo: string;
}
interface Config {
  public_key: string;
  tx_ref: string;
  amount: number;
  currency: string;
  payment_options: string;
  customer: Customer;
  customizations: Customizations;
}
const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: process.env.P_SECRET_KEY,
};

function Paystack() {
  // you can call this function anything
  const handlePaystackSuccessAction = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    // console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    // console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Checkout",
    onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <>
      {/* <Button
        component={PaystackButton}
        {...componentProps}
        sx={{ backgroundColor: Colors.Primary, color: Colors.White }}
      /> */}
      <PaystackButton {...componentProps} />
    </>
  );
}

export default Paystack;
