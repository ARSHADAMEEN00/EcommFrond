import React from "react";
import Rating from './Rating'
import {Link} from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div className="flex" style={{ display: "flex" }}>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} style={{ width: "200px" }} alt="" />
      </Link>
      <div>
        <Link href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
      </div>

      <div>
      <Rating val={product.rating} text={`${product.numReviews} reviews`} />
      </div>

      <div>
        <h3>${product.price}</h3>
      </div>
    </div>
  );
};

export default Product;
