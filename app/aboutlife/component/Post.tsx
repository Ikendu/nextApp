import getSortedPostsData from "@/lib/post";
import ListItems from "./ListItems";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="my-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItems key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
