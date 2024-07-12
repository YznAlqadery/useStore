import { useState, useEffect } from "react";
import { Product } from "./Product";

export function CategorizedList({
  category,
  setSelectedProduct,
  handleCategory,
}) {
  const [products, setProducts] = useState([]);
  useEffect(
    function () {
      async function categoryList() {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await response.json();
        setProducts((products) => data);
      }
      categoryList();
    },
    [category]
  );
  return (
    <>
      <button className="btn-go-back" onClick={handleCategory}>
        &larr;
      </button>
      <div className="products">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>
    </>
  );
}
