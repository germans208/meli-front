import React from "react";

import Item from "../Item/Item";
import "./_item.scss";

const ItemList = ({items}) => {
  return (
    <section>
      <div>
        {items.length === 0 ? (
          <div>Sin resultados. Prueba buscar otra cosa.</div>
        ) : (
          Object.values(items).map((item, index) => <Item key={index} data={item} />)
        )}
      </div>
    </section>
  );
};

export default ItemList;
