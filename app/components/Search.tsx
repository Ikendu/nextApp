"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/components/${search}/`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full my-4 md:w-80 flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="px-4 w-full text-xl bg-white rounded-xl"
      />
      <button className="p-2 font-bold text-xl ml-2 rounded-xl bg-slate-300">
        🧬
      </button>
    </form>
  );
}
