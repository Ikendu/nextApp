import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPostpage from "./components/UserPostpage";
import type { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  return { title: user.name, description: `This is the page for ${user.name}` };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPost: Promise<Post[]> = getUserPost(userId);

  //   const [user, posts] = await Promise.all([userData, userPost]);
  const user = await userData;
  return (
    <div>
      <h1>{user?.name}</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <UserPostpage promise={userPost} />
      </Suspense>
    </div>
  );
}
