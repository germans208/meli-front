import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const Detail = () => {
  const [values, setValues] = useState({});
  const [categories, setCategories] = useState([]);

  const {id} = useParams();

  const fetchAPI = async () => {
    const api = await fetch(`/api/items/${id}`);
    const result = await api.json();

    setValues(result.item);
    setCategories(result.categories);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <article>
      <NavBar />
      <Breadcrumbs categories={categories} />
      <ItemDetail item={values} />
    </article>
  );
};

export default Detail;
