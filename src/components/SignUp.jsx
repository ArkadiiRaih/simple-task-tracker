import React, { useState } from "react";

import "./style/input.scss";

import { createUserProfileDocument, auth } from "../firebase";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case "displayName":
        setDisplayName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }

    setDisplayName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form style={{ paddingTop: "30px" }} className="login-form card">
      <div className="card__header">
        <h1 className="h1 login-form__title">Sign Up</h1>
      </div>
      <div className="card__body">
        <input
          className="input input_w_100 login-form__input"
          type="text"
          name="displayName"
          required
          placeholder="name"
          value={displayName}
          onChange={handleChange}
        ></input>
        <input
          className="input input_w_100 login-form__input"
          type="email"
          name="email"
          required
          placeholder="email"
          value={email}
          onChange={handleChange}
        ></input>
        <input
          className="input input_w_100 login-form__input"
          type="password"
          name="password"
          required
          placeholder="password"
          value={password}
          onChange={handleChange}
        ></input>
        <button
          className="input input_w_100 login-form__input"
          onClick={handleSubmit}
          type="submit"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
