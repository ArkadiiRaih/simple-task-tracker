import React, { useContext } from "react";
import { Link } from "@reach/router";
import { isEmpty } from "lodash";

import "./style/header.scss";

import Diagonal from "./Diagonal";
import { signOut } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import { makePathFromString } from "../utilities";

const Header = () => {
  const user = useContext(UserContext);

  return (
    <header className="header">
      <div className="header__inner">
        <Link className="nav__link" to="/">
          Home
        </Link>
        <Link className="nav__link" to="/boards">
          Boards
        </Link>
        {!isEmpty(user) ? (
          <>
            <Link
              className="nav__link"
              to={`/${makePathFromString(user.displayName)}}`}
            >
              My account
            </Link>
            <Link className="nav__link" onClick={signOut} to="/">
              Log Out
            </Link>
          </>
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
