import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Dots from "../components/Dots";
import Footer from "../main/Footer";
import Header from "../main/Header"

const router = createBrowserRouter([
    {
        path: "/",
        component: Dots,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    }
]);
const App = () => (
    <React.StrictMode>
        <Header/>
        <RouterProvider router={router} />
        <Footer/>
    </React.StrictMode>
);

export default App;
