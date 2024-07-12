import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { CartList } from "./components/CartList";
import { CategorizedList } from "./components/CategorizedList";
import { ProductList } from "./components/ProductList";
import { SelectedProduct } from "./components/SelectedProduct";

export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState([]);
  const categories = [
    {
      id: 0,
      title: "All",
    },
    {
      id: 1,
      title: "electronics",
    },
    {
      id: 2,
      title: "jewelery",
    },
    {
      id: 3,
      title: "men's clothing",
    },
    {
      id: 4,
      title: "women's clothing",
    },
  ];
  function handleSelected(productID) {
    setSelectedProduct((selectedProduct) =>
      selectedProduct === productID ? null : productID
    );
  }
  function handleAdd(product) {
    setCart((cart) => [...cart, product]);
  }
  function handleGoBack() {
    setSelectedProduct(null);
  }
  function handleCategory() {
    setCategory("");
  }
  function handleDelete(id) {
    setCart((cart) => cart.filter((cart) => cart.id !== id));
  }
  useEffect(function () {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts((products) => data);
    }
    fetchProducts();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="heading">{category}</h1>
        <div className="product-list">
          {selectedProduct ? (
            <SelectedProduct
              selectedProduct={selectedProduct}
              handleGoBack={handleGoBack}
              handleAdd={handleAdd}
            />
          ) : category ? (
            <CategorizedList
              category={category}
              setSelectedProduct={handleSelected}
              handleCategory={handleCategory}
            />
          ) : (
            <ProductList
              products={products}
              setSelectedProduct={handleSelected}
              categories={categories}
              category={category}
              setCategory={setCategory}
            />
          )}
          {cart.length > 0 && (
            <CartList cart={cart} handleDelete={handleDelete} />
          )}
        </div>
      </div>
    </>
  );
}
