import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "@reach/router";

import { signInWithGoogle, signOut } from "../firebase";
import UserContext from "../providers/UserContext";

const Authentication = () => {
  const [user, setUser] = useContext(UserContext);
  useEffect(() => {});

  const signUpWithEmailAndPassword = () => {};

  if (user) {
    return <Redirect to="/profile" noThrow />;
  }

  return (
    <div>
      <form style={{ paddingTop: "30px" }}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            required
            placeholder="enter your name"
          ></input>
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            required
            placeholder="enter your name"
          ></input>
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            required
            placeholder="enter your name"
          ></input>
        </label>
        <button onClick={signUpWithEmailAndPassword} type="submit">
          Sign up
        </button>
      </form>
      <button onClick={signInWithGoogle} style={{ margin: "30px" }}>
        SigninWithGoogle
      </button>
    </div>
  );
};

export default Authentication;
