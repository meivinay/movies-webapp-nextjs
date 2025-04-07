import Link from "next/link";
import { searchCollection } from "@/api";
import { Movie } from "@/ts/interfaces";
import Image from "next/image";
const IMAGE_BASE_URL = process.env.TMDB_IMAGE_BASE_URL;

const SearchList = async (props: { searchValue: string }) => {
  const { results } = await searchCollection(props.searchValue);
  return (
    <>
      {results.map((movie: Movie) => {
        const { poster_path: posterPath, title, media_type, name, id } = movie;
        return (
          <Link
            key={id}
            href={`/details?type=${media_type}&id=${id}`}
            className="flex gap-2 "
          >
            <Image
              alt={name}
              height="240"
              width="160"
              className="min-h-[240] h-[240] min-w-[160px] w-[160px] rounded-lg"
              src={`${IMAGE_BASE_URL}original${posterPath}`}
            ></Image>
            <div>
              <h2>{name || title}</h2>
              <span>{media_type}</span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default SearchList;
