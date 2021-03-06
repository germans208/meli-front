import React from "react";
import {Link} from "react-router-dom";

import "./styles.scss";
import ImgShipping from "../../assets/shipping.png";
import {currencyFormatter} from "../../utils/functions";

const Item = ({data}) => {
  const url = `/items/${data.id}`;

  const symbol = data.price.symbol || "$";
  const price = currencyFormatter(data.price.amount, symbol);

  return (
    <div>
      <li className="results-item">
        <div className="item-image-container">
          <Link to={url}>
            <img alt={data.title} className="item-image" src={data.picture} />
          </Link>
        </div>

        <div className="item-information">
          <div>
            <div className="item-price-shipping">
              <div className="item-price">
                <span className="item-price-fraction">{price}</span>
                <span className="item-price-decimals">{data.price.decimals}</span>
              </div>

              {data.free_shipping && (
                <div className="item-shipping-free">
                  <img alt="Free Shipping" src={ImgShipping} />
                </div>
              )}
            </div>

            <h2 className="item-title">
              <Link className="item-title-link" to={url}>
                {data.title}
              </Link>
            </h2>
          </div>

          <div className="item-condition">
            <span>{data.condition}</span>
          </div>
        </div>
      </li>
      <hr />
    </div>
  );
};

export default Item;
