import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import FormContainer from "../components/FromContainer.js";
import { register } from "../actions/userActions";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = ({ history }) => {
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;

    if (!shippingAddress) {
        history.push('/shipping');
    }

    const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  };

  return (
    <FormContainer>
    <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <form onSubmit={submitHandler}>

        <div>
          <label htmlFor="name">Select method</label>
          <div style={{width: '200px', display: 'flex'}}>
          <label htmlFor="Paypal">Paypal</label>
          <input type="radio"  label="PayPal or Credit Card" id="PayPal" name="paymentMethod" value='PayPal' checked onChange={(e) => setPaymentMethod(e.target.value)} />
          </div>
        </div>

        <button style={{width: '200px'}} type="submit">continue</button>
      </form>
    </FormContainer>
  );
};

export default PaymentScreen;