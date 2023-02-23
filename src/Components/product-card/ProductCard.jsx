import React from "react";
import "./ProductCard.styles.scss";
import Button from "./../button/Button";

export default function ProductCard({ product }) {
  const { name, id, price, imageUrl } = product;
  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} alt={`${name}`} className="img" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add To Card</Button>
    </div>
  );
}
