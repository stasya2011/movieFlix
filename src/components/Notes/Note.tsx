import { IReview } from ".";
import { IFilm } from "../../store/slices/filmsSlice";
import ButtonElement from "../custom-components/Button";
import styles from "./list.module.scss";
import classNames from "classnames";

const Note = ({
  review,
  film,
  deleteFilmFromList,
  editReview,
  isActive,
}: {
  review: IReview;
  film: IFilm | null;
  deleteFilmFromList: () => void;
  editReview: () => void;
  isActive: boolean;
}) => {
  return (
    <div className={classNames(styles.note, { [styles.active]: isActive })}>
      <div className={styles.review}>
        <p>{review.text}</p>
        <div>
          <ButtonElement
            action="Delete"
            classNameList="clear-btn"
            onClick={deleteFilmFromList}
          />
          <ButtonElement
            action="Edit"
            classNameList="add-btn"
            onClick={editReview}
          />
        </div>
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
