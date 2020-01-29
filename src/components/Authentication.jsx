import React, { useContext, useEffect } from "react";

import SignIn from "./SingnIn";
import SignUp from "./SignUp";
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";

const Authentication = () => {
  const user = useContext(UserContext);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, user);
  return (
    <div className="w-70 p-t_head auth-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
