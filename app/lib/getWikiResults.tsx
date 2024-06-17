// import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";

export default async function getWikiResults(searchTerms: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerms,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });
  //pass the search terms to wikipadia site
  const resp = await fetch(
    "https://en.wikipedia.org/w/api.php?" + searchParams
  );
  //return the json result
  return resp.json();
}
