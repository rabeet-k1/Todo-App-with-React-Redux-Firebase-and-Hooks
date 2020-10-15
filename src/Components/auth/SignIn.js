import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import firebase from "../../Config/firebaseConfig";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn({ email, password })
    e.currentTarget.reset();
  };

  const { authError, auth } = props;
  if (auth.uid) return <Redirect exact to="/" />
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            className="form-control"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            password={password}
            className="form-control"
            placeholder="Enter password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button className="btn btn-primary btn-block">Login</button>
        <div className="red-text center">
          {authError ? <p>{authError}</p> : null}
        </div>
        <p className="forgot-password text-right">
          Forgot <Link to="">password?</Link>
        </p>
      </form>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </React.Fragment>
  );

}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebsae.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
