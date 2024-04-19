import React from "react";

const Products = () => {
  const products = [
    { id: 1, name: "California Roll", price: 120.00 },
    { id: 2, name: "Salmon Nigiri", price: 60.00 },
    { id: 3, name: "Tempura Udon", price: 160.00 },
    { id: 4, name: "Sashimi Platter", price: 200.00 },
    { id: 5, name: "Chicken Teriyaki", price: 210.00 },
    { id: 6, name: "Miso Soup", price: 140.00 },
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₱{product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;