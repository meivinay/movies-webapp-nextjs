import HomeIcon from "@/icons/home.tsx";
import SearchIcon from "@/icons/search.tsx";
import Link from "next/link";

const NavList = () => (
  <>
    <nav className="flex flex-col bg-white px-4 py-2 rounded self-center gap-y-4 shrink-0">
      <Link href="/">
        <HomeIcon />
      </Link>
      <Link href="/search">
        <SearchIcon />
      </Link>
    </nav>
  </>
);

export default NavList;
