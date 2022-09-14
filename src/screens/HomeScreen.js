import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ margin: "20px" }} className="flex-r">
      {products.map((product) => {
        return (
          <div>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default HomeScreen;
