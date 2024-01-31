import { IFilm } from "../store/slices/filmsSlice";
import styles from "./list.module.scss";

const Note = ({ review, film }: { review: string; film: IFilm | null }) => {
  return (
    <div className={styles.note}>
      <div className={styles.review}>
        <p>{review}</p>
      </div>

      {film ? (
        <div className={styles["film"]}>
          <h3>{film.title}</h3>
          <img src={film.posterURL} alt={film.title} width={100} />
        </div>
      ) : (
        <h3>++++++++</h3>
      )}
    </div>
  );
};

export default Note;
