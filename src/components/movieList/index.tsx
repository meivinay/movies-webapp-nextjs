import Card from "@/components/card";
import { Movie } from "@/ts/interfaces";
type Props = {
  api: () => Promise<{ page: number; results: Movie[] }>;
};

const List = async (props: Props) => {
  const data = await props.api();
  return (
    <>
      <ul className="flex flex-nowrap gap-x-4 overflow-auto">
        {data.results.map((movie) => (
          <li key={movie.id} className="shrink-0">
            <Card movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
