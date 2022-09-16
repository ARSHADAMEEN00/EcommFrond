import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import FormContainer from "../components/FromContainer.js";
import { register } from "../actions/userActions";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { Link } from "react-router-dom";
import { createOrder, getOrderDetails } from "../actions/orderActions";
import { useEffect } from "react";

const OrderScreen = ({history, match}) => {
    const dispatch = useDispatch()
  const orderDetails= useSelector(state => state.orderDetails)
  const {order, loading, error} = orderDetails;

console.log(order);
  useEffect(() => {
    if (!order || order.Id !== match.params.id) {
        dispatch(getOrderDetails(match.params.id))
    }
  
  }, [dispatch, match.params.id])

if (!loading) {
  order.itemsPrice = order?.orderItems.reduce((a,b) => a + b.price,0 )
}

  return (
    <div>
        {loading ? <Loader /> : <div>
    <h1>Order ID: {order?._id}</h1>
    <h3>user: {order.user.name}</h3>
    
    <div>
        <div>
          <ul>
            <li>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {order?.shippingAddress.address}, {order?.shippingAddress.city},{" "}
                {order?.shippingAddress.postalCode},{" "}
                {order?.shippingAddress.country}
              </p>
              {order.isDelivered ? <h2>Paid on {order.DeliveredAt}</h2> : <h2>Not Delivers</h2> }
            </li>

            <li>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong> {order?.paymentMethod}
              </p>
              {order.isPaid ? <h2>Paid on {order.paidAt}</h2> : <h2>Not paid</h2> }
            </li>

            <li>
              <h2>order Items</h2>
              {order?.orderItems.length === 0 ? (
                <h1>cart empty</h1>
              ) : (
                <div>
                  <div>
                    {order?.orderItems.map((item, index) => {
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
              <h3>${order?.itemsPrice}</h3>
            </p>

            <p>
              <h3>shipping</h3>
              <h3>${order?.shippingPrice}</h3>
            </p>

            <p>
              <h3>Tax</h3>
              <h3>${order?.taxPrice}</h3>
            </p>

            <p>
              <h3>Total</h3>
              <h3>${order?.totalPrice}</h3>
            </p>

            <div>
            {error ? <h1>{error}</h1> : '' }
             
            </div>
          </div>
        </div>
      </div>

        </div> }
    </div>
  )
};

export default OrderScreen
