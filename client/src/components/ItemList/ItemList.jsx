import React from "react";

import Item from "../Item/Item";
import "./_item.scss";

const ItemList = ({items}) => {
  return (
    <div className="search-results-container">
      <ol className="search-results">
        {items.length === 0 ? (
          <div>No hay publicaciones que coincidan con tu búsqueda.</div>
        ) : (
          Object.values(items).map((item, index) => <Item key={index} data={item} />)
        )}
      </ol>
    </div>
  );
};

export default ItemList;
