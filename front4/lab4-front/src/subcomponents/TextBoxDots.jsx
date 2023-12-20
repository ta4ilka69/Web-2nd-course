import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonDots from "../subcomponents/ButtonDots.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Alerts } from "../subcomponents/Alerts";
import { validateInputs } from "../subcomponents/DotInputChecker.jsx";

const TextboxDots = () => {
  const user = useSelector((state) => state.user);
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [r, setR] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validateInputs(x, y, r, setError)) {
        return;
      }
      console.log(x, y, r, user.user.token);
      const response = await fetch("http://localhost:6969/new-dot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ x: parseFloat(x.replace(",",".")), y: parseFloat(y.replace(",",".")), r: parseFloat(r.replace(",",".")), token: user.user.token }),
      });
      if (response.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      className="form"
    >
      <div className="inputC inputColumn">
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
      {error && <Alerts message={error} />}
      <ButtonDots handle={handleSubmit} />
    </Box>
  );
};

export default TextboxDots;
