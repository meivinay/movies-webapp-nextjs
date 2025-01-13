import createQueryString from "@/utils/createQueryString";
import SUPPORTED_REGIONS from "@/constants/countries";
import { get } from "./request";
import { Movie } from "@/ts/interfaces";
import sleep from "@/utils/sleep";
const TMDB_API_URL = process.env.API_URL;

// export const getLatestMovies = async () => {
//   return await get(`${TMDB_API_URL}discover/movie`, {
//     page: 1,
//     primary_release_year: new Date().getFullYear(),
//     sort_by: "popularity.desc",
//   });
// };

// export const getLatestTvShows = async () => {
//   return await get(`${TMDB_API_URL}discover/tv`, {
//     page: 1,
//     primary_release_year: new Date().getFullYear(),
//     sort_by: "popularity.desc",
//   });
// };

export const getMovieDetails = async (id: string) => {
  return await get(`${TMDB_API_URL}movie/${id}`);
};

export const fetchTvShowDetails = async (id: string) => {
  return await get(`${TMDB_API_URL}tv/${id}`);
};

export const getTopSearches = async (timeFrame: string | undefined = "day") => {
  return await get(`${TMDB_API_URL}trending/all/${timeFrame}`);
};

export const searchCollection = async (query: string) =>
  await get(`${TMDB_API_URL}search/collection?query=${query}`);

export const getGenres = (type: string) =>
  get(`${TMDB_API_URL}genre/${type}/list`);

// interface API_RESPONSE {
//   page: number;
//   results: Movie[];
// }

// export const fetchTrendingMovies = async (
//   timeWindow: "week" | "day"
// ): Promise<API_RESPONSE> => {
//   return get(`${TMDB_API_URL}trending/movie/${timeWindow}`);
// };

type PopularRegionMovieQuery = {
  region: (typeof SUPPORTED_REGIONS)[number];
  page?: number;
};
export const fetchPopularRegionalMovies = async (
  query: PopularRegionMovieQuery
) => {
  return await get(
    `${TMDB_API_URL}discover/movie?${createQueryString({
      ...query,
      with_origin_country: query.region,
      sort_by: "popularity.desc",
    })}`
  );
};

export const fetchUpcomingMovies = async () => {
  return await get(`${TMDB_API_URL}movie/upcoming?language=en-US&page=1`);
};

export const fetchPopularMoviesList = async () =>
  await get(`${TMDB_API_URL}movie/popular`);

export const fetchPopularTvShowsList = async () =>
  await get(`${TMDB_API_URL}tv/popular`);

export const fetchLatesMoviesList = async () =>
  await get(`${TMDB_API_URL}trending/movie/week`);

export const fetchLatestTvShowsList = async () =>
  await get(`${TMDB_API_URL}trending/tv/week`);

export const getImages = async (id: number, type: string) =>
  await get(`${TMDB_API_URL}${type}/${id}/images`);
