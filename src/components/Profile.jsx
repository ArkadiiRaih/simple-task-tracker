import React, { useContext } from "react";
import { Redirect } from "@reach/router";
import "./style/profile.scss";
import moment from "moment";

import { UserContext } from "../providers/UserProvider";

const Profile = () => {
  const user = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth" noThrow />;
  }
  return (
    <div className="w-70 p-t_head">
      <div className="grid profile">
        <div className="profile__image_container">
          <img
            className="profile__image"
            src={user.photoURL}
            alt="avatar"
          ></img>
          <button className="input">Change Image</button>
        </div>
        <div className="profile__description">
          <div className="text_primary">Login: &nbsp;{user.displayName}</div>
          <div className="text_primary">Email: &nbsp;{user.email}</div>
          <div className="text_primary">
            Created: &nbsp;{moment(user.createdAt).calendar()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
