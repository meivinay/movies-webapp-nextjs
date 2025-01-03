import dynamic from "next/dynamic";
import { fetchTrendingMovies, fetchUpcomingMovies } from "@/api";
import Image from "next/image";
const IMAGE_BASE_URL = process.env.TMDB_IMAGE_BASE_URL;
import Link from "next/link";
import { Movie } from "@/ts/interfaces";
const PlayIcon = dynamic(() => import("@/icons/PlayArrow"), { ssr: false });
const InfoCircle = dynamic(() => import("@/icons/InfoCircle"), { ssr: false });

const Hero = async () => {
  const res: { results: Movie[] } = await fetchUpcomingMovies();
  const firstMovie = res.results[0];
  return (
    <div className="hero relative h-5/6 shrink-0 mt-4">
      <div className="relative h-[90%] overflow-hidden rounded-[2rem]">
        <Image
          src={`${IMAGE_BASE_URL}original${firstMovie.backdrop_path}`}
          sizes="100vw"
          style={{
            // width: "100%",
            // height: "auto",
            objectFit: "cover",
          }}
          fill
          // width={500}
          // height={334}
          alt=""
        />
        <div
          className="absolute h-9 w-9  border-transparent rounded-br-full  bottom-0 left-cl"
          style={{
            boxShadow:
              "7px 9px 0px 5px rgb(240 249 255 / var(--tw-bg-opacity))",
          }}
        />
        <div
          className="absolute h-9 w-9  border-transparent rounded-bl-full bottom-0 left-r-cl"
          style={{
            boxShadow:
              "-7px 9px 0px 5px rgb(240 249 255 / var(--tw-bg-opacity))",
          }}
        />
      </div>
      <div className="poster-details p-4 flex flex-col absolute bottom-0  h-28 outline outline-[12px] outline-sky-50 bg-white rounded-3xl">
        <Link
          className="text-xl self-center font-bold flex-1"
          href={{
            pathname: "/details",
            query: { type: firstMovie.media_type, id: firstMovie.id },
          }}
        >
          {firstMovie.title}
        </Link>
        <div className="flex mt-auto gap-x-4 text-white mx-auto">
          <button
            aria-label="watch trailer"
            className="px-4 py-1 flex bg-amber-300 rounded items-center font-bold"
          >
            Trailer
            <PlayIcon height={32} width={32} />
          </button>
          <Link
            aria-label="view details"
            className="px-4 py-1 flex bg-amber-300 rounded items-center font-bold"
            href={{
              pathname: "/details",
              query: { type: firstMovie.media_type, id: firstMovie.id },
            }}
          >
            Details
            <InfoCircle height={32} width={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
