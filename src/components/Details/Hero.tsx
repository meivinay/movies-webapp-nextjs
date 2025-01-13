"use client";
import useImageCarousel from "@/hooks/useImageCarousel";
import Image from "next/image";
import { use } from "react";
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

type Images = {
  backdrops: [
    {
      file_path: string;
    }
  ];
};

const Hero = ({ api }) => {
  const images: Images = use(api);
  const _images = images.backdrops.slice(5);
  const { currIdx, next } = useImageCarousel(_images.length);
  return (
    <div className="flex flex-nowrap overflow-hidden">
      {_images.map((img, idx) => {
        return (
          <div key={img.file_path} className={currIdx === idx ? "" : "hidden"}>
            <Image
              sizes="90vw"
              style={{
                // width: "100%",
                // height: "auto",
                objectFit: "cover",
                objectPosition: "top",
              }}
              fill
              alt=""
              // alt={result.name || result.title}
              // priority={idx === 0}
              src={`${IMAGE_BASE_URL}original${img.file_path}`}
              className="h-full w-full object-cover object-top rounded-3xl"
              onLoad={() => {
                setTimeout(() => {
                  next();
                }, 5000);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
