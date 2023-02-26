import { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/ShoppingIcon.svg";
import { CartContext } from "../../context/CartContext";

export default function CartIcon({ Cartquantity }) {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

  const handleDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={handleDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}
