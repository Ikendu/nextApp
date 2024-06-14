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
  const posts = await fetchPosts();
  console.log(posts);

  return (
    <div>
      <h1>Latest Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.phone}</li>
        ))}
      </ul>
    </div>
  );

  return content;
}
