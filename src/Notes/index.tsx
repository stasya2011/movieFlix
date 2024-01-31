import { useRef, useState } from "react";
import styles from "./list.module.scss";

interface IReview {
  text: any;
  data: string;
  id: string;
  checked: boolean;
}
const Notes = () => {
  const [reviews, setReviews] = useState<IReview[] | []>([]);
  const myRef = useRef<HTMLTextAreaElement>(null);

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
        <button className={styles["add-btn"]} onClick={submitForm}>
          Add
        </button>
        <button
          className={styles["add-btn"]}
          style={{ backgroundColor: "rgb(139, 46, 58)" }}
          onClick={clearTextare}
        >
          Clear
        </button>
      </form>
      <div>
        {reviews && reviews.length ? (
          reviews.map((review) => <div>{review.text}</div>)
        ) : (
          <h3>You don't have any movie reviews yet.</h3>
        )}
      </div>
    </>
  );
};

export default Notes;

// const inithialStateForBall = { x: 0, y: 10 };
// const inithialState: number = 0;
// interface IAction {
//   type: string;
//   payload?: any;
// }
// const reducer = (state: number = inithialState, action: IAction) => {
//   switch (action.type) {
//     case "ArrowRight":
//       return state + 20;
//     case "ArrowLeft":
//       return state - 20;
//     default:
//       return;
//   }
// };
// const List = () => {
//   const [state, dispatch] = useReducer(reducer, inithialState);
//   const [position, setPosition] = useState(inithialStateForBall);

//   const animationRef = useRef();
//   const mouseEvent = (e: React.KeyboardEvent<HTMLDivElement>) => {
//     console.log("+++ // +++", e.code);
//     dispatch({ type: e.code });
//   };

//   const randomBall = () => {
//     const newX = +Math.random() * 100 + 50; // Генерация случайного значения для X-координаты
//     const newY = position.y + Math.random() * 100;

//     setPosition((prevState) => ({
//       x: prevState.x + 500 * Math.random(),
//       y: prevState.y + 500 * Math.random(),
//     }));
//   };

//   // useEffect(() => {
//   //   const timeId = setTimeout(() => requestAnimationFrame(randomBall), 2000);

//   //   return () => {
//   //     clearTimeout(timeId);
//   //   };
//   // }, [position]);

//   return (
//     <div>
//       <div className={styles["wrapper"]} onKeyDown={mouseEvent} tabIndex={0}>
//         <div
//           className={styles.ball}
//           style={{ left: position.x, bottom: position.y }}
//         ></div>
//         <div style={{ left: state }} className={styles.item}></div>
//       </div>
//       <button onClick={randomBall}>Start</button>
//     </div>
//   );
// };
