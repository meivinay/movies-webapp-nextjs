import { Movie } from "@/ts/interfaces";
import Image from "next/image";
import Link from "next/link";

const IMAGE_BASE_URL = process.env.TMDB_IMAGE_BASE_URL;

const Card = (props) => {
  const { isTvShow, movie = {} } = props;
  const {
    src = "",
    alt = "",
    original_title: orginalTitle,
    original_name: originalName,
    backdrop_path,
    poster_path,
    id,
  }: Movie = movie;

  return (
    <Link
      href={`/details?type=${isTvShow ? "tv" : "movie"}&id=${id}`}
      className="w-44 inline-block flex-shrink-0"
    >
      <Image
        className="rounded"
        src={`${IMAGE_BASE_URL}original${poster_path}`}
        height={40 * 4}
        width={60 * 4}
        alt={isTvShow ? originalName : orginalTitle}
        style={{ width: "auto", height: "auto" }}
      />
      {
        <p
          title={isTvShow ? originalName : orginalTitle}
          className="line-clamp-2 mt-1 text-center"
        >
          {isTvShow ? originalName : orginalTitle}
        </p>
      }
    </Link>
  );
};

export default Card;
