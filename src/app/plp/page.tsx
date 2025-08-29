// app/page.tsx
'use client';
import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate fetch from local dummy JSON
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to load products:', err));
  }, []);

  return (
    <main className="p-8 mt-10">
      <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
