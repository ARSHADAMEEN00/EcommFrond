import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      console.log(data);
      setProduct(data);
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <Link to="/">Go Back</Link>
      <div style={{ display: "flex" }}>
        <div>
          <img
            style={{ width: "400px", marginLeft: "50px" }}
            src={product.image}
            alt=""
          />
        </div>

        <div>
          <h2>{product.name}</h2>
          <Rating val={product.rating} text={`${product.numReviews} reviews`} />
          <h2>Price:${product.price}</h2>
          <p>{product.description}</p>
        </div>

        <div>
          <p>
            Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}{" "}
          </p>
          <button
            className="btn"
            type="button"
            disabled={product.countInStock === 0}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
