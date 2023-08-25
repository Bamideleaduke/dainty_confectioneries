import { Box, Typography, Button } from "@mui/material";
import HeroImg from "../assets/hero-img.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram-solid.svg";
import Facebook from "../assets/facebook.png";
import Description from "./Description";

const Hero = () => {
  return (
    <Box
      sx={{
        paddingTop: { xs: "3rem", sm: "6rem", lg: "6rem" },
        background: "rgb(243,220,230)",
        width: "100%",
        height: { xs: "90vh", sm: "40vh", md: "90vh", lg: "90vh" },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: { sm: "contain", md: "cover" },
          backgroundPosition: { sm: "top", md: "center" },
          backgroundRepeat: "no-repeat",
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          // border: "2px solid red",
          justifyContent: "right",
          alignItems: { sm: "center" },
          position: "relative",
        }}
      >
        {/* <Box sx={{ border: "2px solid red" }}>
          <Box
            // component="img"
            // src={HeroImg}
            // alt="Cake"
            sx={{ border: "2px solid yellow", width: "100%" }}
          />
        </Box> */}
        {/* <Box sx={{ position: "relative" }}> */}
        <Box
          sx={{
            // border: "2px solid blue",
            flexBasis: "50%",
            padding: { xs: "1rem", sm: "initial" },
            marginTop: {
              xs: "3rem",
              sm: "initial",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: {
                xs: "1.6rem",
                md: "1.6rem",
                lg: "1.9rem",
              },
              fontFamily: "Noto Sans Multani, sans-serif",
              // whiteSpace: 'normal',
              width: { xs: "300px", sm: "initial" },
            }}
          >
            From Dream to Dessert, Order the Perfect Cake
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "1.3rem" },
              width: { xs: "250px", md: "400px", lg: "450px" },
              margin: {
                xs: "0.8rem 0",
                sm: "0.8rem 0",
              },
            }}
          >
            Amazingly delicious cakes and pastries made only from natural
            products.
          </Typography>
          <Button
            sx={{
              backgroundColor: "#000080",
              color: "#fff",
              borderRadius: "25px",
              fontSize: "1rem",
              textTransform: "capitalize",
              padding: "0.6rem 2rem",
            }}
          >
            Order now
          </Button>
        </Box>
        <Box
          sx={{
            alignItems: "right",
            // border: "2px solid yellow",
            position: "absolute",
            bottom: { xs: "10px", sm: "50px" },
            right: { xs: "20px", sm: "100px" },
          }}
        >
          <Box component="img" src={Instagram} alt="Instagram icon" />
          <Box
            component="img"
            src={Twitter}
            alt="Twitter icon"
            sx={{ margin: "0 1rem" }}
          />
          <Box component="img" src={Facebook} alt="facebook icon" />
        </Box>
        {/* </Box> */}
      </Box>
      {/* <Description /> */}
    </Box>
  );
};

export default Hero;
