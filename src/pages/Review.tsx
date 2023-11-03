import { Box } from "@mui/system";
import React from "react";
import PageHeader from "../components/PageHeader";
import ReviewForm from "../components/ReviewForm";
import { Grid, Typography } from "@mui/material";
import RatingSummary from "../components/RatingSummary";
import { review } from "../resources/Data";
import { UncontrolledInput } from "../components/shared/forms";
import { UncontrolledRatings } from "../components/shared/forms/Ratings";

const Review = () => {
  return (
    <Box sx={{ marginTop: "6rem" }}>
      <PageHeader
        text="GIVE US A FEEDBACK"
        subText="We would like to hear from you"
      />
      <Box
        sx={{
          width: { xs: "90%", md: "85%" },
          marginInline: "auto",
        }}
      >
        <Box sx={{ margin: { xs: "4rem auto", md: "6rem auto" } }}>
          <Grid
            container
            justifyContent="space-between"
            // columnSpacing={"90px"}
          >
            <Grid item sm={12} md={7}>
              <RatingSummary />
              <ReviewForm />
            </Grid>
            <Grid item sm={12} md={5}>
              <Box sx={{ marginTop: { xs: "4rem", md: "initial" } }}>
                {review.map((item) => {
                  return (
                    <Box key={item.id} sx={{ marginBottom: "1.5rem" }}>
                      <Typography variant="h6">{item.title}</Typography>
                      <Box sx={{ margin: "0.7rem 0", display: "flex" }}>
                        <UncontrolledRatings
                          name={"read-only"}
                          value={item.rate}
                        />
                        <Typography sx={{ marginLeft: "0.7rem" }}>
                          {item.date}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>{item.comment}</Typography>
                        <Typography sx={{ marginTop: "1rem" }}>
                          {item.user}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
