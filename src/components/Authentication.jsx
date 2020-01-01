import React, { Fragment, useContext } from "react";
import { Redirect } from "@reach/router";

import { UserContext } from "../providers/UserProvider";
import SignIn from "./SingnIn";
import SignUp from "./SignUp";

const Authentication = () => {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <Fragment>
      <SignIn />
      <SignUp />
    </Fragment>
  );
};

export default Authentication;
