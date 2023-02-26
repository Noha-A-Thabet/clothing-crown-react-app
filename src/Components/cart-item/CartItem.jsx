import React from "react";
import "./CartItem.styles.scss";
export default function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} className="img" />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
}
