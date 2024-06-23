// import getSortedPostsData, { getPostData } from "@/lib/post";
import { getPostByName, getPostMeta } from "@/lib/post";
import Link from "next/link";
import { notFound } from "next/navigation";

//to make our post server-side rendered (will not cache anything)
export const revalidate = 0;
type Props = {
  params: { postId: string };
};

// to use static site generation and improve our website rendering
// rebuild this project!
// export function generateStaticParams() {
//   const posts = await getPostMeta();
//   if (!posts) return []; // returning empty array is better than undefined so we dont have problems during mapping an undefined

//   return posts.map((post) => ({ postId: post.id }));
// }

// getting the title page for each post
export async function generateMetadata({ params: { postId } }: Props) {
  // pass params and destructure it
  const post = await getPostByName(`${postId}.mdx`); //deduped

  if (!post) return { title: `Post Not Found` }; // returning empty array is better than undefined so we dont have problems during mapping an undefined

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params }: Props) {
  const { postId } = params;
  const post = await getPostByName(`${postId}.mdx`); //deduped

  if (!post) notFound();

  const { meta, content } = post;
  console.log(meta, content);

  const tags = meta.tags.map((tag, idx) => (
    <Link key={idx} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));
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
