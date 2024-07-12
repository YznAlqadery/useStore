export function CartItem({ cart, handleDelete }) {
  return (
    <div className="cart">
      <p className="cart-title">{cart.title}</p>
      <p>${cart.price}</p>
      <button onClick={() => handleDelete(cart.id)} className="btn-delete">
        X
      </button>
    </div>
  );
}
