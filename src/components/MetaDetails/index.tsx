import getGenresString from "@/utils/getGenresString";
import styles from "@/styles/metaDetails.module.css";

const MetaDetails = (props) => {
  const {
    details: { tagline, overview, release_date: releaseDate, runtime, genres },
  } = props;

  return (
    <div className={`grow shrink basis-0 p-4 ${styles["meta-details"]}`}>
      <h2 className="text-6xl font-bold mb-2">Overview</h2>
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
    </div>
  );
};

export default MetaDetails;
