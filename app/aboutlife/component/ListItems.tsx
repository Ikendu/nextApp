// import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  post: Meta;
};
const ListItems = ({ post }: Props) => {
  const { id, title, date } = post;
  //   const formattedDate = getFormattedDate(date);
  return (
    <li className="mt-4 text-2xl dark:text-white/70">
      <Link
        href={`/aboutlife/posts/${id}`}
        className="underline hover:text-black/70 dark:hover:text-white"
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{date}</p>
      {/* <p className="text-sm mt-1">{formattedDate}</p> */}
    </li>
  );
};
export default ListItems;
