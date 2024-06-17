//tsrfc

import getWikiResults from "@/lib/getWikiResults";
import { notFound } from "next/navigation";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTeam = searchTerm.replaceAll(`%20`, ` `);

  if (!data?.query?.pages) return { title: `${displayTeam} NOT FOUND` };

  return { title: displayTeam };
}

// the dynamic search component
export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);

  const data = await wikiData;

  const results: Result[] | undefined = data?.query?.pages;
  const content = (
    <main className="bg-slate-200 ma-auto max-w-lg py-1 min-h-screen">
      {results
        ? Object.values(results).map((result) => (
            <p>{JSON.stringify(result)}</p>
          ))
        : notFound()}
    </main>
  );
  return content;
}
