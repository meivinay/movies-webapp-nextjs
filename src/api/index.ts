import { get } from "./request";

const TMDB_API_URL = process.env.API_URL;

export const getLatestMovies = async (options = {}) => {
  return await get(`${TMDB_API_URL}discover/movie`, {
    include_adult: false,
    include_video: false,
    language: "en-US",
    page: 1,
    primary_release_year: new Date().getFullYear(),
    sort_by: "popularity.desc",
    ...options,
  });
};

export const getMovieDetails = async (movieId: number) => {
  return await get(`${TMDB_API_URL}movie/${movieId}`);
};

export const getTopSearches = async (timeFrame: string | undefined = "day") => {
  return await get(`${TMDB_API_URL}trending/all/${timeFrame}`);
};
