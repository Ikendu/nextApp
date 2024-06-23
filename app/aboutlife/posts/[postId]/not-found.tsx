import Link from "next/link";

export default function notFound() {
  return (
    <div className="text-center font-bold text-2xl m-24">
      <p>Sorry, the requested post does not exist!</p>
      <Link href={`/`}>Back to home</Link>
    </div>
  );
}
