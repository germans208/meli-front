import React from "react";

import Button from "../Button/Button";
import ImgTest from "../../assets/test.jpeg";

import "./_itemdetail.scss";
const ItemDetail = () => {
  return (
    <div className="product-container">
      <div className="product">
        <section className="product-information">
          <div className="product-image-container">
            <img alt="" className="product-image" src={ImgTest} />
          </div>

          <div className="product-description">
            <h2 className="product-description-title">Descripción</h2>
            <p className="product-description-text">{"Descripcion 1"}</p>
          </div>
        </section>

        <section className="product-checkout">
          <div className="product-status">
            <span>{"Nuevo"}</span>
            <span> - </span>
            <span>{"5"}</span>
            <span>vendidos</span>
          </div>
          <h1 className="product-title">{"Titulo 1"}</h1>
          <div className="product-price">
            <span className="product-price-symbol">{"$"}</span>
            <span className="product-price-fraction">{"100,16"}</span>
            <span className="product-price-decimals">{"1000,16"}</span>
          </div>
          <Button />
        </section>
      </div>
    </div>
  );
};

export default ItemDetail;
