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
    <div>
      <h1 className="h1">Sign Up</h1>
      <form style={{ paddingTop: "30px" }}>
        <label htmlFor="name">
          <input
            className="input"
            type="text"
            name="displayName"
            required
            placeholder="name"
            value={displayName}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="email">
          <input
            className="input"
            type="email"
            name="email"
            required
            placeholder="email"
            value={email}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="password">
          <input
            className="input"
            type="password"
            name="password"
            required
            placeholder="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <button className="input" onClick={handleSubmit} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
