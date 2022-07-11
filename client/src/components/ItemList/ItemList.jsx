import React from "react";

import Item from "../Item/Item";
import "./styles.scss";

const ItemList = ({items}) => {
  return (
    <section className="search-results-container">
      <ol className="search-results">
        {items.length === 0 ? (
          <div className="search-results-not-found">
            No hay publicaciones que coincidan con tu búsqueda.
          </div>
        ) : (
          Object.values(items).map((item, index) => <Item key={index} data={item} />)
        )}
      </ol>
    </section>
  );
};

export default ItemList;
