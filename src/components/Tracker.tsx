import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "../constants/colors";

const Tracker = () => {
  return (
    <Box sx={{ margin: { xs: "2rem 0", md: "3rem 0" } }}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: Colors.Primary,
            flexBasis: { xs: "22%", sm: "10%", md: "8%" },
          }}
        />
        <Box
          component="hr"
          sx={{ height: "2px", width: "100%", backgroundColor: Colors.Primary }}
        />
        <Box
          sx={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: Colors.Primary,
            flexBasis: { xs: "22%", sm: "10%", md: "8%" },
          }}
        />
        <Box
          component="hr"
          sx={{ height: "2px", width: "100%", backgroundColor: Colors.Primary }}
        />
        <Box
          sx={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: Colors.TextGray,
            flexBasis: { xs: "22%", sm: "10%", md: "8%" },
          }}
        />
        <Box
          component="hr"
          sx={{ height: "2px", width: "100%", backgroundColor: Colors.Primary }}
        />
        <Box
          sx={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: Colors.TextGray,
            flexBasis: { xs: "22%", sm: "10%", md: "8%" },
          }}
        />
      </Box>
      <Grid container>
        <Grid
          item
          xs={3.5}
          md={3.5}
          sx={{ fontSize: { xs: "0.7rem", md: "initial" } }}
        >
          Received
        </Grid>
        <Grid
          item
          xs={3.2}
          md={3.2}
          sx={{ fontSize: { xs: "0.7rem", md: "initial" } }}
        >
          Preparing
        </Grid>
        <Grid
          xs={3}
          md={3}
          item
          sx={{ fontSize: { xs: "0.7rem", md: "initial" } }}
        >
          Ready for Courier
        </Grid>
        <Grid xs={2.3} md={2.3} item>
          <Typography
            textAlign={"right"}
            sx={{ fontSize: { xs: "0.7rem", md: "initial" } }}
          >
            Delivering
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tracker;
