'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const goToProduct = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <>
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
      {products.map(product => (
        <div
          key={product.id}
          className="border p-4 rounded-lg cursor-pointer hover:shadow-md"
          onClick={() => goToProduct(product.id)}
        >
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
         
          <h2 className="text-xl font-bold mt-2">{product.name}</h2>
          <p className="text-gray-700">${product.price}</p>
        </div>
      ))}
    </div>

    {/* <Image
        src="/image.jpg"
        alt="Profile Picture"
        width={300}
        height={300}
     
      /> */}

      
    </>
    
  );
}
