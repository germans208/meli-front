import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import Breadcrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const Detail = () => {
  const [values, setValues] = useState({});
  const {id} = useParams();

  const fetchAPI = async () => {
    const api = await fetch(`/api/items/${id}`);
    const result = await api.json();

    setValues(result.item);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <article>
      <NavBar />
      <Breadcrumbs />
      <ItemDetail item={values} />
    </article>
  );
};

export default Detail;
