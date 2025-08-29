import { products } from "../route";

export async function GET(request:Request,{params}:{params:{id:string}}){
        const{id}=await params;

        const product =products.find((product)=>product.id===Number(id))

        return Response.json(product);
}