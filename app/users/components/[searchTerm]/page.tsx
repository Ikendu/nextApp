//tsrfc

import getWikiResults from "@/app/lib/getWikiResults";

type Props = {
  params: {
    searchTerm: string;
  };
};
export default async function page({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);

  const data = await wikiData;
  return <div>page</div>;
}
