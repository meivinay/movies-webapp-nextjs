import { getMovieDetails, fetchTvShowDetails, getImages } from "@/api";
import Hero from "@/components/Details/Hero";
import Sidebar from "@/components/Sidebar";
const IMAGE_BASE_URL = process.env.TMDB_IMAGE_BASE_URL;
import styles from "@/styles/curve.module.css";
import Image from "next/image";
import { Suspense } from "react";

const Details = async (props: {
  searchParams: {
    type: string;
    id: string;
  };
}) => {
  const { searchParams } = props;
  const { id, type } = searchParams;
  const details = await (type === "movie"
    ? getMovieDetails(id)
    : fetchTvShowDetails(id));

  const {
    poster_path: posterPath,
    vote_average: voteAverage,
    title,
    name,
  } = details;

  return (
    <>
      <div className="grow-3 shrink relative">
        <Suspense fallback={<>loading</>}>
          <Hero api={getImages(Number(id), type)} />
        </Suspense>
        <div
          className={`absolute rounded-bl-full ${styles["main-detail-meta-top-left"]}`}
        />
        <div className="flex absolute bottom-0 right-0 left-0 ">
          <div className="shrink-0 bottom-0 h-[240px] w-[160px]">
            <div className="relative">
              <span
                className="absolute h-8 w-8  bg-transparent rounded-tr-full right-[50px]"
                style={{
                  boxShadow:
                    "11px -8px 0px 7px rgb(240 249 255 / var(--tw-bg-opacity))",
                }}
              ></span>
              <span
                className="absolute h-8 w-8  bg-transparent rounded-bl-full -top-[47px]"
                style={{
                  boxShadow:
                    "-9px 7px 0px 7px rgb(240 249 255 / var(--tw-bg-opacity))",
                }}
              ></span>
              <span
                className="absolute h-8 w-8 bg-transparent rounded-tr-full top-[55px] -right-[1px]"
                style={{
                  boxShadow:
                    "13px -8px 0px rgb(240 249 255 / var(--tw-bg-opacity))",
                }}
              ></span>
              <Image
                className="rounded-2xl  outline outline-[16px] outline-sky-50"
                src={`${IMAGE_BASE_URL}original${posterPath}`}
                height={240}
                width={160}
                alt={title || name}
              />
              {/* <img className=" rounded-2xl  outline outline-[16px] outline-sky-50"></img> */}
              <p className="absolute top-0 -right-2 text-black bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center shadow-rating-circlee outline outline-8 outline-sky-50 ">
                {voteAverage}
              </p>
            </div>
          </div>
          <div className="shrink-0 p-7 bg-white  bottom-0 left-44 rounded-3xl shadow-movie-main-meta self-end ml-4">
            <h1 className="text-xl">{title || name}</h1>
            <div className="flex gap-x-2 relative">
              <button type="button" className="bg-[rgb(238, 238, 238)]">
                Watch Trailer
              </button>
              <button>Bookmark</button>
              <button>Share</button>
              <div
                className="absolute h-12 w-12 -right-[90px] -bottom-[28px] rounded-bl-3xl"
                style={{
                  boxShadow:
                    "-8px 20px 0px 3px rgb(240 249 255 / var(--tw-bg-opacity))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Sidebar searchParams={searchParams} details={details} />
    </>
  );
};

export default Details;
