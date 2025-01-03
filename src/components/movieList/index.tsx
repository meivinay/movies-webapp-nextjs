import Card from "@/components/card";
import { Movie } from "@/ts/interfaces";
type Props = {
  api: () => Promise<{ page: number; results: Movie[] }>;
  isTvShow: boolean;
};

const List = async (props: Props) => {
  const { results } = await props.api();
  return (
    <>
      <ul className="flex flex-nowrap gap-x-4 overflow-auto">
        {results.map((data) => (
          <li key={data.id} className="shrink-0">
            <Card data={data} isTvShow={props.isTvShow} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
