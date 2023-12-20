import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TextboxDots = ({ x,y,r, setX,setY, setR }) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="inputColumn">
        <TextField
          required
          id="outlined-required"
          label="X"
          defaultValue={x}
          onChange={(e) => setX(e.target.value)}
        />
         <TextField
          required
          id="outlined-required"
          label="Y"
          defaultValue={y}
          onChange={(e) => setY(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="R"
          defaultValue={r}
          onChange={(e) => setR(e.target.value)}
        />
      </div>
    </Box>
  );
};

export default TextboxDots;
