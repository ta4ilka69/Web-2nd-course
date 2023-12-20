import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { clearToken } from "../redux/slice";
import { useDispatch } from "react-redux";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  let text;
  if (location.pathname === "/") {
    text = "Log out";
  } else if (location.pathname === "/login") {
    text = "Sign up";
  } else {
    text = "Sign in";
  }
  const handleButtonClicked = () => {
    if (location.pathname === "/") {
      dispatch(clearToken());
      navigate("/login");
    } else if (location.pathname === "/login") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" position="static">
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Typography variant="h6" component="div" className="fontik">
            Artem Balin
          </Typography>
          <Typography variant="h6" component="div" className="fontik">
            №693
          </Typography>
          <div className="topButton">
            <Button variant="contained" onClick={handleButtonClicked}>
              {text}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
