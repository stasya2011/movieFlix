import { useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setFilms, toggleLoading } from "./store/slices/filmsSlice";
import { fetchFilms } from "./utils/api";
import ListOfFilms from "./components/ListOfFilms";
import Loading from "./components/Loading";
import styles from "./App.module.scss";
import Layout from "./components/Layout";

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
      <Routes>
        <Route path="/" element={<Layout getFilms={getFilms} />}>
          <Route index element={isLoading ? <Loading /> : <ListOfFilms />} />
          <Route path="/note" element={<h2>Notes...</h2>} />
          <Route path="*" element={<h2>Error..</h2>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
