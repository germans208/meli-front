import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ItemList from "../../components/ItemList/ItemList";

import "../../styles/main.scss";

const Search = () => {
  const [values, setValues] = useState({});
  const [categories, setCategories] = useState({});

  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get("search");

  const fetchAPI = async () => {
    const api = await fetch(`/api/items?search=${queryParams}`);
    const result = await api.json();

    setValues(result.items);
    setCategories(result.categories);
  };

  useEffect(() => {
    fetchAPI();
  }, [queryParams]);

  return (
    <main>
      <NavBar />
      <div className="item-container">
        <Breadcrumbs categories={categories} />
        <ItemList items={values} />
      </div>
    </main>
  );
};

export default Search;
