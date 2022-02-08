import React from "react";
import "../styles/Products.css";
import FilterPanel from "./FilterPanel";
import ProductItem from "./ProductItem";

function Products() {
  return (
    <div className="products">
      <FilterPanel />
      <div className="products-info">Showing 1–14 of 27 results</div>
      <div className="product-grid">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className="product-pagination">
          test
      </div>
    </div>
  );
}

export default Products;
