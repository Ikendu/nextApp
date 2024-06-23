import { getPostMeta } from "@/lib/post";
import ListItems from "./ListItems";

export default async function Posts() {
  const posts = await getPostMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry: No post available</p>;
  }

  return (
    <section className="my-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold">Blog</h2>
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <ListItems key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
