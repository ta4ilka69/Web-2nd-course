import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Login from "../components/Login";
import Register from "../components/Register";
import Dots from "../components/Dots";
import ProtectedRoute from "./ProtectedRoute";
import Unprotected from "./Unprotected";

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dots />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <Unprotected>
              <Login />
            </Unprotected>
          }
        />
        <Route
          path="/register"
          element={
            <Unprotected>
              <Register/>
            </Unprotected>
          }
        />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
);
export default App;
