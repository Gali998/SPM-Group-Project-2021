import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
import ContactUs from './ContactUs';
import LoginCardUI from './components/LoginCardUI';
import RegisterCardUI from './components/RegisterCard';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/popper';

class App extends Component {
    render () {
        return (
            // <Provider>
                <Router>
                    <div className="App">
                        <Switch>
                            <Route exact path={"/"}>
                                <ContactUs/>
                            </Route>
                            <Route exact path="/login-ui" component={LoginCardUI}/>
                            <Route exact path = "/register-ui" component={RegisterCardUI}/>
                            
                        </Switch>
                    </div>
                </Router>
            // </Provider>
        );
    }
}

export default App;
