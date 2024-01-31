import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import styles from "./listOfFilms.module.scss";
import { setFilms, toggleLoading } from "../../store/slices/filmsSlice";
import FilmItem from "../FilmItem";
import Form from "../Form";
import Loading from "../Loading";
import ListOfEndpoints from "../ListOfEndpoints";

const ListOfFilms = ({ getFilms }: { getFilms: (str: string) => void }) => {
  const dispatch = useAppDispatch();
  const { films, isLoading } = useAppSelector((state) => state.films);
  const ref = useRef<HTMLInputElement | null>(null);

  const backToPrevState = (films: string) => {
    dispatch(toggleLoading(true));
    dispatch(setFilms({ films: JSON.parse(films) }));
    localStorage.removeItem("prevFilms");
  };

  const search = () => {
    if (ref && "current" in ref && ref.current && ref.current.value) {
      dispatch(toggleLoading(true));
      const key = ref.current.value;
      localStorage.setItem("prevFilms", JSON.stringify(films));
      const selectedArr = films.filter((film) =>
        film.title.toLocaleLowerCase().includes(key.toLocaleLowerCase())
      );
      if (selectedArr.length) {
        dispatch(setFilms({ films: selectedArr }));
      }
      dispatch(toggleLoading(false));
    } else {
      const films = localStorage.getItem("prevFilms");
      if (films) {
        backToPrevState(films);
      }
      dispatch(toggleLoading(false));
    }
  };

  return (
    <>
      <ListOfEndpoints getFilms={getFilms} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.wrapper}>
          {films.length ? (
            <>
              <Form search={search} ref={ref} />

              <ul className={styles["list-wrapper"]}>
                {films.map((film) => (
                  <FilmItem film={film} key={film.id} />
                ))}
              </ul>
            </>
          ) : (
            "No result was found for your query."
          )}
        </div>
      )}
    </>
  );
};

export default ListOfFilms;
