import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setFilms, toggleLoading } from "./store/slices/filmsSlice";
import { fetchFilms } from "./utils/api";
import CategoryButton from "./components/CategoryButton";
import ListOfFilms from "./components/ListOfFilms";
import Loading from "./components/Loading";
import styles from "./App.module.scss";

const endpoints = [
  "action-adventure",
  "classic",
  "comedy",
  "drama",
  "horror",
  "family",
  "mystery",
  "scifi-fantasy",
  "western",
];

function App() {
  const { isLoading } = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  const getFilms = useCallback(
    (genre: string = "mystery") => {
      dispatch(toggleLoading(true));

      setTimeout(async () => {
        const filmsData = await fetchFilms(genre);
        dispatch(setFilms({ films: filmsData }));
        dispatch(toggleLoading(false));
      }, 3000);
    },
    [dispatch]
  );

  return (
    <div className={styles.app}>
      <div className={styles.endpoints}>
        {endpoints.map((endpoint) => (
          <CategoryButton
            onClick={() => getFilms(endpoint)}
            category={endpoint}
          />
        ))}
      </div>

      {isLoading ? <Loading /> : <ListOfFilms />}
    </div>
  );
}

export default App;
