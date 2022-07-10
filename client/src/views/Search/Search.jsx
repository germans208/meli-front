import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import Breadcrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ItemList from "../../components/ItemList/ItemList";

const Search = () => {
  const [values, setValues] = useState({});
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get("search");

  const fetchAPI = async () => {
    const api = await fetch(`/api/items?search=${queryParams}`);
    const result = await api.json();

    setValues(result.items);
  };

  useEffect(() => {
    fetchAPI();
  }, [queryParams]);

  return (
    <div>
      <NavBar />
      <Breadcrumbs />

      <ItemList items={values} />
    </div>
  );
};

export default Search;
