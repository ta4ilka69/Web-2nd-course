import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TextboxLogin = ({ username, password, setUsername, setPassword }) => {
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
          label="Username"
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </Box>
  );
};

export default TextboxLogin;
