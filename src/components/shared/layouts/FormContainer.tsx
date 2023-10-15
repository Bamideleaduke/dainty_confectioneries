import { Box, Grid } from "@mui/material";
import { ReactNode } from "react";
import { Colors } from "../../../constants/colors";

const FormContainer: React.FC<{ children: ReactNode; minHeight?: string }> = ({
  children,
  minHeight,
}) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={3.5}
        sx={{
          height: "100vh",
          backgroundColor: Colors.BackgroundGray,
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box></Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8.5}
        sx={{
          display: { sm: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            minHeight: minHeight,
            width: {
              xs: "85%",
              md: "45%",
            },
            mx: "auto",
            paddingTop: { xs: "2rem", sm: "initial" },
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default FormContainer;
