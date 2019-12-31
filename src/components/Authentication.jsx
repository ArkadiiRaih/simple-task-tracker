import React, { Fragment, useContext } from "react";
import { Redirect } from "@reach/router";
import { isEmpty } from "lodash";

import { UserContext } from "../providers/UserProvider";
import SignIn from "./SingnIn";
import SignUp from "./SignUp";

const Authentication = () => {
  const user = useContext(UserContext);

  if (!isEmpty(user)) {
    return <Redirect to="/profile" noThrow />;
  }

  return (
    <Fragment>
      <SignIn />
      <SignUp />
    </Fragment>
  );
};

export default Authentication;
