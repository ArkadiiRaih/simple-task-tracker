import React from "react";
import { Router, Link } from "@reach/router";

import Lending from "./Lending";
import Boards from "./Boards";
import Authentication from "./Authentication";

const App = () => {
  return (
    <React.StrictMode>
      <header>
        <Link to="/"></Link>
        <Link to="/boards"></Link>
        <Link to="/auth"></Link>
      </header>
      <Router>
        <Lending path="/" />
        <Boards path="/boards" />
        <Authentication path="/auth" />
      </Router>
    </React.StrictMode>
  );
};

export default App;
