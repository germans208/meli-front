import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "../views/Home/Home";
import ProductList from "../views/Product/ProductList/ProductList";
import ProductItem from "../views/Product/ProductItem/ProductItem";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductList />} path="/items" />
        <Route element={<ProductItem />} path="/items/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
