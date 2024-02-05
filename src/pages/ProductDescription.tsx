import { Box, Grid, Typography } from "@mui/material";
import { data } from "../resources/Data";
import CustomizationForm from "../components/CustomizationForm/CustomizationForm";
import RelatedProducts from "../components/RelatedProducts";
import CakeDescription from "../components/CakeDescription";
import { useParams } from "react-router-dom";
import { CakeProps } from "../utils/types/ProductDescriptionTypes";
import PageHeader from "../components/PageHeader";
import { useAppSelector } from "../utils/hooks/redux-hook";

const ProductDescription: React.FC = () => {
  const { id } = useParams();
  const selectedCake = useAppSelector((state) => state.cakeData.selectedCake);
 
  if (!id) {
    return <Typography>No ID provided</Typography>;
  }
  const cakeData = data.find((category) =>
    Object.values(category.items).find((item) => item.id === id)
  );
 
  
  if (!cakeData) {
    return <Typography>Cake not found</Typography>;
  }
  const cake: CakeProps[] = [cakeData];

  return (
    <Box
      sx={{
        paddingTop: "6rem",
        width: { xs: "90%", md: "85%" },
        marginInline: "auto",
      }}
    >
      <PageHeader text="Description and customization" />

      <CakeDescription data={cake} id={id} selected={selectedCake} />

      <Grid container justifyContent="space-between">
        <Grid item sm={6}>
          <Typography variant="h5">Customization Options</Typography>
          <Box sx={{ width: { sm: "80%", md: "60%" }, margin: "2rem 0" }}>
            <CustomizationForm data={[cakeData]} id={id} />
          </Box>
        </Grid>
        <Grid item sm={6}>
          <RelatedProducts data={cake} id={id} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDescription;
