export default async function getUser(userId: string) {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!user.ok) throw new Error("User not found");

  return user.json();
}
