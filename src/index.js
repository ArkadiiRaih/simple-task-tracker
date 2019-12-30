import React from "react";
import { render } from "react-dom";

import App from "./components/App"; //eslint-disable-line
import UserProvider from "./providers/UserProvider";

render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
