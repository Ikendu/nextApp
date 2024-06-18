import Link from "next/link";
import Search from "./Search";
import { FaGithub, FaLaptop, FaTwitter, FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <nav className=" bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href={"/"}>WikiLife</Link>
      </h1>
      <div className="flex flex-col content-center">
        <Link href={`/aboutlife`} className="text-[#d6d2d2] text-3xl font-bold">
          YoungLife
        </Link>
        <div className="flex gap-4 justify-center lg:text-3xl">
          <Link
            href={`https://www.youtube.com/@chibunduaniede2936`}
            className="text-white/70 hover:text-white"
          >
            <FaYoutube />
          </Link>
          <Link
            href={`https://www.youtube.com/@chibunduaniede2936`}
            className="text-white/70 hover:text-white"
          >
            <FaLaptop />
          </Link>
          <Link
            href={`https://www.youtube.com/@chibunduaniede2936`}
            className="text-white/70 hover:text-white"
          >
            <FaGithub />
          </Link>
          <Link
            href={`https://www.youtube.com/@chibunduaniede2936`}
            className="text-white/70 hover:text-white"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>

      <Search />
    </nav>
  );
}
export default Navbar;
