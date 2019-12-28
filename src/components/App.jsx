import React, { useState, useEffect, useLayoutEffect } from "react";
import { Router } from "@reach/router";

import Lending from "./Lending";
import Boards from "./Boards";
import Authentication from "./Authentication";
import Header from "./Header";
import UserContext from "../providers/UserContext";
import Profile from "./Profile";

// import { auth } from "../firebase";

const App = () => {
  const [user, setUser] = useState({
    displayName: "Arkadio Raih",
    email: "ArkadioRaih@yandex.ru",
    photoURL: ""
  });

  // useLayoutEffect(() => {
  //   // eslint-disable-next-line
  //   const unsubscribeFromAuth = auth.onAuthStateChanged(firebaseUser => {
  //     setUser(firebaseUser);
  //   });
  //   return unsubscribeFromAuth;
  // });

  return (
    <React.StrictMode>
      <UserContext.Provider value={[user, setUser]}>
        <Header />
        <main className="container">
          <Router>
            <Lending path="/" />
            <Boards path="/boards" />
            <Authentication path="/auth" />
            <Profile path="/profile" />
          </Router>
        </main>
      </UserContext.Provider>
    </React.StrictMode>
  );
};

export default App;
