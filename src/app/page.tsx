import Card from "@/components/card";
import Image from "next/image";

const TEMP_DATA = new Array(30).fill({
  src: "https://image.tmdb.org/t/p/original//e5MUdXRjl90Up5dAEdvsGs4zAAS.jpg",
  alt: "movieName",
});

export default function Home(props) {
  return (
    <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto">
      <div className="relative h-5/6 shrink-0 mt-4">
        <div className="h-[90%] overflow-hidden rounded-[2rem]">
          <Image
            src="https://image.tmdb.org/t/p/original//m1rvaIIrDGwSYMt5mWG1WiTndmE.jpg"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={334}
            alt=''
          />
        <div className="h-10 w-10 absolute bottom-[10%] left-[33.7%] rounded-br-[2rem] " style={{boxShadow: `10px 8px 0 8px #f0f9ff`}} />
        <div className="h-10 w-10 absolute bottom-[10%] right-[33.7%] rounded-bl-[2rem] " style={{boxShadow: `-10px 8px 0 8px #f0f9ff`}} />
        </div>
        <div className="absolute left-1/2 -bottom-0 w-1/4 h-24 -translate-x-1/2 outline outline-[1rem] outline-sky-50 bg-sky-500 rounded-[1rem]" />
      </div>
      <ul>
        <li className="h-80">
          Recommendation
          <ul className="flex flex-nowrap gap-x-4 overflow-auto">
            {TEMP_DATA.map((movie, idx) => (
              <li className="shrink-0">
                <Card key={idx} movie={movie} />
              </li>
            ))}
          </ul>
        </li>
        <li className="h-80">
          Latest Movies
          <ul className="flex flex-nowrap gap-x-4 overflow-auto">
            {TEMP_DATA.map((movie, idx) => (
              <li key={idx} className="shrink-0">
                <Card key={idx} movie={movie} />
              </li>
            ))}
          </ul>
        </li>
        <li className="h-80">
          Latest Tv Shows
          <ul className="flex flex-nowrap gap-x-4 overflow-auto">
            {TEMP_DATA.map((movie, idx) => (
              <li key={idx} className="shrink-0">
                <Card movie={movie} />
              </li>
            ))}
          </ul>
        </li>
        <li className="h-80">Popular Movies</li>
        <li className="h-80">Popular Tv Shows</li>
      </ul>
    </main>
  );
}
