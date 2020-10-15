import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/auth/SignUp";
import SignIn from "./Components/auth/SignIn";
import Profile from './Components/auth/Profile';
import Logout from './Components/auth/Logout';
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={SignIn} />
            <Route path="/profile" component={Profile} />
            <Route path="/logout" component={Logout} />
            <Route to="/" exact component={Home} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebsae.auth
  }
}


export default connect(mapStateToProps)(App);
