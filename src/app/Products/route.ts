export const products = [
    {
        "id": 1,
        "name": "Smartphone X",
        "price": 699,
        "image": "phone.webp"
    },
    {
        "id": 2,
        "name": "Laptop Pro",
        "price": 1299,
        "image": "laptop.webp"
    },
    {
        "id": 3,
        "name": "Smartwatch",
        "price": 299,
        "image": "watch.webp"
    }
]


export async function GET() {
    return Response.json(products);
}

export async function POST(request: Request) {
    const product = await request.json();
    const newproduct = {
        id: products.length + 1,
        name: product.name,
        price: product.price,
        image: product.image
    }

    products.push(newproduct);
    return new Response(JSON.stringify(newproduct),{
        headers:{
            "content-Type":"application/json"
        },
        status:201,
    })
}