import { Box, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import  Eclipse  from "../assets/icons/iconComponents/Eclipse";

const About = () => {
  return (
    <Box
      sx={{
        paddingTop: "6rem",
        width: "100%",
      }}
    >
      <Box
        sx={{
          // backgroundColor: "red",
          backgroundImage: `url(${Eclipse})`,
          backgroundSize: { sm: "contain", md: "cover" },
          backgroundPosition: { sm: "top", md: "center" },
          backgroundRepeat: "no-repeat",
          height: { xs: "90vh", sm: "40vh", md: "90vh", lg: "90vh" },
        }}
      >
        <PageHeader text={"ABOUT US"} />
        <Typography variant="body2">
          Dainty confectioneries is your right choice for cakes & pastries in
          Ibadan.{" "}
        </Typography>
        <Box>
          <Typography>OUR VISION</Typography>
          <Typography>
            Our vision is to enrich lives through the joy, beauty, and
            deliciousness of our cakes, making every celebration a truly
            extraordinary experience.
          </Typography>
        </Box>
        <Box>
          <Typography>OUR MISSION</Typography>
          <Typography>
            To always help our Customers find Moments of Happiness and
            Satisfaction by delivering superior bakery products and services
            that exceed their expectations.”
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
