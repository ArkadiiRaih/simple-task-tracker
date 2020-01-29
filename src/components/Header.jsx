import React, { useContext, Fragment, useState } from "react";
import { Link } from "@reach/router";

import "./style/header.scss";

import { signOut } from "../firebase";
import { UserContext } from "../providers/UserProvider";

const Header = () => {
  const user = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <header className="header header_sticky">
      <div className={`nav nav_active ${show ? "nav_show" : ""}`}>
        <Link className="nav__logo" to="#">
          LOGO
        </Link>
        <button className="nav__link nav__toggler" onClick={handleClick}>
          Menu
        </button>
        <div className="nav__collapse" onClick={handleClick}>
          <Link className="nav__link" to="/">
            Boards
          </Link>
          {user ? (
            <Fragment>
              <Link className="nav__link" to={"/profile"}>
                My account
              </Link>
              <Link className="nav__link" onClick={signOut} to="/">
                Log Out
              </Link>
            </Fragment>
          ) : (
            <Link className="nav__link" to="/auth">
              Auth
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
