"use client";
import React, { useEffect, useState } from 'react'
type User={
    id:number;
    name:string;
    userName:string;
    email:string;
    phone:string;
}
function UserClient() {

    const [user,setUser]=useState<User[]>([]);
    const [loading ,setrLoading]=useState(true);
    const [error,setError]=useState('');

    useEffect(()=>{
        async function fetchUser(){
            try{
                const response=await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok)throw new Error('failed to load the data  ');
                const data=await response.json();
                setUser( data);
            }
            catch(err){
                setError('failed to fetch the user data');
                if(err instanceof Error){
                    setError(`failed to  fetch the user ${err.message}`)
                }
            }
            finally{
                setrLoading(false);
            }
            
        }
        fetchUser();
    },[])
      if (loading) return <div>Loading users...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
   return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-4">
        {user.map((u) => (
          <li key={u.id} className="border p-4 rounded shadow-sm">
            <p><strong>Name:</strong> {u.name}</p>
            <p><strong>Username:</strong> {u.userName}</p>
            <p><strong>Email:</strong> {u.email}</p>
            <p><strong>Phone:</strong> {u.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserClient
