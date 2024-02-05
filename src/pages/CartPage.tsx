import { Box,  } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks/redux-hook";
import { calculateTotal } from "../utils/redux/features/cakeSlice";
import CartContainer from "../components/cart/CartContainer";
import AddToCartForm from "../components/cart/AddToCartForm";

const CartPage = () => {
  const selectedCakeData = localStorage.getItem("selectedCake");
  const cake = useAppSelector((state) => state.cakeData);
  const dispatch = useAppDispatch();
  let selectedCake: any;

  if (selectedCakeData) {
    selectedCake = JSON.parse(selectedCakeData);
  } else {
    selectedCake = {};
  }


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

        <AddToCartForm
          cake={cake}
          selectedCake={selectedCake}
        />
      </Box>
    </Box>
  );
};

export default CartPage;
