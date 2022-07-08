import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "../views/Home/Home";
import ProductList from "../views/Product/ProductList/ProductList";
import ProductItem from "../views/Product/ProductItem/ProductItem";
import NotFound from "../views/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route element={<NotFound />} path="*" />
        <Route element={<ProductList />} path="/items" />
        <Route element={<ProductItem />} path="/items/10" />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
