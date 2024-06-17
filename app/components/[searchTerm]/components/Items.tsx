import Link from "next/link";

type Props = {
  result: Result;
};
function Items({ result }: Props) {
  const content = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="font-bold underline text-xl"
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );
  return <div>Items</div>;
}
export default Items;
