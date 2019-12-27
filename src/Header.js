import React, { useContext } from "react";
import { Link } from "@reach/router";
import Diagonal from "./Diagonal";

import UserContext from "./UserContext";

const Header = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <header className="header">
      <div className="header__inner">
        <Link className="nav__link" to="/">
          Home
        </Link>
        <Link className="nav__link" to="/boards">
          Boards
        </Link>
        {user ? (
          <Link className="nav__link" to="/profile">
            My account
          </Link>
        ) : (
          <Link className="nav__link" to="/auth">
            Auth
          </Link>
        )}
      </div>
      <Diagonal />
    </header>
  );
};

export default Header;
