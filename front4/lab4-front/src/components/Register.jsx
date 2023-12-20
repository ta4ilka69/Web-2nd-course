import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextboxRegister from "../subcomponents/TextboxRegister";
import ButtonReg from "../subcomponents/ButtonReg";
import { Alerts, GoodAlerts } from "../subcomponents/Alerts";
import { validateInputs } from "../subcomponents/ValidationAuth";
import { hashPassword } from "../subcomponents/Hash";
import Header from "../main/Header";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [goodAlert, setGoodAlert] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!validateInputs(username, email, password, setError)) {
      return;
    }
    try {
      let hashed = await hashPassword(password);
      console.log(hashed);
      const response = await fetch("http://localhost:6969/register/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: username,
          email: email,
          password: hashed,
        }),
      });
      if (response.ok) {
        response.text().then((text) => setGoodAlert(text));
      } else {
        const data = await response.text();
        setError(data);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  return (
    <div>
      <Header />
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
          {goodAlert && <GoodAlerts message={goodAlert} />}
          {error && <Alerts message={error} />}
          <ButtonReg />
        </div>
      </form>
    </div>
  );
};
export default Register;
