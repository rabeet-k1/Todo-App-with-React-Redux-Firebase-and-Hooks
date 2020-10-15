// import React, { Component } from "react";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { signUp } from '../../store/actions/authActions';

const SignUp = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // state = {
  //   email: "",
  //   password: "",
  //   firstName: "",
  //   lastName: "",
  // };

  // handleChange = (e) => {
  //   this.setState({
  //     [e.currentTarget.name]: e.target.value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signUp({ email, password, firstName, lastName });
    e.currentTarget.reset();
  };

  const { auth, authError } = props;
  if (auth.uid) return <Redirect to="/" />

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
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebsae.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
