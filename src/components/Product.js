export function Product({ product, setSelectedProduct }) {
  return (
    <div className="product">
      <div className="product-img-div">
        <img className="product-img" src={product.image} alt={product.title} />
      </div>
      <p className="product-category">{product.category}</p>
      <p className="product-title">{product.title}</p>
      <div className="product-footer">
        <p className="product-price">${product.price}</p>
        <button onClick={() => setSelectedProduct(product.id)}>See more</button>
      </div>
    </div>
  );
}
