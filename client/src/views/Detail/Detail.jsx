import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

import "../../styles/main.scss";
import Spinner from "../../components/Spinner/Spinner";
const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({});
  const [categories, setCategories] = useState([]);

  const {id} = useParams();

  const fetchAPI = async () => {
    try {
      const api = await fetch(`/api/items/${id}`);
      const result = await api.json();

      setValues(result.item);
      setCategories(result.categories);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (loading) return <Spinner />;

  return (
    <main>
      <NavBar />
      <div className="item-container">
        <Breadcrumbs categories={categories} />
        <ItemDetail item={values} />
      </div>
    </main>
  );
};

export default Detail;
