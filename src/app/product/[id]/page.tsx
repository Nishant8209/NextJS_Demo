import { notFound } from 'next/navigation';
import { headers } from 'next/headers';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const host = (await headers()).get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const {id} =  params;
  const res = await fetch(`${protocol}://${host}/data/products.json`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  const products: Product[] = await res.json();
  const product = products.find(p => p.id ===Number(id) );
 
  if (!product) {
    return notFound();
  }

  return (
    <div className="p-8 pt-20">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={`http://localhost:3001/${product.image}`} alt={product.name} className="w-full max-w-md rounded-md mb-6" />
      <p>{product.image}</p>
      <p className="text-xl text-gray-700 mb-2">${product.price}</p>
      <p className="text-gray-600">{product.description || 'No description available.'}</p>
    </div>
  );
}
