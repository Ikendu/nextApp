import Link from "next/link";
import Search from "./Search";
import { FaGithub, FaLaptop, FaTwitter, FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <nav className=" bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="md-px-6 prose prose-xl flex flex-col sm:flex-row justify-between mx-auto ">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link href={"/"}>WikiLife</Link>
        </h1>
        <div className="flex flex-col items-center md:ml-48">
          <Link
            href={`/aboutlife`}
            className="text-[#d6d2d2] text-xl font-bold"
          >
            YoungLife
          </Link>
          <div className="flex gap-4 justify-center lg:text-xl">
            <Link
              href={`https://www.youtube.com/@chibunduaniede2936`}
              className="text-white/70 hover:text-white"
              target="_blank"
            >
              <FaYoutube />
            </Link>
            <Link
              href={`https://web.facebook.com/chibundu101`}
              className="text-white/70 hover:text-white"
              target="_blank"
            >
              <FaLaptop />
            </Link>
            <Link
              href={`github.com/ikendu`}
              className="text-white/70 hover:text-white"
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              href={`https://twitter.com/ikendul`}
              className="text-white/70 hover:text-white"
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>

        <Search />
      </div>
    </nav>
  );
}
export default Navbar;
