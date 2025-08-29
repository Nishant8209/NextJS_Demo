import { resolve } from "path";

type User={
    id:number;
    name:string;
    userName:string;
    email:string;
    phone:string;
}
export const revalidate = 60; // Re-generate every 60s
export  default async function UserServer() {
    await new Promise((resolve)=>setTimeout(resolve,2000))



    const res =await fetch('https://jsonplaceholder.typicode.com/users');
    const users=await res.json();

    return(
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-4">
        {users.map((u:User) => (
          <li key={u.id} className="border p-4 rounded shadow-sm">
            <p><strong>Name:</strong> {u.name}</p>
            <p><strong>Username:</strong> {u.userName}</p>
            <p><strong>Email:</strong> {u.email}</p>
            <p><strong>Phone:</strong> {u.phone}</p>
          </li>
        ))}
      </ul>
    </div>
    )
}