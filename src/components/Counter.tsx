import { DecreaseIcon, IncreaseIcon } from "../assets/icons/Icons";
import { useAppDispatch, useAppSelector } from "../utils/hooks/redux-hook";
import { decrease, increase } from "../utils/redux/features/cakeSlice";
import { Button } from "./shared/buttons/Buttons";
import { Box, Typography } from "@mui/material";

const Counter = () => {
  const selectedCake = useAppSelector((state) => state.cakeData);
  const dispatch = useAppDispatch();
  const handleIncrease = () => {
    dispatch(increase({ id: selectedCake.selectedCake.id }));
  };
  const handleDecrease = () => {
    dispatch(decrease({ id: selectedCake.selectedCake.id }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "max-content",
        border: "1px solid grey",
        marginTop: "0.3rem",
      }}
    >
      <DecreaseIcon
        onClick={handleDecrease}
        sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
      />

      <Typography sx={{ margin: "0 1rem" }}>{selectedCake.amount}</Typography>
      <IncreaseIcon
        onClick={handleIncrease}
        sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
      />
    </Box>
  );
};

export default Counter;
