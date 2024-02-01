import { Link, useParams } from "react-router-dom";
import { fetchFilm } from "../../utils/api";
import { useLayoutEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { IFilm } from "../../store/slices/filmsSlice";
import ButtonElement from "../custom-components/Button";
import styles from "./filmPage.module.scss";

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
    <div className={styles.wrapper}>
      {film ? (
        <>
          <h2>{film.title}</h2>
          <img src={film.posterURL} alt={film.title} />
          <div>
            <Link to={"/note"} state={{ film: JSON.stringify(film) }}>
              <ButtonElement
                action="Add a movie review"
                classNameList="add-btn"
                onClick={() => console.log("click")}
              />
            </Link>
          </div>
        </>
      ) : (
        <h3>No found.</h3>
      )}
    </div>
  );
};

export default FilmPage;
