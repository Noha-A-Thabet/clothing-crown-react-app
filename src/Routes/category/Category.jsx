import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/CategoriesContext";
import { useContext } from "react";
import "./category.styles.scss";
import ProductCard from "./../../Components/product-card/ProductCard";

export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title ">{category.toLocaleUpperCase()}</h2>
      <div
        className="category-container
    "
      >
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
