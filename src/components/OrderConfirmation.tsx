import { Box } from "@mui/system";
import React from "react";
import PageHeader from "./PageHeader";
import { Typography } from "@mui/material";
import { Button } from "./shared/buttons/Buttons";
import { Colors } from "../constants/colors";
import { Checked } from "../assets/icons/Icons";
import { currencyConverter } from "../utils/helper/Function";
import Tracker from "./Tracker";

const OrderConfirmation = () => {
  return (
    <Box
      sx={{
        paddingTop: "6rem",
      }}
    >
      <PageHeader text={"ORDER CONFIRMATION AND TRACKING"} />
      <Box
        sx={{
          width: {
            xs: "90%",
            md: "60%",
            marginInline: "auto",
          },
        }}
      >
        <Box sx={{ marginTop: "2rem" }}>
          <Typography variant="h5">Order Received</Typography>
          <Typography>Estimated delivery 2:00pm-2:30pm</Typography>
        </Box>
        <Tracker />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              boxShadow: "0.6px 1px 5px 0px rgba(0,0,0,0.75)",
              padding: { xs: "1rem", md: "2rem" },
            }}
          >
            <Checked sx={{ borderRadius: "50%" }} />
            <Typography variant="h6">Order Delivered Successfully</Typography>
            <Typography sx={{ margin: "0.3rem 0" }}>
              Thanks for the patronage
            </Typography>
            <Button variant="text" sx={{ color: Colors.Primary }}>
              Write a review
            </Button>
          </Box>
        </Box>
        <Box sx={{ margin: "3rem 0" }}>
          <Box>
            <Typography variant="h6">We’ve got your order</Typography>
            <Typography>
              Sit back and relax while we bring your sweet goodness
            </Typography>
          </Box>
          <Box sx={{ margin: "2rem 0" }}>
            <Typography variant="h6">Delivering Location</Typography>
            <Typography>
              House 3, Anifalaje close, Akobo Estate, Ibadan
            </Typography>
          </Box>
          <Box>
            <Typography>Your Order</Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              Sit back and relax while we bring your sweet goodness{" "}
              <Typography component="span">
                {currencyConverter(32000)}
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderConfirmation;
