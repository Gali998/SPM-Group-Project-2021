import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import React, { Component } from 'react';
import Login from "./components/auth/Login";
import NotFound from "./components/layout/NotFound";
import { Provider } from "react-redux";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Register from "./components/auth/Register";
import UserRegister from "./components/auth/UserRegister";
import UserLogin from "./components/auth/UserLogin";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import LoginCardUI from "./components/LoginCardUI";
import RegisterCardUI from "./components/RegisterCard";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import SearchCars from "./components/pages/SearchCars";
import CarLanding from "./CarLanding";
import Home from './Home';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/popper';

import Admins from "./components/pages/Admins";
import Customer from "./components/pages/Customers";
import Reservations from "./components/pages/Reservations";
import Car from "./components/pages/Cars";
import PaymentReport from "./components/pages/PaymentReport";
import Employees from "./components/pages/Employees";
import Home from "./Home";
import {Collapse} from "@material-ui/core";

import UserDashboard from "./components/pages/UserDashboard";
import UserReservation from "./components/pages/UserReservation";

if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = "./login";
    }
}

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Switch>
                            <Route exact path={"/"}>
                                <Home />
                            </Route>
                            <Route exact path={"/contact-us"}>
                                <ContactUs/>
                            </Route>
                            <Route exact path={"/about-us"}>
                                <AboutUs/>
                            </Route>
                            <Route exact path={"/search-cars"}>
                                <SearchCars/>
                            </Route>

                            <Route exact path="/login-ui" component={LoginCardUI}/>
                            <Route exact path = "/register-ui" component={RegisterCardUI}/>
                            <Route exact path="/landing" component={CarLanding}/>

                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />

                            <Route exact path="/user-register" component={UserRegister} />
                            <Route exact path="/user-login" component={UserLogin} />
                            <Switch>
                                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                                <PrivateRoute exact path="/admins" component={Admins} />
                                <PrivateRoute exact path="/customers" component={Customer} />
                              

                                <PrivateRoute exact path="/reservations" component={Reservations} />
                                <PrivateRoute exact path="/cars" component={Car} />                                

                                <PrivateRoute exact path="/payment-report" component={PaymentReport} />
                                <PrivateRoute exact path="/employees" component={Employees} />
                                <PrivateRoute exact path="/userDashboard" component={UserDashboard} />
                                <PrivateRoute exact path="/userReservation" component={UserReservation} />

                            </Switch>


                            <Route exact path="*" component={NotFound} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;