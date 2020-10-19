import React from "react";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
import { store } from "./store/store";
import { rrfProps } from "./store/store";

import NavBar from "./Components/NavBar";
import SignUp from "./Components/auth/SignUp";
import SignIn from "./Components/auth/SignIn";
import Profile from "./Components/auth/Profile";
import Logout from "./Components/auth/Logout";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebsae.auth);
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children;
}

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <AuthIsLoaded>
            <ToastContainer />
            <NavBar />
            {/* <main className="container"> */}
            <Switch>
              <Route path="/register" component={SignUp} />
              <Route path="/login" component={SignIn} />
              <Route path="/profile" component={Profile} />
              <Route path="/logout" component={Logout} />
              <Route to="/" exact component={Home} />
            </Switch>
            {/* </main> */}
          </AuthIsLoaded>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
