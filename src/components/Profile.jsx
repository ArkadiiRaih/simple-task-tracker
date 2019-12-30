import React, { useContext } from "react";
import { Redirect } from "@reach/router";
import "./style/profile.scss";

import { UserContext } from "../providers/UserProvider";

const Profile = () => {
  const user = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth" noThrow />;
  }
  return (
    <div className="w-70 p-t_m">
      <div className="grid profile">
        <img className="profile__image" src={user.photoURL} alt="avatar"></img>
        <div className="profile__description">
          <div className="text_primary">Login: &nbsp;{user.displayName}</div>
          <div className="text_primary">Email: &nbsp;{user.email}</div>
          <div className="text_primary">
            Created: &nbsp;{String(user.createdAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
