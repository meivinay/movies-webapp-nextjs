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

interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
}
interface API_RESPONSE {
  page: number;
  results: Movie[];
}

export const fetchTrendingMovies = async (
  timeWindow: "week" | "day"
): Promise<API_RESPONSE> => {
  return get(`${TMDB_API_URL}trending/movie/${timeWindow}`);
};
