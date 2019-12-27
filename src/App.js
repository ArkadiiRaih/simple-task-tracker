import React, { useState } from "react";
import { Router } from "@reach/router";

import Lending from "./Lending";
import Boards from "./Boards";
import Authentication from "./Authentication";
import Header from "./Header";
import UserContext from "./UserContext";
import Profile from "./Profile";

const App = () => {
  const user = useState(null);
  return (
    <React.StrictMode>
      <UserContext.Provider value={user}>
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
