import { IFilm } from "../../store/slices/filmsSlice";

const URL = "https://api.sampleapis.com/movies/";

export const fetchFilms = async (
  genre: string = "mystery"
): Promise<IFilm[]> => {
  const data = await fetch(`${URL}${genre}`);
  const result = await data.json();

  return result;
};

export const fetchFilm = async (
  id: string,
  currentCategory: string = "mystery"
): Promise<IFilm> => {
  const data = await fetch(`${URL}${currentCategory}/${id}`);
  const result = await data.json();

  return result;
};
