import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:6969/register/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: username,
          password: password,
          email: email,
        }),
      });
      if (response.ok) {
        // Registration successful
        console.log('Registration successful');
        
      } else {
        // Registration failed
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister();
      }}>
        
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;