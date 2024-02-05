import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { currencyConverter } from "../../utils/helper/Function";
import Counter from "../Counter";
interface cartProp {
  selectedCake: any;
  amount: number;
  deliveryFee: number;
}
const CartContainer = ({ selectedCake, amount, deliveryFee }: cartProp) => {
  return (
    <Grid container>
      <Grid
        item
        md={3}
        sx={{
          marginInline: { xs: "auto", md: "initial" },
        }}
      >
        {" "}
        <Box sx={{ padding: { xs: "2rem", md: "initial" }, width: "200px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              boxShadow: "2px 1px 9px 0px rgba(0,0,0,0.75)",
            }}
          >
            <Box
              component="img"
              src={selectedCake?.image}
              alt={selectedCake?.type}
            />
            <Box sx={{ margin: { xs: "1rem 0 1rem 1rem" } }}>
              <Typography>{selectedCake.type}</Typography>
              <Typography sx={{ fontWeight: "Bold" }}>
                Price: {currencyConverter(selectedCake.price)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item md={9}>
        {" "}
        <Grid
          container
          justifyContent="space-between"
          //   alignItems={"right"}
          sx={{ columnGap: { xs: 1, md: "initial" } }}
        >
          <Grid
            item
            xs={3}
            md={3}
            sx={{
              marginTop: { xs: "1rem", md: "initial" },
            }}
          >
            Quantity
            <Counter />
          </Grid>
          <Grid
            item
            xs={4}
            md={3}
            sx={{
              marginTop: { xs: "1rem", md: "initial" },
            }}
          >
            Delivery Fee{" "}
            <Typography>{currencyConverter(deliveryFee)}</Typography>
          </Grid>
          <Grid
            item
            xs={3}
            md={3}
            sx={{
              marginTop: { xs: "1rem", md: "initial" },
            }}
          >
            Unit Price{" "}
            <Typography>{currencyConverter(selectedCake.price)}</Typography>
          </Grid>
          <Grid
            item
            xs={3}
            md={3}
            sx={{
              marginTop: { xs: "1rem", md: "initial" },
            }}
          >
            Total{" "}
            <Typography>
              {currencyConverter(amount * selectedCake.price)}
            </Typography>
          </Grid>
        </Grid>
        <TableContainer
          sx={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Table sx={{ width: 250 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 2 } }}
              >
                <TableCell>Sub total</TableCell>
                <TableCell align="right">
                  {" "}
                  {currencyConverter(amount * selectedCake.price + deliveryFee)}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 2 } }}
              >
                <TableCell component="th" scope="row">
                  Total
                </TableCell>
                <TableCell align="right">
                  {" "}
                  {currencyConverter(amount * selectedCake.price + deliveryFee)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default CartContainer;
