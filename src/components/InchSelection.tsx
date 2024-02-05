import { Box } from "@mui/material";
import { Button } from "./shared/buttons/Buttons";
import { useField, useFormikContext } from "formik";
import { Colors } from "../constants/colors";

interface InchSelectionProps {
  name: string;
  inches: number[];
}

export function InchSelection(props: InchSelectionProps) {
  const {  setFieldValue } = useFormikContext();
  const [field] = useField<number | null>(props.name);
  const handleInchClick = (inch: number) => {
    setFieldValue(props.name, field.value === inch ? null : inch);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `0.25px solid ${Colors.Grundge}`,
        padding: "0.3rem 0",
      }}
    >
      {props.inches.map((inch) => (
        <Button
          name={props.name}
          key={inch}
          sx={{ padding: "0", minWidth: "30px", margin: "0 0.8rem",  }}
          variant={field.value === inch ? "contained" : "outlined"}
          onClick={() => handleInchClick(inch)}
          value={inch}
        >
          {inch}"
        </Button>
      ))}
    </Box>
  );
}
