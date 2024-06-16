export default async function getUser(userId: string) {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    // { cache:"no-cache" } //to avoid the default behavoir of storing and reusing of fetched data
    // we also have 'forced-cashe: this is the default
    { next: { revalidate: 60 } } // this update the fetched data every 60 seconds. this can be applied to either static site or server side
  );

  if (!user.ok) throw new Error("User not found");

  return user.json();
}
