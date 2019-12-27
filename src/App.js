import React from "react";
import { Router } from "@reach/router";

import Lending from "./Lending";
import Boards from "./Boards";
import Authentication from "./Authentication";
import Header from "./Header";

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <main className="container">
        <Router>
          <Lending path="/" />
          <Boards path="/boards" />
          <Authentication path="/auth" />
        </Router>
      </main>
    </React.StrictMode>
  );
};

export default App;
