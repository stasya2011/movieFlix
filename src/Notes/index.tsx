import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { IFilm } from "../store/slices/filmsSlice";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";
import ButtonElement from "../components/custom-components/Button";
import styles from "./list.module.scss";

export interface IReview {
  text: string;
  data: string;
  id: string;
  checked: boolean;
  film: IFilm | null;
}
const Notes = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [isFormOpen, setIsFilmOpen] = useState<boolean>(false);
  const [editedReview, setEditedReview] = useState({ isEdit: false, id: "" });
  const { state } = useLocation();
  const myRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const data = localStorage.getItem("currentFilms");

    if (state) {
      setIsFilmOpen(() => true);
    }

    if (myRef.current) {
      myRef.current.focus();
    }

    if (data?.length) {
      const initialState = JSON.parse(data);
      setReviews(() => initialState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (!editedReview.isEdit) {
      setReviews((prevState) => {
        return [
          ...prevState,
          {
            text: myRef.current ? myRef.current.value : "",
            id: uuidv4(),
            checked: false,
            data: "date",
            film: JSON.parse(state.film),
          },
        ];
      });
    } else {
      setReviews((prevState) =>
        prevState.map((el) => {
          if (el.id === editedReview.id && myRef.current) {
            el.text = myRef.current.value;
          }
          return el;
        })
      );
    }

    setIsFilmOpen(() => false);
    setEditedReview((prevState) => ({ ...prevState, isEdit: false }));
  };

  const deleteFilmFromList = (id: string) => {
    setReviews((prevState) => {
      return prevState.filter((element) => element.id !== id);
    });
  };

  const editReview = (id: string) => {
    setIsFilmOpen(() => true);

    if (myRef.current) {
      setEditedReview(() => ({ isEdit: true, id: id }));
      const text = reviews.find((ele) => ele.id === id);
      myRef.current.value = text ? text.text : "";
    }
  };

  return (
    <>
      <form
        style={{ display: isFormOpen ? "flex" : "none" }}
        onSubmit={(e) => e.preventDefault()}
        className={styles.wrapper}
      >
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
            action={editedReview.isEdit ? "Update" : "Add"}
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
            <Note
              isActive={editedReview.isEdit}
              deleteFilmFromList={() => deleteFilmFromList(review.id)}
              editReview={() => editReview(review.id)}
              review={review}
              film={review.film}
              key={review.id}
            />
          ))
        ) : (
          <h3>You don't have any movie reviews yet.</h3>
        )}
      </div>
    </>
  );
};

export default Notes;
