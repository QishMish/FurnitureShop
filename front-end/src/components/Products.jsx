import React, { useState } from "react";
import "../styles/Products.css";
import FilterPanel from "./FilterPanel";
import ProductItem from "./ProductItem";
import { useGlobalContext } from "../context/AppContext";

function Products() {
  const { products } = useGlobalContext();
  const { loading, data, error } = products;
  console.log(data);
  return (
    <div className="products">
      <FilterPanel />
      <div className="products-info">Showing 1–14 of 27 results</div>
      <div className="product-grid" >
        {data.map((product, index) => {
          return <ProductItem key={index} product={product}/>;
        })}
      </div>
      <div className="product-pagination">test</div>
    </div>
  );
}

export default Products;
