import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <h1>Carrito de Compras</h1>
      </div>
      {cartItems.length === 0 ? (
        <div className="d-flex justify-content-center">
          <p>No hay productos en el carrito.</p>
        </div>
      ) : (
        <>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>Pizza {item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toLocaleString('es-CL')}</span>
                <div>
                  <button className="btn btn-sm btn-dark" onClick={() => addToCart(item)}>+</button>
                  <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>-</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-center">
            <h2 className="mt-4">Total: ${total.toLocaleString('es-CL')}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
