import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearchTerms = (e) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return <div>Search</div>;
}
