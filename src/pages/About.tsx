import { Box, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import Eclipse from "../assets/icons/iconComponents/Eclipse";
import { Colors } from "../constants/colors";

const About = () => {
  return (
    <Box
      sx={{
        paddingTop: "6rem",
        // width: "100%",
      }}
    >
      <PageHeader text={"ABOUT US"} />
      <Box
        sx={{
          // backgroundColor: "red",
          // background: `url(${Eclipse})`,
          // backgroundSize: { sm: "contain", md: "cover" },
          // backgroundPosition: { sm: "top", md: "center" },
          // backgroundRepeat: "no-repeat",
          // height: { xs: "90vh", sm: "40vh", md: "90vh", lg: "90vh" },
          width: { md: "40%", marginInline: "auto" },
          padding: "4rem 0",
        }}
      >
        <Typography
          variant="body1"
          sx={{ marginBottom: "2.5rem", textAlign: "center" }}
        >
          Dainty confectioneries is your right choice for cakes & pastries in
          Ibadan.{" "}
        </Typography>
        <Box
          sx={
            {
              // width: "90%",
              // textAlign: "center"
            }
          }
        >
          <Box
            sx={{
              marginBottom: "2.5rem",
              boxShadow: `0px 0px 4px 2px ${Colors.TextGray}`,
              padding: "1rem 0.5rem",
              textAlign: "center",
            }}
          >
            <Typography sx={{ marginBottom: "1rem" }}>OUR VISION</Typography>
            <Typography>
              Our vision is to enrich lives through the joy, beauty, and
              deliciousness of our cakes, making every celebration a truly
              extraordinary experience.
            </Typography>
          </Box>
          <Box
            sx={{
              marginBottom: "2.5rem",
              boxShadow: `0px 0px 4px 2px ${Colors.TextGray}`,
              padding: "1rem 0.5rem",
              textAlign: "center",
            }}
          >
            <Typography sx={{ marginBottom: "1rem" }}>OUR MISSION</Typography>
            <Typography>
              To always help our Customers find Moments of Happiness and
              Satisfaction by delivering superior bakery products and services
              that exceed their expectations.”
            </Typography>
          </Box>
          <Box
            sx={{
              width: { md: "200px" },
              boxShadow: `0px 0px 4px 2px ${Colors.TextGray}`,
              marginInline: "auto",
              padding: { md: "1rem 0" },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              OUR CORE VALUES
            </Typography>
            <Box component="ul">
              <Box component="li" sx={{ marginBottom: "1rem" }}>
                Integrity
              </Box>
              <Box component="li" sx={{ marginBottom: "1rem" }}>
                Quality craftmanship
              </Box>
              <Box component="li" sx={{ marginBottom: "1rem" }}>
                Customer focus
              </Box>
              <Box component="li" sx={{ marginBottom: "1rem" }}>
                Excellence
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
