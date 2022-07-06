import React from "react";
import "./_navbar.scss";

const NavBar = () => {
  return (
    <div>
      <header className="nav-header" role="banner">
        <div className="nav-bounds">
          <a className="nav-logo" href="/" />

          <form className="nav-search">
            <input
              autoFocus
              className="nav-search-input"
              name="text"
              placeholder="Nunca dejes de buscar"
              type="text"
            />

            <button className="nav-search-btn" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
