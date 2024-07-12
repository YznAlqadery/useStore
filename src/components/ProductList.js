import { Product } from "./Product";

export function ProductList({
  products,
  setSelectedProduct,
  categories,
  category,
  setCategory,
}) {
  return (
    <main>
      <section>
        <div className="section-header">
          <h1 className="section-heading">Products</h1>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option value={category.title} key={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div className="products">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
