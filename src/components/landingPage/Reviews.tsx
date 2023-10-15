import { Box, Grid, Typography } from "@mui/material";
import { reviews } from "../../resources/Data";

const Reviews = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "90%",
          md: "60%",
          marginInline: "auto",
          padding: "0 0 3rem",
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: { xs: "1rem", md: "1.8rem" },
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        CUSTOMER REVIEWS
      </Typography>
      <Grid container spacing={8}>
        {reviews.map((review) => {
          return (
            <Grid item xs={12} sm={6} key={review.id}>
              <Box
                sx={{
                  boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
                  border: "0.25px solid rgba(0, 0, 0, 0.2)",
                  padding: "2rem",
                  borderRadius: "15px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ marginRight: "1rem" }}>
                    {review.icon}
                  </Typography>{" "}
                  {review.date}
                </Box>
                <Typography
                  sx={{
                    lineHeight: "20px",
                    letterSpacing: "1px",
                    margin: "1rem 0",
                  }}
                >
                  {review.comment}
                </Typography>
                <Typography>{review.user}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Typography
        sx={{
          fontSize: "1rem",
          margin: "2rem",
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        Check out for more amazing reviews{" "}
      </Typography>
    </Box>
  );
};

export default Reviews;
