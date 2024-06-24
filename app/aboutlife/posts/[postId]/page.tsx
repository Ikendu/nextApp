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

  console.log(`POST`, post);

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
  console.log(`Meta`, meta, content);
  console.log(`Content`, content);

  const tags = meta?.tags?.map((tag, idx) => (
    <Link key={idx} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));
  return (
    // <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
    <>
      <h2 className="text-3xl">{meta.title}</h2>
      <p className="mt-0">{meta.date}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p className="mb-10">
        <link href="/">Back to home</link>
      </p>
    </>
  );
}
