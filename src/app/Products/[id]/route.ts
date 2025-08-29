import { products } from "../route"; // assuming this is an array of products

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params; // ✅ no await

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return new Response("Product not found", { status: 404 });
  }

  return Response.json(product);
}
