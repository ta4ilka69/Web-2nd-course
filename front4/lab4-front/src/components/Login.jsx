import React, { useState } from "react";
import TextboxLogin from "../subcomponents/TextboxLogin";
import ButtonLogin from "../subcomponents/ButtonLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        window.location.replace("/");
        console.log("Login successful!");
      } else {
        const errorText = await response.text();
        console.error("Login failed:", errorText);
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
        <ButtonLogin />
        </div>
      </form>
    </div>
  );
};

export default Login;
