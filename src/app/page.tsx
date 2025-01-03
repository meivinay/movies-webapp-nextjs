import Card from "@/components/card";
import SUPPORTED_REGIONS from "@/constants/countries";
import { Suspense } from "react";
import {
  fetchLatesMoviesList,
  fetchLatestTvShowsList,
  fetchPopularMoviesList,
  fetchPopularTvShowsList,
  fetchUpcomingMovies,
} from "@/api/index";

import Hero from "@/components/Hero";
import List from "@/components/MovieList";
import RegionalMoviesList from "@/components/RegionalMoviesList";
import MovieListSkeleton from "@/components/MovieList/loading";
import HeroLoading from "@/components/Hero/loading";

export default async function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto pr-4">
      <Suspense fallback={<HeroLoading />}>
        <Hero apiPromise={fetchUpcomingMovies()} />
      </Suspense>
      <ul>
        <li>
          <h2 className="font-bold text-xl mb-2">Latest Movies</h2>
          <Suspense fallback={<MovieListSkeleton />}>
            <List api={fetchLatesMoviesList} isTvShow={false} />
          </Suspense>
        </li>
        <li>
          <h2 className="font-bold text-xl mb-2">Latest Tv Shows</h2>
          <Suspense fallback={<MovieListSkeleton />}>
            <List api={fetchLatestTvShowsList} isTvShow />
          </Suspense>
        </li>
        <li>
          <h2 className="font-bold text-xl mb-2">Popular Movies</h2>
          <Suspense fallback={<MovieListSkeleton />}>
            <List api={fetchPopularMoviesList} isTvShow={false} />
          </Suspense>
        </li>
        <li>
          <h2 className="font-bold text-xl mb-2">Popular Tv Shows</h2>
          <Suspense fallback={<MovieListSkeleton />}>
            <List api={fetchPopularTvShowsList} isTvShow />
          </Suspense>
        </li>
        {/* 

        <li>
          Popular Indian Movies
          <RegionalMoviesList region={SUPPORTED_REGIONS[0]} />
        </li> */}
        {/* <li>
          Popular Anime
          <RegionalMoviesList region={SUPPORTED_REGIONS[2]} genre={16} />
        </li> */}
      </ul>
    </main>
  );
}
