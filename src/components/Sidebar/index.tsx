import NavBar from "./Snippets/NavBar";
import Overview from "./Snippets/Overview";
import Casts from "./Snippets/Casts";
import styles from "@/styles/metaDetails.module.css";
import { Suspense } from "react";
import Loading from "./Snippets/Casts/loading";

const NAV_LIST: string[] = ["overview", "casts"];

const MetaDetails = (props) => {
  const { details, searchParams } = props;

  return (
    <div
      className={`grow shrink basis-0 p-4 overflow-auto ${styles["meta-details"]}`}
    >
      <NavBar navList={NAV_LIST} />
      {searchParams.q === NAV_LIST[0] || !searchParams.q ? (
        <Overview details={details} />
      ) : null}
      {searchParams.q === NAV_LIST[1] ? (
        <Suspense fallback={<Loading />}>
          <Casts details={details} type={searchParams.type} />
        </Suspense>
      ) : null}
    </div>
  );
};

export default MetaDetails;
