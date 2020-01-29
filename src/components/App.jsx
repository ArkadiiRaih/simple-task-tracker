import React from "react";
import { Router, Location } from "@reach/router";
import Boards from "./Boards";
import Board from "./Board";
import Authentication from "./Authentication";
import Header from "./Header";
import Profile from "./Profile";

const App = () => {
  return (
    <React.StrictMode>
      <Location>{({ location }) => <Header location={location} />}</Location>
      <main className="container">
        <Router>
          <Boards path="/" />
          <Authentication path="/auth" />
          <Profile path="/profile" />
          <Board path="/boards/:boardId" />
        </Router>
      </main>
    </React.StrictMode>
  );
};

export default App;
