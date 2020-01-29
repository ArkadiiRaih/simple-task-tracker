import React, { useContext, useRef } from "react";
import { Redirect } from "@reach/router";
import "./style/profile.scss";
import moment from "moment";

import { UserContext } from "../providers/UserProvider";
import { firestore, storage } from "../firebase";

const Profile = () => {
  const inputFile = useRef(null);
  const user = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth" noThrow />;
  }

  const getFile = () => {
    return inputFile && inputFile.current.files[0];
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (getFile()) {
      const userRef = firestore.doc(`/users/${user.uid}`);
      storage
        .ref()
        .child("user-profiles")
        .child(user.uid)
        .put(getFile())
        .then(response => response.ref.getDownloadURL())
        .then(photoURL => userRef.update({ photoURL }));
    }
  };

  return (
    <div className="w-70 p-t_head">
      <div className="grid profile">
        <div className="profile__image_container">
          <img
            className="profile__image"
            src={user.photoURL}
            alt="avatar"
          ></img>
          <form onSubmit={handleSubmit}>
            <input type="file" name="file" ref={inputFile} />
            <button type="submit">Change Profile Image</button>
          </form>
        </div>
        <div className="profile__description">
          <div className="text_primary">Login: &nbsp;{user.displayName}</div>
          <div className="text_primary">Email: &nbsp;{user.email}</div>
          <div className="text_primary">
            Created: &nbsp;{moment().calendar(user.createdAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
