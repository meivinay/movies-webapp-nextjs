import { getTopSearches } from "@/api";
import Image from "next/image";
import Link from "next/link";
const IMAGE_BASE_URL = process.env.TMDB_IMAGE_BASE_URL;

const TopSearchList = async () => {
  const { results } = await getTopSearches();

  return (
    <>
      {results.map((movie) => {
        const { poster_path: posterPath, title, media_type, name, id } = movie;
        return (
          <Link
            key={id}
            href={`/details?type=${media_type}&id=${id}`}
            className="flex gap-2"
          >
            <img
              className="h-[240] w-[160px] rounded-lg"
              src={`${IMAGE_BASE_URL}original${posterPath}`}
            ></img>
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

export default TopSearchList;
