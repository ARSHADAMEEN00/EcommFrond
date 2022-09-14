import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  console.log(cart.length + " >>>>>>>>>>>>>>>");

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  // const removeFromCartHandler = (id) => {
  //   // dispatch(removeFromCart(id))
  // }

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <div className="flex-r">
      {cart.length === 0 ? (
        <h1>CART EMPTY</h1>
      ) : (
        <div>
          {cart.map((item) => {
            return (
              <div key={item.product}>
                <div className="flex-r">
                  <img src={item.image} style={{ width: "200px" }} alt="" />
                  <div>
                    <Link to={`/product/${item.product}}`}>{item.name}</Link>
                    <p>price: {item.price}</p>
                    <select
                      name=""
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                      id=""
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={() => {
                        dispatch(removeFromCart(item.product));
                        history.push('/cart')
                      }}
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div>
        <h2>Subtotal ({cart.reduce((a, b) => a + b.qty, 0)}) items</h2>
        <p>${cart.reduce((a, b) => a + b.qty * b.price, 0).toFixed(2)}</p>
        <button disabled={cart.length === 0} onClick={checkoutHandler}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
