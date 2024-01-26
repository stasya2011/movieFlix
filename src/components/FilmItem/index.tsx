import { Link } from "react-router-dom";
import { IFilm } from "../../store/slices/filmsSlice";
import { useAppSelector } from "../../hooks";

const FilmItem = ({ film }: { film: IFilm }) => {
  const { currentCategory } = useAppSelector((state) => state.films);
  return (
    <Link to={`/${currentCategory}/${film.id}`}>
      <li key={film.imdbId}>
        <h3>{film.title}</h3>
        <img src={film.posterURL} alt={film.title} />
      </li>
    </Link>
  );
};

export default FilmItem;
