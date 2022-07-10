import React from "react";

import Button from "../Button/Button";
import ImgTest from "../../assets/test.jpeg";

import "./_itemdetail.scss";
const ItemDetail = ({item}) => {
  console.log(item);

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
            <span>vendidos</span>
          </div>
          <h1 className="product-title">{item.title}</h1>
          <div className="product-price">
            {/* <span className="product-price-symbol">{item.price.currency}</span>
              <span className="product-price-fraction">{item.price.amount}</span>
              <span className="product-price-decimals">{item.price.decimals}</span> */}
          </div>
          <Button />
        </section>
      </div>
    </div>
  );
};

export default ItemDetail;
