import { Box, Typography, Grid } from "@mui/material";
import { data } from "../../resources/Data";
import { Button } from "../shared/buttons/Buttons";
import { RouteList } from "../../constants/routes";
const Products = () => {
  return (
    <Box
      sx={{
        padding: { sm: "3rem 5rem", md: "3rem 3rem" },
        // border: "2px solid red",
      }}
    >
      <Box
        sx={{
          width: "90%",
          marginInline: "auto",
          //   border: "2px solid red"
        }}
      >
        <Box sx={{ margin: "2rem 0 3rem 0", textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: { xs: "1rem", md: "1.8rem" },
              marginBottom: "0.5rem",
            }}
          >
            OUR POPULAR BAKERY PRODUCTS
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "0.8rem", md: "1.3rem" }, fontWeight: "100" }}
          >
            Check some of our best products and feel the great passion for food
          </Typography>
        </Box>

        <Grid
          container
          // spacing={2}
          justifyContent="space-between"
          columnSpacing={"90px"}
          sx={{}}
        >
          {data.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "right",
                
                }}
              >
                <Box
                  sx={{
                    //   border: "2px solid red",
                    boxShadow: "2px 1px 9px 0px rgba(0,0,0,0.75)",
                    padding: "1rem 0",
                    borderRadius: "20px",
                    // display: "flex",
                    // flexDirection: "column",

                    marginBottom: "6rem",
                    width: { xs: "100%", md: "90%" },

                    //   textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.4rem",
                      textAlign: "center",
                      fontWeight: "500",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.category}
                  </Typography>
                  <Box
                    component="img"
                    src={item.items.cake1.image}
                    alt="image"
                    sx={{
                      width: "100%",
                      objectFit: "cover",
                      marginRight: "0.5rem",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      fullWidth
                      LinkComponent="a"
                      href={RouteList.PRODUCTS}
                      sx={{
                        // backgroundColor: "#000080",
                        // color: "#fff",
                        borderRadius: "25px",
                        // fontSize: "1rem",
                        // textTransform: "initial",
                        marginTop: "1.5rem",
                        // width: "80%",
                        //   fontWeight: "500",
                        // padding: "0.6rem 2rem",
                      }}
                    >
                      View all
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
