import HomeIcon from "@/icons/home";
import SearchIcon from "@/icons/search";
import Link from "next/link";

const NavList = () => (
  <>
    <nav className="flex md:flex-col bg-white px-4 py-2 rounded self-center gap-y-4 shrink-0 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:justify-center max-sm:gap-2">
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
