import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Note from "./Note";
import ButtonElement from "../components/custom-components/Button";
import styles from "./list.module.scss";

interface IReview {
  text: any;
  data: string;
  id: string;
  checked: boolean;
}
const Notes = () => {
  const [reviews, setReviews] = useState<IReview[] | []>([]);
  const [currentFilm, setCurrentFilm] = useState(null);

  const { state } = useLocation();
  const myRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    console.log(state);
    if (state) {
      const film = JSON.parse(state.film);

      setCurrentFilm(film);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearTextare = () => {
    if (myRef.current) {
      myRef.current.value = "";
    }
  };

  const submitForm = () => {
    setReviews((prevState) => {
      console.log("+++ prevState", prevState);

      return [
        ...prevState,
        {
          text: myRef.current?.value,
          id: "3333",
          checked: false,
          data: "data ",
        },
      ];
    });
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className={styles.wrapper}>
        <textarea
          ref={myRef}
          name="note"
          id="id-note"
          cols={20}
          rows={7}
          placeholder="Add a review of film."
        ></textarea>
        <div className={styles["btn-wrapper"]}>
          <ButtonElement
            action="Add"
            onClick={submitForm}
            classNameList={"add-btn"}
          />
          <ButtonElement
            action="Clear"
            onClick={clearTextare}
            classNameList={"clear-btn"}
          />
        </div>
      </form>
      <div>
        {reviews && reviews.length ? (
          reviews.map((review) => (
            <Note review={review.text} film={currentFilm} />
          ))
        ) : (
          <h3>You don't have any movie reviews yet.</h3>
        )}
      </div>
    </>
  );
};

export default Notes;
