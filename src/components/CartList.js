import { CartItem } from "./CartItem";

export function CartList({ cart, handleDelete }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  return (
    <div className="cart-list">
      <h2>Cart({cart.length})</h2>
      {cart.map((cart) => (
        <CartItem key={cart.id} cart={cart} handleDelete={handleDelete} />
      ))}
      <p>Total : $ {total}</p>
    </div>
  );
}
