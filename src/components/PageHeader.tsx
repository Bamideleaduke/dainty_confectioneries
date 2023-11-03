import { Box, Typography } from "@mui/material";
import { Colors } from "../constants/colors";

interface PageHeaderProps {
  text: string;
  subText?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ text, subText }) => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.Secondary,
        padding: "1rem 0",
        textAlign: "center",
      }}
    >
      <Typography variant="h5">{text}</Typography>
      <Typography>{subText}</Typography>
    </Box>
  );
};

export default PageHeader;
