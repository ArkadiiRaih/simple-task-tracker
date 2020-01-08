import React, { useState } from "react";
import {
  signInWithGoogle,
  signInWithEmailAndPassword,
  signInWithGithub
} from "../firebase";

import "./style/login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ paddingTop: "30px" }}
      className="login-form card"
    >
      <div className="card__header">
        <h1 className="h1 login-form__title">Sign In</h1>
      </div>
      <div className="card__body">
        <input
          className="input input_w_100 login-form__input"
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          className="input input_w_100 login-form__input"
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <button className="input input_w_100 login-form__input" type="submit">
          Sign In
        </button>
        <button
          type="button"
          className="input input_w_100"
          onClick={signInWithGoogle}
        >
          <FontAwesomeIcon icon={faGoogle} />
          {"  "}
          Signin With Google
        </button>
        <button
          type="button"
          className="input input_w_100"
          onClick={signInWithGithub}
        >
          <FontAwesomeIcon icon={faGithub} />
          {"  "}
          Signin With Github
        </button>
      </div>
    </form>
  );
};

export default SignIn;
