import { Box } from "@mui/material";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/landingPage/Hero";
import Products from "../components/landingPage/Products";
import Description from "../components/landingPage/Description";
import Reviews from "../components/landingPage/Reviews";
const Landingpage = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Description />
      <Products />
      <Reviews />
    </Box>
  );
};

export default Landingpage;
