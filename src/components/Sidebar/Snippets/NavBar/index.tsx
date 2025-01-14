"use client";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

type Props = {
  navList: string[];
};

const NavBar = (props: Props) => {
  const params = useSearchParams();
  const createQueryParams = (name: string, value: string) => {
    const searchParams = new URLSearchParams(params.toString());
    searchParams.set(name, value);
    return searchParams;
  };

  return (
    <ul className="flex gap-4">
      {props.navList.map((navItem, idx) => (
        <li
          key={idx}
          className={`font-bold mb-2 capitalize ${
            params.get("q") === navItem || (!params.get("q") && idx === 0)
              ? "text-blue-600"
              : ""
          }`}
        >
          <Link href={`?${createQueryParams("q", navItem)}`}>{navItem}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
