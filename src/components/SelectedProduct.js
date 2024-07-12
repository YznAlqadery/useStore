import { useState, useEffect } from "react";

export function SelectedProduct({ selectedProduct, handleGoBack, handleAdd }) {
  const [product, setProduct] = useState([]);

  const { title, price, id, image } = product;

  function addProduct() {
    const newProduct = {
      id,
      title,
      price,
      image,
    };
    handleAdd(newProduct);
    handleGoBack();
  }
  useEffect(
    function () {
      async function fetchProductById() {
        const response = await fetch(
          `https://fakestoreapi.com/products/${selectedProduct}`
        );
        const data = await response.json();
        setProduct((product) => data);
      }
      fetchProductById();
    },
    [selectedProduct]
  );

  useEffect(function () {
    if (!product.title) return;
    document.title = product.title;
    return function () {
      document.title = "useStore";
    };
  });
  return (
    <>
      <div className="selected-product">
        <button className="btn-go-back" onClick={handleGoBack}>
          &larr;
        </button>
        <img className="product-img" src={product.image} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>Rating : {product.rating?.rate} / 5</p>
        <p className="product-price">${product.price}</p>
        <button onClick={addProduct} className="btn-add-to-cart">
          Add to cart
        </button>
      </div>
    </>
  );
}
