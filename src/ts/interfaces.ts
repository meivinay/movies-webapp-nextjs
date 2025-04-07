export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  original_name: string;
  alt: string;
  src: string;
  name: string;
  overview: string;
  release_date: string;
  runtime: string;
  genres: string[];
  tagline: string;
}
export interface SearchParams {
  searchParams: Record<string, string>;
}
export interface PageProps extends SearchParams {}
