import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom/BrowserRouter";
import Login from "../components/Login";
import Register from "../components/Register";
import Dots from "../components/Dots";
const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Dots}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </Switch>
    </Router>
);

export default App;
