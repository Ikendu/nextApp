import getSortedPostsData, { getPostData } from "@/lib/post";
import Link from "next/link";
import { notFound } from "next/navigation";

//to make our post server-side rendered (will not cache anything)
export const revalidate = 0;

// to use static site generation and improve our website rendering
// rebuild this project!
export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ postId: post.id }));
}

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

  const { id, title, date, contentHtml } = await getPostData(postId);
  return (
    <main className="px-6 prose prose-xl prose-slate mx-auto dark:prose-invert">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{date}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href={`/`}>⬅ Back to home page</Link>
        </p>
      </article>
    </main>
  );
}
