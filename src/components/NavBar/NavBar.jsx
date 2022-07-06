import React from "react";
import "./_navBar.scss";

import ImageSearchMeli from "../../assets/search-meli.png";
import Logo from "../../assets/logo.svg";
const NavBar = () => {
  return (
    <div>
      <header className="nav-header" role="banner">
        <div className="nav-bounds">
          <a className="nav-logo" href="/">
            <img alt="logo" src={Logo} title="logo" />
          </a>

          <form className="nav-search">
            <input
              autoFocus
              className="nav-search-input"
              name="text"
              placeholder="Nunca dejes de buscar"
              type="text"
            />

            <button className="nav-search-btn" onClick={(e) => console.log(e)}>
              <img alt="" src={ImageSearchMeli} />
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
