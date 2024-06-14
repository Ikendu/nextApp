export default async function getUser() {
  const user = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!user.ok) throw "User not found";

  return user.json();
}
