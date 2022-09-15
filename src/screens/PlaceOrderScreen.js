import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import FormContainer from "../components/FromContainer.js";
import { register } from "../actions/userActions";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { Link } from "react-router-dom";
import { createdOrder } from "../actions/orderActions";
import { useEffect } from "react";

const PlaceOrderScreen = ({history}) => {
    const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);

  const addDecimal = (num) => {
    return (Math.round(num * 100)/ 100).toFixed(2);
  }

  cart.itemsPrice = addDecimal(cart.cartItems.reduce((a, b) => a + b.price * b.qty, 0))
  cart.shippingPrice = addDecimal( cart.itemsPrice > 100 ? 0 : 20)
  cart.taxPrice = addDecimal(Number( 0.05 * cart.itemsPrice).toFixed(2))
  cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)


  const createOrder = useSelector(state => state.orderCreate)
  const {order, success, error} = createOrder;

  console.log(success);
  console.log(order.createdOrder._id);

  useEffect(() => {
    if (success) {
        history.push(`/order/${order.createdOrder._id}`)
    }
  }, [history, success])

  const placeOrderhandler = (e) => {
    dispatch(createdOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
  }))
  };

  console.log(cart.cartItems[0].name + ">>>>>>>>>>>>>>>>>>>>");
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />

      <div>
        <div>
          <ul>
            <li>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{" "}
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </li>

            <li>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong> {cart.paymentMethod}
              </p>
            </li>

            <li>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <h1>cart empty</h1>
              ) : (
                <div>
                  <div>
                    {cart.cartItems.map((item, index) => {
                      return (
                        <div
                          style={{
                            border: "1px solid",
                            margin: "10px",
                            width: "800px",
                          }}
                          className="flex-r"
                          key={index}
                        >
                          <img
                            style={{ width: "107px" }}
                            src={item.image}
                            alt=""
                          />
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>

                          <h2>
                            {item.qty} x ${item.price} = $
                            {item.price * item.qty}
                          </h2>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div>
          <div style={{ width: "400px", border: "1px solid" }}>
            <p>
              <h2>Order Summary</h2>
            </p>

            <p>
              <h3>Items</h3>
              <h3>${cart.itemsPrice}</h3>
            </p>

            <p>
              <h3>shipping</h3>
              <h3>${cart.shippingPrice}</h3>
            </p>

            <p>
              <h3>Tax</h3>
              <h3>${cart.taxPrice}</h3>
            </p>

            <p>
              <h3>Total</h3>
              <h3>${cart.totalPrice}</h3>
            </p>

            <div>
            {error ? <h1>{error}</h1> : '' }
              <button
                disabled={cart.cartItems === 0}
                onClick={placeOrderhandler}
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
