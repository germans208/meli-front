import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "../views/Home/Home";
import Search from "../views/Search/Search";
import Detail from "../views/Detail/Detail";
import NotFound from "../views/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route element={<NotFound />} path="*" />
        <Route element={<Search />} path="/items" />
        <Route element={<Detail />} path="/items/:id" />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
