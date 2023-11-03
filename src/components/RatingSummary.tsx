import { Box, Rating, Typography } from "@mui/material";
import { Colors } from "../constants/colors";
import { Ratings, UncontrolledRatings } from "./shared/forms/Ratings";

const RatingSummary = () => {
  const value = 4.5;
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "70%" },
        // marginInline: "auto"
        marginBottom: { xs: "3rem", md: "2rem" },
      }}
    >
      <Typography variant="h5">Rating Summary</Typography>
      <Box sx={{ display: "flex", alignItems: "end", margin: "0.5rem 0" }}>
        <Typography marginRight={".5rem"}>{value}</Typography>
        <UncontrolledRatings value={value} name={"read-only"} />
      </Box>
      <Typography variant="body1">
        {value} of 5 stars (based on 180 reviews)
      </Typography>
      <Box sx={{ margin: "1rem 0" }}>
        {["2%", "5%", "15%", "50%", "80%"].reverse().map((item, index) => {
          return (
            <Box key={index * 2} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  backgroundColor: Colors.BackgroundGray,
                  height: { xs: "15px", md: "20px" },
                  marginBottom: { xs: "0.3rem", md: "1rem" },
                  flexBasis: "90%",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: Colors.Star,
                    height: { xs: "15px", md: "20px" },
                    width: item,
                  }}
                />
              </Box>
              <Typography sx={{ flexBasis: "10%", marginLeft: "1rem" }}>
                {item}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default RatingSummary;
