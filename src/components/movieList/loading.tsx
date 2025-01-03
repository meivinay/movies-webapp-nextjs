const MovieListSkeleton = () => {
  const arr = Array.from("0".repeat(10));
  return (
    <ul className="flex flex-nowrap gap-x-4 overflow-auto">
      {arr.map((_, idx) => (
        <li
          key={idx}
          className="h-[270px] w-44 bg-slate-300 flex-shrink-0"
        ></li>
      ))}
    </ul>
  );
};

export default MovieListSkeleton;
