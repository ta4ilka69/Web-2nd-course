import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function ButtonDots({ handle }) {
  return (
    <Button
      type="submit"
      variant="contained"
      endIcon={<SendIcon />}
      onSubmit={handle}
    >
      Send it!
    </Button>
  );
}
