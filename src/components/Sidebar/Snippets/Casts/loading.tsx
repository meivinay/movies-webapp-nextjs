const tempArr = [];

for (let i = 0; i < 10; i++) {
  tempArr.push(i);
}
const Loading = () => (
  <ul className="flex flex-wrap gap-4">
    {tempArr.map((_, idx) => (
      <li
        key={idx}
        className="flex flex-col h-[240px] w-[140px] text-center bg-slate-400"
      ></li>
    ))}
  </ul>
);

export default Loading;
