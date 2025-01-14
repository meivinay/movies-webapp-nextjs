import getGenresString from "@/utils/getGenresString";

const Overview = ({
  details: { tagline, overview, release_date: releaseDate, runtime, genres },
}) => (
  <>
    <h2 className="font-bold mb-2">{tagline}</h2>
    <p>{overview}</p>
    <p className="flex flex-col">
      <span className="font-bold">Release</span>
      {releaseDate}
    </p>
    <p className="flex flex-col">
      <span className="font-bold">Runtime</span>
      {runtime}
    </p>
    <p className="flex flex-col">
      <span className="font-bold">Genre</span>
      {getGenresString(genres)}
    </p>
  </>
);

export default Overview;
