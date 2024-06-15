import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPostpage from "./components/UserPostpage";

type Params = {
  params: {
    userId: string;
  };
};
export const genMetaData = () => {
  const Username: Promise<User> = getUser({ params: { userId } });
};

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
