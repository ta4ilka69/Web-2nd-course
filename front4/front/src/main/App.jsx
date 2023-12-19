import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Login from "../components/Login";
import Register from "../components/Register";
import Dots from "../components/Dots";

const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dots />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
);
export default App;
