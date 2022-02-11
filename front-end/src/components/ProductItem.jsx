import React, { useState, useRef, useEffect } from "react";
import "../styles/Product-item.css";
import Products from "./Products";

function ProductItem({ product }) {
  const { id, title, price, images, description, related_products, reviews } =
    product;
  const [span, setSpan] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener("load", setSpans);
  }, []);

  function setSpans() {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpan(spans);
  }
  console.log(span);

  console.log(span);
  return (
    <div className="product-item" style={{ gridRowEnd: `span ${span}` }}>
      <div className="image-container" style={{ gridRowEnd: `span ${span}` }}>
        <img ref={imageRef} src={images[0]} alt="image" />
      </div>
      <div className="product-buttom-bar">
        <h5>{title}</h5>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default ProductItem;
