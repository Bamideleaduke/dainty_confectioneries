import { Box, Grid, Typography } from "@mui/material";
import { details } from "../../resources/Data";

const Description = () => {
  return (
    <Box
      sx={{
        padding: { xs: "5rem 0", sm: "5rem 1rem", md: "5rem 9rem" },
        background: "rgb(243,220,230)",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%" },
          marginInline: "auto",
          //   border: "2px solid red",
        }}
      >
        <Grid
          container
          spacing={5}
          //   justifyContent="space-between"
          //   columnSpacing={"30px"}
          sx={{}}
        >
          {details.map((val, index) => {
            return (
              <Grid
                item
                key={index}
                xs={12}
                sm={4}
                md={4}
                // sx={{ border: "2px solid red" }}
              >
                <Box sx={{ textAlign: { xs: "center", sm: "initial" } }}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", sm: "initial" },
                    }}
                  >
                    <Box sx={{ width: "20px", marginRight: "0.5rem" }}>
                      {val.icon}
                    </Box>
                    <Typography
                      sx={{ textTransform: "uppercase", fontSize: "1rem" }}
                    >
                      {val.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      width: { sm: "220px" },
                      marginTop: "1rem",
                    }}
                  >
                    {val.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Description;
