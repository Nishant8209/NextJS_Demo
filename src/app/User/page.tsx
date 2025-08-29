'use client'; // because we handle click event & client navigation

import { useRouter } from 'next/navigation';
import React from 'react';

async function fetchUsers() {
  const res = await fetch('https://dummyjson.com/users', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await res.json();
  return data.users;
}

export default function Page() {
  const [users, setUsers] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    fetchUsers().then(users => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul>
        {users.map((user) => (
          <li 
            key={user.id} 
            className="border p-2 mb-2 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => router.push(`/User/${user.id}`)}
          >
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
