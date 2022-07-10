import React, {useEffect, useState} from "react";

import NavBar from "../../../components/NavBar/NavBar";
import Breadcrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import Item from "../../../components/Item/Item";

const ProductoList = () => {
  const [state, setState] = useState({});

  const fetchAPI = async () => {
    const api = await fetch("/api/items?search=televisores");
    const result = await api.json();

    setState(result);
    console.log(result);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <NavBar />
      <Breadcrumbs />

      <Item />
    </div>
  );
};

export default ProductoList;
