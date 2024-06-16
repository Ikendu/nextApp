import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import useSWR from "swr";

export const metadata: Metadata = {
  title: "User page",
  description: "show all users availabe",
};

export default async function UsersPage() {
  //Asign types to the Users Object properties
  const UsersPosts: Promise<User[]> = getAllUsers();

  const users = await UsersPosts;

  if(!users) return notFound()

  console.log(users);

  return (
    <section>
      <h2>
        <Link href={"/"}>Back to Home page</Link>
      </h2>
      <h1 className="text-2xl text-blue-800">Latest Blog Posts</h1>
      <div>
        {users.map((user) => (
          <p key={user?.id}>
            <Link href={`/users/${user?.id}`}>{user?.name}</Link>
          </p>
        ))}
      </div>
    </section>
  );
}
