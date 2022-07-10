import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./_navBar.scss";

import ImageSearchMeli from "../../assets/search-meli.png";
import Logo from "../../assets/logo.svg";

const NavBar = () => {
  const [value, setValue] = useState("");
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 2) {
      navigate(`/items?search=${value}`);
    }
  };

  return (
    <div>
      <header className="nav-header" role="banner">
        <div className="nav-bounds">
          <a className="nav-logo" href="/">
            <img alt="mercado libre" src={Logo} title="logo" />
          </a>

          <form className="nav-search" onSubmit={handleSubmit}>
            <input
              autoFocus
              className="nav-search-input"
              placeholder="Nunca dejes de buscar"
              type="text"
              onChange={handleInputChange}
            />

            <button className="nav-search-btn" type="submit">
              <img src={ImageSearchMeli} />
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
