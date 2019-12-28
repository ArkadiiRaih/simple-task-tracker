import React, { useContext } from "react";
import { Redirect } from "@reach/router";

import { signOut } from "../firebase";
import UserContext from "../providers/UserContext";

const Profile = () => {
  const [user, setUser] = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth" noThrow />;
  }
  return (
    <div>
      <h1>Profile page</h1>
      <img src={user.photoURL} alt="avatar"></img>
      <div>{user.displayName}</div>
      <div>{user.email}</div>
      <button onClick={signOut} style={{ margin: "30px" }}>
        SignOut
      </button>
    </div>
  );
};

export default Profile;
