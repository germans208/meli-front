import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import "./styles.scss";

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <div className="not-found">
        <p>Parece que esta página no existe</p>
      </div>
    </div>
  );
};

export default NotFound;
