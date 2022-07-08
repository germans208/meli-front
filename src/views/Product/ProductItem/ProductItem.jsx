import React from "react";

import NavBar from "../../../components/NavBar/NavBar";
import Breadcrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import ItemDetail from "../../../components/ItemDetail/ItemDetail";

const ProductItem = () => {
  return (
    <article>
      <NavBar />
      <Breadcrumbs />
      <ItemDetail />
    </article>
  );
};

export default ProductItem;
