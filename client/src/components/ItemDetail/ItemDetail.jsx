import React from "react";

import Button from "../Button/Button";
import {currencyFormatter} from "../../utils/functions";
import "./_itemdetail.scss";

const ItemDetail = ({item}) => {
  if (Object.keys(item).length === 0) return <></>;

  const symbol = item.price.symbol || "$";
  const price = currencyFormatter(item.price.amount, symbol);

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <section className="item-detail-information">
          <div className="item-detail-image-container">
            <img alt="" className="item-detail-image" src={item.picture} />
          </div>
        </section>

        <section className="item-detail-checkout">
          <div className="item-detail-status">
            <span>{item.condition}</span>
            <span> - </span>
            <span>{item.sold_quantity}</span>
            <span> vendidos</span>
          </div>
          <h1 className="item-detail-title">{item.title}</h1>
          <div className="item-detail-price">
            <span className="item-detail-price-fraction">{price}</span>
            <span className="item-detail-price-decimals">{item.price.decimals}</span>
          </div>
          <Button />
        </section>
      </div>
    </div>
  );
};

export default ItemDetail;
