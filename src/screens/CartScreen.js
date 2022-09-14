import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  console.log(cart.cartItems +" >>>>>>>>>>>>>>>.");

  useEffect(() => {
    if (productId) {
        dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId])
  return <div>
    <h1>{cart.name}</h1>
  </div>;
};

export default CartScreen;