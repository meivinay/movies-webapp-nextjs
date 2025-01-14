import Image from "next/image";
import { getCredits } from "@/api";

const IMAGE_BASE_URL = process.env.TMDB_IMAGE_BASE_URL;

type CastDetails = {
  id: number;
  cast: {
    id: number;
    name: string;
    character: string;
    credit_id: string;
    known_for_department: string;
    profile_path: string;
  }[];
};

const Casts = async (props) => {
  const {
    id,
  }: {
    id: number;
  } = props.details;
  const castsDetails: CastDetails = await getCredits(id, props.type);

  return (
    <ul className="flex flex-wrap gap-4">
      {castsDetails.cast.map((details) => {
        return details.profile_path ? (
          <li
            className="flex flex-col  w-[140px] text-center"
            key={details.credit_id}
          >
            <Image
              alt={details.name}
              className="rounded-md"
              src={`${IMAGE_BASE_URL}original${details.profile_path}`}
              height={120}
              width={140}
            />
            <span className="text-base">{details.name}</span>
            <span className="text-sm text-gray-400">{details.character}</span>
          </li>
        ) : null;
      })}
    </ul>
  );
};

export default Casts;
