import React from "react";

import Button from "../Button/Button";
import {currencyFormatter} from "../../utils/functions";
import "./styles.scss";

const ItemDetail = ({item}) => {
  if (Object.keys(item).length === 0) return <></>;

  const symbol = item.price.symbol || "$";
  const price = currencyFormatter(item.price.amount, symbol);

  return (
    <article className="item-item-details">
      <div className="item-grid">
        <div className="item-column-picture">
          <div>
            <img alt={item.title} src={item.picture} />
          </div>
        </div>

        <div className="item-column-details">
          <div>
            <div className="item-conditions-and-sold-quantity">
              {item.condition} - {item.sold_quantity} vendidos
            </div>
            <h1>{item.title}</h1>
            <div className="item-price">
              {price}
              <sup>{item.price.decimals}</sup>
            </div>

            <Button />
          </div>
        </div>
      </div>

      <div className="item-description">
        <h2>Descripción del producto</h2>
        <div>{item.description}</div>
      </div>
    </article>
  );
};

export default ItemDetail;
