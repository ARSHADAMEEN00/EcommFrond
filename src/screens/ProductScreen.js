import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listProductDetails } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import Loader from "../components/Loader";

const ProductScreen = ({ history, match }) => {

  const [qty, setQty] = useState(1)
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const {loading, error, product} = productDetails
  console.log(product);

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCardHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  return (
    <div>
      <Link to="/">Go Back</Link>

      {loading ? <Loader /> : (<div style={{ display: "flex" }}>
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
          {product.countInStock > 0 && (
            <div>
              <select name="" value={qty} onChange={(e) => setQty(e.target.value)} id="">
               {[...Array(product.countInStock).keys()].map(x => (
                  <option key={x + 1} value={x+1} >
                    {x+1}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            className="btn"
            type="button"
            disabled={product.countInStock === 0}
            onClick={addToCardHandler}
          >
            Add to cart
          </button>
        </div>
      </div>)}

      
    </div>
  );
};

export default ProductScreen;
