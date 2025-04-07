import SUPPORTED_REGIONS from "@/constants/countries";
import { fetchPopularRegionalMovies } from "@/api";
import { Movie } from "@/ts/interfaces";
import Card from "../card";

type Props = {
  region: (typeof SUPPORTED_REGIONS)[number];
  genre?: number;
};
const RegionalMoviesList = async (props: Props) => {
  const list: { page: number; results: Movie[] } =
    await fetchPopularRegionalMovies({
      region: props.region,
    });
  return (
    <ul className="flex flex-nowrap gap-x-4 overflow-auto">
      {list.results.map((movie) => {
        return <Card key={movie.id} data={movie} isTvShow={false} />;
      })}
    </ul>
  );
};

export default RegionalMoviesList;
