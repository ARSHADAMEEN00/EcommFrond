import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import FormContainer from "../components/FromContainer.js";
import { register } from "../actions/userActions";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = ({ history }) => {
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;

    const dispatch = useDispatch();

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({address,city,postalCode, country}))
    history.push('/payment')
  };

  return (
    <FormContainer>
    <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Adress</label>
          <input
            type="text"
            value={address}
            placeholder="Name"
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="name">City</label>
          <input
            type="text"
            value={city}
            placeholder="City"
            required
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="name">Postal</label>
          <input
            type="text"
            value={postalCode}
            placeholder="Name"
            required
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="name">Country</label>
          <input
            type="text"
            value={country}
            placeholder="Name"
            required
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>

        <button type="submit">continue</button>
      </form>
    </FormContainer>
  );
};

export default ShippingScreen;
