const HeroLoading = () => (
  <>
    <div className="hero relative h-5/6 shrink-0 mt-4">
      <div className="relative h-[90%] overflow-hidden rounded-[2rem] bg-slate-300">
        <div
          className="absolute h-9 w-9  border-transparent rounded-br-full  bottom-0 left-cl"
          style={{
            boxShadow:
              "7px 9px 0px 5px rgb(240 249 255 / var(--tw-bg-opacity))",
          }}
        />
        <div
          className="absolute h-9 w-9  border-transparent rounded-bl-full bottom-0 left-r-cl"
          style={{
            boxShadow:
              "-7px 9px 0px 5px rgb(240 249 255 / var(--tw-bg-opacity))",
          }}
        />
      </div>
      <div className="poster-details p-4 flex flex-col absolute bottom-0  h-28 outline outline-[12px] outline-sky-50 bg-slate-300 rounded-3xl"></div>
    </div>
  </>
);

export default HeroLoading;
