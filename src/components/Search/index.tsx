"use client";
import { ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <input
      className="rounded col-start-2 col-end-2 h-[48px] p-4"
      placeholder="Please enter at least 2 characters to search"
      type="text"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        router.push(`${pathname}?q=${e.target.value}`);
      }}
    />
  );
};

export default Search;
