import { Box } from "@mui/material";
import Checkout from "../components/Checkout";
import PageHeader from "../components/PageHeader";

const CheckoutPage: React.FC = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "85%" },
        marginInline: "auto",
        paddingTop: "6rem",
      }}
    >
      <PageHeader text={"CHECKOUT"} />
      <Box sx={{ width: { md: "40%" }, marginInline: "auto" }}>
        <Checkout />
      </Box>
    </Box>
  );
};

export default CheckoutPage;
