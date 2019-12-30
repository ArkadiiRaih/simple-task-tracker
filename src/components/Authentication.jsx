import React, { useState, useContext } from "react";
import { Redirect } from "@reach/router";
import { isEmpty } from "lodash";

import { signInWithGoogle, createUserProfileDocument, auth } from "../firebase";
import { UserContext } from "../providers/UserProvider";

const Authentication = () => {
  const user = useContext(UserContext);
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

  if (!isEmpty(user)) {
    return <Redirect to="/profile" noThrow />;
  }

  return (
    <div>
      <form style={{ paddingTop: "30px" }}>
        <label htmlFor="name">
          <input
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
            type="password"
            name="password"
            required
            placeholder="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <button onClick={handleSubmit} type="submit">
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
