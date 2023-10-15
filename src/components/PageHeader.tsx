import { Typography } from "@mui/material";
import { Colors } from "../constants/colors";

interface PageHeaderProps {
    text: string;
  }
  
  const PageHeader: React.FC<PageHeaderProps> = ({ text }) => {
  return (
    <Typography
      variant="h5"
      sx={{
        backgroundColor: Colors.Secondary,
        padding: "1rem 0",
        textAlign: "center",
      }}
    >
      {text}
    </Typography>
  );
};

export default PageHeader;
