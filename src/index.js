import React from "react";
import { render } from "react-dom";

import App from "./components/App"; //eslint-disable-line
import UserProvider from "./providers/UserProvider";
import BoardsProvider from "./providers/BoardsProvider";

render(
  <UserProvider>
    <BoardsProvider>
      <App />
    </BoardsProvider>
  </UserProvider>,
  document.getElementById("root")
);
