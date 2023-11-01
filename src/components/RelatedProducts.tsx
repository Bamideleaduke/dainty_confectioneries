import { Box, Grid, Typography } from "@mui/material";
import { currencyConverter } from "../utils/helper/Function";
import { DataProps } from "../utils/types/ProductDescriptionTypes";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/hooks/redux-hook";
import { selectCake } from "../utils/redux/features/cakeSlice";
import { Item } from "./ProductItem";

const RelatedProducts = ({ data, id }: DataProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedCake = useAppSelector((state) => state.cakeData.selectedCake);
  // console.log("selected cake", selectedCake);
  
  const handleItemClick = (itemId: string) => {
    const selectedCakeItem = data
    .map((item: Item) => Object.values(item.items))
    .flat()
    .find((cake: any) => cake.id === itemId);
    console.log("related prod",selectedCakeItem?.image)
  if (selectedCakeItem) {
    dispatch(selectCake(selectedCakeItem));
  }
    navigate(`/product-description/${itemId}`);
  };
  return (
    <Box sx={{ width: { xs: "80%", marginInline: "auto", sm: "initial" } }}>
      <Typography variant="h5">Related Products</Typography>
      <Grid
        container
        justifyContent="space-between"
        sx={{ margin: "2rem 0", columnGap: { sm: 1 } }}
      >
        {Object.entries(data[0].items)
          .slice(0, 6)
          .map((item) => {
            return (
              <Grid
                key={item[1].id}
                item
                    xs={12}
                    sm={5}
                md={5}
                onClick={() => handleItemClick(item[1].id)}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "2px 1px 9px 0px rgba(0,0,0,0.75)",
                    marginBottom: { xs: "3rem", md: "3rem" },
                  }}
                >
                  <Box
                    component="img"
                    src={item[1].image}
                    alt={item[1].type}
                    sx={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ margin: "1rem 0 1rem 1rem" }}>
                    <Typography>{item[1].type}</Typography>
                    <Typography sx={{ fontWeight: "Bold" }}>
                      Price: {currencyConverter(item[1].price)}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default RelatedProducts;
