import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import "./_notfound.scss";

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <div className="not-found">
        <p>Pagina no encontrada</p>
      </div>
    </div>
  );
};

export default NotFound;
