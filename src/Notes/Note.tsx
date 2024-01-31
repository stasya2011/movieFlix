import { IReview } from ".";
import { IFilm } from "../store/slices/filmsSlice";
import ButtonElement from "../components/custom-components/Button";
import styles from "./list.module.scss";
import { useEffect } from "react";

const Note = ({
  review,
  film,
  deleteFilmFromList,
}: {
  review: IReview;
  film: IFilm | null;
  deleteFilmFromList: () => void;
}) => {
  return (
    <div className={styles.note}>
      <div className={styles.review}>
        <p>{review.text}</p>
        <ButtonElement
          action="Delete"
          classNameList="clear-btn"
          onClick={deleteFilmFromList}
        />
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
