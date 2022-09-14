import React, { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/productAction";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const {loading, error, products} = productList

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);


  return (
    <div style={{ margin: "20px", }} className="flex-r">

    {loading ? <Loader /> : '' }
      {products?.map((product) => {
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
