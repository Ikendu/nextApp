import getAllUsers from "./getAllUsers";

export default async function getUserPost(userId: string) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    // { cache: "no-cache" } //to avoid the default behavoir of storing and reusing of fetched data
    //  {cache: 'forced-cashe' } // we also have this as the default
    { next: { revalidate: 60 } } // this update the fetched data every 60 seconds. this can be applied to either static site or server side
    // we now have the power of server side-sde rendering and increamental static regeneration
  );

  // if (!post.ok) throw new Error(`post not found`);
  if (!post.ok) return undefined;
  return post.json();
}

// to generate all users id [static params] in advance so that site will know what its working with in advance
export async function generateStaticParams() {
  const UsersPosts: Promise<User[]> = getAllUsers();
  const users = await UsersPosts;
  // return the id as a string
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
