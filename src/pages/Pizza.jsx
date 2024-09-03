import React, { useEffect, useState } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    
    fetch('http://localhost:5000/api/pizzas/p001')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPizza(data);
    })
      .catch(error => console.error('Error fetching pizza:', error));
  }, []);

  if (!pizza) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <p><strong>Precio:</strong> ${pizza.price.toLocaleString()}</p>
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
      <p>{pizza.desc}</p>
      <button className="btn btn-primary">Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
