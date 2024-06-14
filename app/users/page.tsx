import type { Metadata } from "next";
import Link from "next/link";
import useSWR from "swr";

export const metadata: Metadata = {
  title: "User page",
  description: "show all users availabe",
};

async function fetchPosts() {
  "use server";
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UsersPage() {
  //Asign types to the Users Object properties
  const UsersPosts: Promise<User[]> = fetchPosts();

  const posts = await UsersPosts;

  console.log(posts);

  return (
    <section>
      <h2>
        <Link href={"/"}>Back to Home page</Link>
      </h2>
      <h1 className="text-2xl text-blue-800">Latest Blog Posts</h1>
      <div>
        {posts.map((post) => (
          <p key={post?.id}>
            <Link href={`/users/${post?.id}`}>{post?.name}</Link>
          </p>
        ))}
      </div>
    </section>
  );
}
