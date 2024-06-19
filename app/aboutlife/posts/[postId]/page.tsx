import getSortedPostsData from "@/lib/post";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const posts = getSortedPostsData();

  const post = posts.find((post) => post.id === postId);

  if (!post) return { title: `Post not found` };
  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) return notFound();
  return <div>page for post</div>;
}
