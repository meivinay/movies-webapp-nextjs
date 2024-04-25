import Image from "next/image";

export default function Home(props) {

  return (
    <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto">
      <div className="carousel h-4/5 outline shrink-0"></div>
      <ul>
        <li className="h-80">Recommendation</li>
        <li className="h-80">Latest Movies</li>
        <li className="h-80">Latest Tv Shows</li>
        <li className="h-80">Popular Movies</li>
        <li className="h-80">Popular Tv Shows</li>
      </ul>
    </main>
  );
}
