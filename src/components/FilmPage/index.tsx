import { useParams } from "react-router-dom";
import { fetchFilm } from "../../utils/api";
import { useLayoutEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { IFilm } from "../../store/slices/filmsSlice";

const FilmPage = () => {
  const [film, setFilm] = useState<IFilm>();
  const { id } = useParams();
  const { currentCategory } = useAppSelector((state) => state.films);

  useLayoutEffect(() => {
    const handlerData = async () => {
      if (id) {
        const gettingfilm: IFilm = await fetchFilm(id, currentCategory);
        setFilm(() => gettingfilm);
      }
    };

    handlerData();
  }, [currentCategory, id]);

  return (
    <div>
      {film ? (
        <>
          <h2>{film.title}</h2>
          <img src={film.posterURL} alt={film.title} />
        </>
      ) : (
        <h3>No found.</h3>
      )}
    </div>
  );
};

export default FilmPage;
