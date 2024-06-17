//tsrfc

import getWikiResults from "@/lib/getWikiResults";
import { notFound } from "next/navigation";
import Items from "./components/Items";

type Props = {
  params: {
    searchTerm: string;
  };
};

// generate the title for the page
export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTeam = searchTerm.replaceAll(`%20`, ` `);
  // title for error page
  if (!data?.query?.pages) return { title: `${displayTeam} NOT FOUND` };
  // title for data page
  return {
    title: displayTeam,
    description: `Search result for ${displayTeam}`,
  };
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
            <Items key={result.pageid} result={result} />
          ))
        : notFound()}
    </main>
  );
  return content;
}
