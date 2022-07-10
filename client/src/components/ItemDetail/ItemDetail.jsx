import React from "react";

import Button from "../Button/Button";
import {currencyFormatter} from "../../utils/functions";
import "./_itemdetail.scss";

const ItemDetail = ({item}) => {
  if (Object.keys(item).length === 0) return <></>;

  //  const symbol = item.price.symbol || "$";
  const price = currencyFormatter(item.price.amount);

  return (
    <div className="product-container">
      <div className="product">
        <section className="product-information">
          <div className="product-image-container">
            <img alt="" className="product-image" src={item.picture} />
          </div>

          <div className="product-description">
            <h2 className="product-description-title">Descripción</h2>
            <p className="product-description-text">{item.description}</p>
          </div>
        </section>

        <section className="product-checkout">
          <div className="product-status">
            <span>{item.condition}</span>
            <span> - </span>
            <span>{item.sold_quantity}</span>
            <span> vendidos</span>
          </div>
          <h1 className="product-title">{item.title}</h1>
          <div className="product-price">
            {/* <span className="product-price-symbol">{symbol}</span> */}
            <span className="product-price-fraction">{price}</span>
            <span className="product-price-decimals">{item.price.decimals}</span>
          </div>
          <Button />
        </section>
      </div>
    </div>
  );
};

export default ItemDetail;
