import { IFilm } from "../../store/slices/filmsSlice";

export const fetchFilms = async (
  genre: string = "mystery"
): Promise<IFilm[]> => {
  const data = await fetch(`https://api.sampleapis.com/movies/${genre}`);
  const result = data.json();

  return await result;
};
