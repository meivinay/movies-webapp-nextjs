import { getMovieDetails } from "@/api";
import MetaDetails from "@/components/MetaDetails";
const IMAGE_BASE_URL = process.env.TMDB_IMAGE_BASE_URL;
import styles from "@/styles/curve.module.css";

const Details = async (props: {
  searchParams: {
    type: string;
    id: string;
  };
}) => {
  const { searchParams } = props;
  const movieId = Number(searchParams.id);
  const movieDetails = await (await getMovieDetails(movieId)).json();
  const {
    poster_path: posterPath,
    vote_average: voteAverage,
    title,
  } = movieDetails;

  return (
    <main className="flex grow gap-x-4 max-h-full">
      <div className="grow-3 shrink relative">
        <img
          src={`${IMAGE_BASE_URL}original${posterPath}`}
          className="h-full w-full object-cover object-top"
        />
        <div
          className={`absolute rounded-bl-full ${styles["main-detail-meta-top-left"]}`}
        />
        <div className="flex absolute bottom-0 right-0 left-0 ">
          <div className="shrink-0 bottom-0 h-[240px] w-[160px]">
            <p className="absolute top-[-16px] left-[160px] text-black bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center shadow-rating-circle">
              {voteAverage}
            </p>
            <img
              src={`${IMAGE_BASE_URL}original${posterPath}`}
              className=" shadow-movie-main-img h-full w-full "
            ></img>
          </div>
          <div className="shrink-0 p-7 bg-white  bottom-0 left-44 rounded-3xl shadow-movie-main-meta self-end ml-4">
            <h1 className="text-xl">{title}</h1>
            <div className="flex gap-x-2">
              <button type="button" className="bg-[rgb(238, 238, 238)]">
                Watch Trailer
              </button>
              <button>Bookmark</button>
              <button>Share</button>
            </div>
          </div>
        </div>
      </div>
      <MetaDetails details={movieDetails} />
    </main>
  );
};

export default Details;
