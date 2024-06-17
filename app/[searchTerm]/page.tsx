//tsrfc

import getWikiResults from "@/lib/getWikiResults";

// import getWikiResults from "@/lib/getWikiResults";

type Props = {
  params: {
    searchTerm: string;
  };
};
export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);

  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 ma-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => <p>{JSON.stringify(result)}</p>)
      ) : (
        <h3>{`${searchTerm} NOT FOUND`}</h3>
      )}
    </main>
  );
  return content;
}
