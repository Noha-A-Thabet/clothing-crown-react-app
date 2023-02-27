import "./checkout.scss";
import { useContext } from "react";
import { CartContext } from "./../../context/CartContext";
import CheckoutItem from "./../../Components/checkout-item/CheckoutItem";
import "./checkout.scss";
export default function Checkout({ item }) {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <span className="total">Total:${cartTotal}</span>
    </div>
  );
}
