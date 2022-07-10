import React from "react";
import {Link} from "react-router-dom";

import ImgTest from "../../assets/test.jpeg";

import "./_item.scss";

const ItemList = () => {
  return (
    <article className="search-results-container">
      <ol className="search-results">
        <li className="results-item">
          <div className="item-image-container">
            <a className="item-image-link">
              <img alt="" className="item-image" src={ImgTest} />
            </a>
          </div>

          <div className="item-information">
            <div>
              <div className="item-price-shipping">
                <div className="item-price">
                  <span className="item-price-symbol">asdasdasd</span>
                  <span className="item-price-fraction">10</span>
                  <span className="item-price-decimals">10</span>
                </div>

                <div className="item-shipping-free">
                  <img alt="Free Shipping" src="" />
                </div>
              </div>

              <h2 className="item-title">
                <a className="item-title-link">{"product.title"}</a>
              </h2>
            </div>

            <div className="item-condition">
              <span>{"this.formatMessage(product.condition)"}</span>
            </div>
          </div>
        </li>
      </ol>
    </article>
  );
};

export default ItemList;
