import { useAppSelector } from "../../hooks";
import styles from "./listOfFilms.module.scss";

const ListOfFilms = () => {
  const { films } = useAppSelector((state) => state.films);

  return (
    <div className={styles.wrapper}>
      {films.length ? (
        <>
          <input type="text" />
          <ul className={styles["list-wrapper"]}>
            {films.map((film) => (
              <li key={film.imdbId}>
                <h3>{film.title}</h3>
                <img src={film.posterURL} alt={film.title} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        "No result was found for your query."
      )}
    </div>
  );
};

export default ListOfFilms;
