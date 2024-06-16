import Link from "next/link";

function Navbar() {
  return (
    <nav className=" bg-slate-600 p-4">
      <h1>
        <Link href={"/"}>WikiLife</Link>
      </h1>
    </nav>
  );
}
export default Navbar;
