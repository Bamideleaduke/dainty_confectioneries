import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { currencyConverter } from "../utils/helper/Function";
import { useAppDispatch } from "../utils/hooks/redux-hook";
import { selectCake } from "../utils/redux/features/cakeSlice";
import { CakeItem } from "../utils/types/ProductDescriptionTypes";



export interface Item {
  category: string;
  items: Record<string, CakeItem>;
}

const ProductItem = ({ data }: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleItemClick = (itemId: string) => {
    const selectedCakeItem = data
      .map((item: Item) => Object.values(item.items))
      .flat()
      .find((cake: any) => cake.id === itemId);

    if (selectedCakeItem) {
      dispatch(selectCake(selectedCakeItem));
    }
    navigate(`/product-description/${itemId}`);
  };
  return (
    <Box>
      {data.map((item: Item) => {
        return (
          <Box key={item.category}>
            <Typography
              sx={{
                backgroundColor: "#FAE0EE",
                display: "inline-block",
                padding: "0.5rem 2rem",
                marginBottom: "2rem",
                fontWeight: "600",
              }}
            >
              {item.category}
            </Typography>
            <Grid
              container
              justifyContent="space-between"
              sx={{ marginBottom: "2rem", columnGap: { sm: 3 } }}
              // columnSpacing={"60px"}
              // columnGap={xs?3:3}
            >
              {Object.keys(item.items).map(
                (cakeName: string, index: number) => {
                  const cake = item.items[cakeName];
                  return (
                    <Grid
                      item
                      key={cakeName}
                      xs={5.5}
                      sm={3.5}
                      md={2}
                      sx={{
                        marginBottom: "3rem",
                        boxShadow: "0.6px 1px 5px 0px rgba(0,0,0,0.75)",
                        borderRadius: "0 0 10px 10px",
                      }}
                      onClick={() => {
                        handleItemClick(cake.id);
                      }}
                    >
                      <Box
                        component="img"
                        src={cake.image}
                        alt={cake.type}
                        sx={{
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <Box sx={{ textAlign: "center", padding: "0.7rem 0" }}>
                        <Typography variant="body1">{cake.type}</Typography>
                        <Typography variant="h5" sx={{ marginTop: "1rem" }}>
                          {currencyConverter(cake.price)}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default ProductItem;
