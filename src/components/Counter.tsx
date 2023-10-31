import { Button } from "./shared/buttons/Buttons";
import { Box, Typography } from "@mui/material";


const Counter = () => {
 

  return (
    <Box>
      <Button>-</Button>
      <Typography>{amount}</Typography>
      <Button>+</Button>
    </Box>
  );
};

export default Counter;
