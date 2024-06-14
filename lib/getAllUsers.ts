//basic functon for get all users
//NOT USING THE FUNCTION AT THE MOMENT

export default async function getAllUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!users.ok) throw new Error("No user found");

  return users.json();
}
