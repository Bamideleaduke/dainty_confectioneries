import { Button } from "./shared/buttons/Buttons";
import { Box, Typography } from "@mui/material";

const Counter = (count: number) => {
  return (
    <Box>
      <Button>-</Button>
      <Typography>{count}</Typography>
      <Button>+</Button>
    </Box>
  );
};

export default Counter;
