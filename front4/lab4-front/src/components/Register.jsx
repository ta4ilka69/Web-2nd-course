import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import TextboxRegister from "../subcomponents/TextboxRegister";
import ButtonReg from "../subcomponents/ButtonReg";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:6969/register/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: username,
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        // Registration successful
        console.log("Registration successful");
      } else {
        // Registration failed
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
      >
        <div className="inputColumn">
          <TextboxRegister
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
          />
          <ButtonReg />
        </div>
      </form>
    </div>
  );
};
export default Register;
