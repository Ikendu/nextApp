import getSortedPostsData from "@/lib/post";
import { notFound } from "next/navigation";

export default function Post({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) return notFound();
  return <div>page for post</div>;
}
