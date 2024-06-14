export let userData;
async function getAllUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");

  userData = users.json();

  if (!users.ok) throw new Error("No user found");

  return users.json();
}
