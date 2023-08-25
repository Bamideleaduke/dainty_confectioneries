import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import { Link } from "react-router-dom";
// import { useTheme } from "@emotion/react";

function Error() {
  // const theme = useTheme();
  return (
    <>
      <Box>
        <Grid
          container
          justifyContent={"center"}
          sx={
            {
              // border: '2px solid red',
            }
          }
        >
          <Grid
            item
            sx={
              {
                // border: '2px solid yellow',
              }
            }
          >
            <Box
              sx={{
                // border: '2px solid blue',
                // [theme.breakpoints.down('md')]: {
                //   width: '94%',
                //   padding: '20px',
                // },
                width: "70%",
                margin: "0 auto 70px auto",
              }}
            >
              <Typography
                variant="h1"
                align={"center"}
                sx={{
                  // [theme.breakpoints.down('xs')]: {
                  //   fontSize: '9rem',
                  // },

                  fontSize: "13rem",
                }}
              >
                404
              </Typography>
              <Typography
                variant="h4"
                align={"center"}
                sx={{
                  // [theme.breakpoints.down('xs')]: {
                  //   fontSize: '2rem',
                  // },
                  paddingBottom: "20px",
                }}
              >
                Sorry, the page you're looking for can't be found.
              </Typography>
              <Typography variant="body1" color="initial" align={"center"}>
                It may have been moved or deleted, or you may have typed the URL
                incorrectly. Please check the address and try again, or go back
                to the previous page.
              </Typography>
              <Link to={"/"}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    "&.MuiButton-root": {
                      textTransform: "Capitalize",
                      display: "block",
                      // [theme.breakpoints.down('sm')]: {
                      //   width: '50%',
                      // },
                      width: "30%",
                      margin: "30px auto",
                      marginBottom: "0",
                    },
                  }}
                >
                  Go home
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Error;
