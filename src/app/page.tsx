import Card from "@/components/card";
import SUPPORTED_REGIONS from "@/constants/countries";
import { Suspense, useEffect } from "react";
import { getLatestMovies } from "@/api/index";
import Hero from "@/components/Hero";
import List from "@/components/MovieList";
import RegionalMoviesList from "@/components/RegionalMoviesList";
import MovieListSkeleton from "@/components/MovieList/loading";
import HeroLoading from "@/components/Hero/loading";

export default async function Home(props) {
  //  const posts = await getLatestMovies('https://api.vercel.app/blog')

  return (
    <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto pr-4">
      <Suspense fallback={<HeroLoading />}>
        <Hero />
      </Suspense>
      <ul>
        <li>
          <h2>Latest Movies</h2>
          <Suspense fallback={<MovieListSkeleton />}>
            <List api={getLatestMovies} />
          </Suspense>
        </li>
        {/* <li>
          Latest Tv Shows
          <ul className="flex flex-nowrap gap-x-4 overflow-auto">
            {LATEST_TV_SHOWS.results.map((movie, idx) => (
              <li key={movie.id} className="shrink-0">
                <Card movie={movie} isTvShow />
              </li>
            ))}
          </ul>
        </li>
        <li>
          Popular Movies
          <ul className="flex flex-nowrap gap-x-4 overflow-auto">
            {POPULAR_MOVIES.results.map((movie) => (
              <li key={movie.id}>
                <Card movie={movie} />
              </li>
            ))}
          </ul>
        </li>
        <li>
          Popular Tv Shows
          <ul className="flex flex-nowrap gap-x-4 overflow-auto">
            {POPULAR_TV_SHOWS.results.map((movie) => (
              <li key={movie.id}>
                <Card movie={movie} isTvShow />
              </li>
            ))}
          </ul>
        </li>
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
