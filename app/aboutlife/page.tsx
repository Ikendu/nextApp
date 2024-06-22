import MyProfilePic from "./component/MyProfilePic";
import Posts from "./component/Post";

// [optional but important] revalidation for better CEO
export const revalidate = 10;

export default function page() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-2xl text-center dark:text-white">
        Hello and welcome ✋&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">David Aniede</span>
        </span>
      </p>
      <Posts />
    </div>
  );
}
