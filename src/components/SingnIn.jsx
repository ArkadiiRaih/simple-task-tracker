import React, { useState } from "react";
import { signInWithGoogle, signInWithEmailAndPassword } from "../firebase";

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
    <div>
      <form onSubmit={handleSubmit} style={{ paddingTop: "30px" }}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
      <button onClick={signInWithGoogle} style={{ margin: "30px" }}>
        SigninWithGoogle
      </button>
    </div>
  );
};

export default SignIn;
