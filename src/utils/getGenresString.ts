type Genres = {
  name: string;
};
const getGenresString = (genres: Genres[]): string =>
  genres.reduce(
    (acc, curr, index) => `${acc ? `${acc}, ${curr.name}` : curr.name}`,
    ""
  );

export default getGenresString;
