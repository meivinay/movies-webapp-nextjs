"use client";
import dynamic from "next/dynamic";

import Image from "next/image";

import Link from "next/link";
import { Movie } from "@/ts/interfaces";

import { use, useState } from "react";
import useInterval from "@/hooks/useInterval";
const PlayIcon = dynamic(() => import("@/icons/PlayArrow"), { ssr: false });
const InfoCircle = dynamic(() => import("@/icons/InfoCircle"), { ssr: false });

type Props = {
  apiPromise: Promise<{ results: Movie[] }>;
};
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

const Hero = (props: Props) => {
  const res = use(props.apiPromise);
  const results = res.results;

  const [currIdx, setCurrIdx] = useState(0);
  useInterval(5000, () => {
    setCurrIdx((prev) => {
      if (prev + 1 === results.length) {
        return 0;
      }
      return prev + 1;
    });
  });
  const currMovie = results[currIdx];
  return (
    <div className="hero relative h-5/6 shrink-0 mt-4">
      <div className="relative h-[90%] overflow-hidden rounded-[2rem]">
        <div className="flex flex-nowrap overflow-hidden">
          <Image
            src={`${IMAGE_BASE_URL}original${currMovie.backdrop_path}`}
            sizes="100vw"
            style={{
              // width: "100%",
              // height: "auto",
              objectFit: "cover",
              objectPosition: "top",
            }}
            fill
            // width={500}
            // height={334}
            alt=""
          />
        </div>
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
      <div className="poster-details items-center py-2 px-3 flex flex-col absolute bottom-0  h-28 outline outline-[12px] outline-sky-50 bg-white rounded-3xl">
        <Link
          className="text-xl self-center text-center font-extrabold flex-1 text-slate-900"
          href={{
            pathname: "/details",
            query: { type: currMovie.media_type, id: currMovie.id },
          }}
        >
          {currMovie.title}
        </Link>
        <div className="flex gap-x-4 text-white mx-auto">
          <button
            aria-label="watch trailer"
            className="px-2 py-1 flex bg-amber-300 rounded items-center font-bold"
          >
            Trailer
            <PlayIcon height={32} width={32} />
          </button>
          <Link
            aria-label="view details"
            className="px-2 py-1 flex bg-amber-300 rounded items-center font-bold"
            href={{
              pathname: "/details",
              query: { type: currMovie.media_type, id: currMovie.id },
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
