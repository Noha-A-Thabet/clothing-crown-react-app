import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "./../../Components/product-card/ProductCard";
import "./Shop.styles.scss";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
