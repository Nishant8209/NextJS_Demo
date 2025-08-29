type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
};

async function fetchUser(id: string): Promise<User> {
  const res = await fetch(`https://dummyjson.com/users/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  return res.json();
}

export default async function UserDetailPage({ params }: { params: { id: string } }) {
  const user = await fetchUser(params.id);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        {user.firstName} {user.lastName}
      </h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}
