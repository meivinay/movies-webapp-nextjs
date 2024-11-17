import Search from "@/components/Search";
import SearchList from "@/components/SearchList/indes";
import TopSearchList from "@/components/TopSearchList/indes";
import { Suspense } from "react";

const SearchPage = (props) => {
  const { searchParams: { q } = {} } = props;

  return (
    <main className="grid grid-cols-3 auto-rows-min grow gap-4 mt-6">
      <Search />
      <h2 className="col-span-full">Top Searches Today</h2>
      {q ? (
        <Suspense fallback={<LoadingCard />}>
          <SearchList searchValue={q} />
        </Suspense>
      ) : (
        <TopSearchList />
      )}
    </main>
  );
};

const LoadingCard = () => {
  const skeletons = [];
  for (let i = 0; i <= 11; i++) {
    skeletons.push(
      <div className="animate-pulse w-[435px] h-[240px] bg-slate-200" />
    );
  }
  return skeletons;
};
export default SearchPage;
