// import { getGenres } from "@/api";
import Search from "@/components/Search";
import SearchList from "@/components/SearchList/indes";
import TopSearchList from "@/components/TopSearchList/indes";
import { Suspense } from "react";

const SearchPage = async (props) => {
  const { searchParams: { q } = {} } = props;
  // const [movieGenres, tvGenres] = await Promise.allSettled([
  //   getGenres("movie"),
  //   getGenres("tv"),
  // ]);

  return (
    <main className="grid grid-cols-3 auto-rows-min grow gap-4 mt-6">
      <Search />
      <h2 className="col-span-full">Top Searches Today</h2>
      <Suspense fallback={<LoadingCard />}>
        {q ? (
          <SearchList
            searchValue={q}
            // movieGenres={movieGenres.value.genres}
            // tvGenres={tvGenres.value.genres}
          />
        ) : (
          <TopSearchList
          // movieGenres={movieGenres} tvGenres={tvGenres}
          />
        )}
      </Suspense>
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
