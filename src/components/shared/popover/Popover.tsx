import * as React from "react";
import Popover from "@mui/material/Popover";
import { Box } from "@mui/material";
import { Button } from "../buttons/Buttons";

interface PopoverProps {
  content: React.ReactNode;
  btnContent: string | React.ReactNode;
}
export default function BasicPopover(props: PopoverProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        variant="text"
        aria-describedby={id}
        // variant="contained"
        onClick={handleClick}
      >
        {props.btnContent}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 2 }}>{props.content}</Box>
      </Popover>
    </div>
  );
}
