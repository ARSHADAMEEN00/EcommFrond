import React from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productsActions.js";

const HomePage = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const {loading, error, products} = productList

  console.log(productList);

  useEffect(() => {
    dispatch(getProducts());
  },[productList]);

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;
