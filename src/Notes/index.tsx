import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Note from "./Note";
import ButtonElement from "../components/custom-components/Button";
import styles from "./list.module.scss";
import { IFilm } from "../store/slices/filmsSlice";
import { v4 as uuidv4 } from "uuid";

interface IReview {
  text: any;
  data: string;
  id: string;
  checked: boolean;
  film: IFilm | null;
}
const Notes = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const { state } = useLocation();
  const myRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const data = localStorage.getItem("currentFilms");

    if (data) {
      const initialState = JSON.parse(data);
      setReviews(() => initialState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentFilms", JSON.stringify(reviews));
  }, [reviews]);

  const clearTextare = () => {
    if (myRef.current) {
      myRef.current.value = "";
    }
  };

  const submitForm = () => {
    setReviews((prevState) => {
      return [
        ...prevState,
        {
          text: myRef.current?.value,
          id: uuidv4(),
          checked: false,
          data: "date",
          film: JSON.parse(state.film),
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
            <Note review={review.text} film={review.film} />
          ))
        ) : (
          <h3>You don't have any movie reviews yet.</h3>
        )}
      </div>
    </>
  );
};

export default Notes;
