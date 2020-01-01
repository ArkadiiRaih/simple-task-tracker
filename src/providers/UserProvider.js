import React, { useState, useEffect, createContext } from "react";

import { auth, createUserProfileDocument } from "../firebase";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setUser({ uid: snapshot.id, ...snapshot.data() });
        });
      }
      setUser(userAuth);
    });
    return unsubscribeFromAuth;
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
