import "./checkout-item.styles.scss";
import React, { useContext } from "react";
import { CartContext } from "./../../context/CartContext";

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, quantity, price } = cartItem;
  const { removeItemFromCart, addItemToCart, removeCartItem } =
    useContext(CartContext);
  const totalHandler = (price, quantity) => {
    return price * quantity;
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            removeCartItem(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addItemToCart(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItemFromCart(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
}
