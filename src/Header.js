import React from "react";
import { Link } from "@reach/router";
import Diagonal from "./Diagonal";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link className="nav__link" to="/">
          Home
        </Link>
        <Link className="nav__link" to="/boards">
          Boards
        </Link>
        <Link className="nav__link" to="/auth">
          Auth
        </Link>
      </div>
      <Diagonal />
    </header>
  );
};

export default Header;
