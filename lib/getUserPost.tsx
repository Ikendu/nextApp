export default async function getUserPost(userId: string) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!post.ok) throw new Error(`post not found`);
  return post.json();
}
