import React, { useState } from "react";
import TextboxLogin from "../subcomponents/TextboxLogin";
import ButtonLogin from "../subcomponents/ButtonLogin";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import Alerts from "../subcomponents/Alerts";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:6969/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful!");
        dispatch(setToken(data.token));
        navigate("/");
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputColumn">
          <TextboxLogin
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
          {error && <Alerts message={error} />}
          <ButtonLogin />
        </div>
      </form>
    </div>
  );
};

export default Login;
