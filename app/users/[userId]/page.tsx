import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPostpage from "./components/UserPostpage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// export const revalidate = 60; // revalidate this page every 60s
//Params for the user id
type Params = {
  params: {
    userId: string;
  };
};

//dynamically generate title for each user post list
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  if (!user?.name) {
    return { title: "User not found" };
  }
  return {
    title: user?.name,
    description: `This is the page for ${user?.name}`,
  };
}

// fetch and export the user data and the user personal post-list
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPost: Promise<Post[]> = getUserPost(userId);

  //   const [user, posts] = await Promise.all([userData, userPost]); //for parallel fetching
  const user = await userData;
  if (!user?.name) return notFound();

  return (
    <div>
      <h1>{user?.name}</h1>
      {/* using suspense to delay post-list until its completely loaded */}
      <Suspense fallback={<h3>Loading...</h3>}>
        <UserPostpage promise={userPost} />
      </Suspense>
    </div>
  );
}
