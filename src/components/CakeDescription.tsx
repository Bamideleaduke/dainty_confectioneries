import { Box, Grid, Typography } from "@mui/material";
import { currencyConverter } from "../utils/helper/Function";
import { Button } from "./shared/buttons/Buttons";
import { DataProps } from "../utils/types/ProductDescriptionTypes";

const CakeDescription: React.FC<DataProps> = ({
  data,
  id,
  selected,
}: DataProps) => {
  console.log("cake Description", selected);
  return (
    <Box sx={{ margin: "4rem 0" }}>
      {Object.values(data[0].items).map((item) => {
        if (item.id === id) {
          return (
            <Grid
              container
              key={item.id}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} sm={5} md={3.5}>
                <Box sx={{ padding: { xs: "2rem", md: "initial" } }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "2px 1px 9px 0px rgba(0,0,0,0.75)",
                      width: "300px",
                    }}
                  >
                    <Box component="img" src={item.image} alt={item.type} />
                    <Box sx={{ margin: { xs: "1rem 0 1rem 1rem" } }}>
                      <Typography>{item.type}</Typography>
                      <Typography sx={{ fontWeight: "Bold" }}>
                        Price: {currencyConverter(item.price)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={5} md={8}>
                <Box sx={{ marginLeft: { md: "3rem" } }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Cake Description
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      listStyleType: "none",
                      paddingInlineStart: "0",
                    }}
                  >
                    {Object.entries(item.description).map(
                      (data: string[], index: number) => {
                        return (
                          <Box
                            component="li"
                            key={index * 2}
                            sx={{ marginBottom: "0.5rem" }}
                          >
                            {data[0]} : {data[1]}
                          </Box>
                        );
                      }
                    )}
                    {/* <Box
                      sx={{
                        display: { sm: "flex" },
                        alignItems: "center",
                        justifyContent: { xs: "center", sm: "initial" },
                        marginTop: { xs: "1rem", sm: "2rem" },
                      }}
                    >
                      <Button>Add to cart</Button>
                    </Box> */}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          );
        }
        return null;
      })}
    </Box>
  );
};

export default CakeDescription;
