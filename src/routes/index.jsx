import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "../views/Home/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
