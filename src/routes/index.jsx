import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Home from "../views/Home/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes;
