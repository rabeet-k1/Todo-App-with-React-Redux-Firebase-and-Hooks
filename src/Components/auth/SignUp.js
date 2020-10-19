import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
import { store } from "../../store/store";

const SignUp = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [authError, setAuthError] = useState();
  const [auth, setAuth] = useState();

  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      setAuthError(state.auth.authError);
      setAuth(state.firebsae.auth);
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    store.dispatch(signUp({ email, password, firstName, lastName }));
    // e.currentTarget.reset();
  };

  if (auth?.uid) return <Redirect to="/" />;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          className="form-control"
          placeholder="Enter First name"
          onChange={e => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          className="form-control"
          placeholder="Enter Last name"
          onChange={e => setLastName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          className="form-control"
          placeholder="Enter Email"
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
          placeholder="Enter Password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-primary btn-block">Sign Up</button>
      <div className="red-text center">
        {authError ? <p>{authError}</p> : null}
      </div>
      <p className="forgot-password text-right">
        Already registered <Link to="">sign in?</Link>
      </p>
    </form>
  );
};

export default SignUp;
