import { useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  setFilms,
  swichCurrentCategory,
  toggleLoading,
} from "./store/slices/filmsSlice";
import { fetchFilms } from "./utils/api";
import ListOfFilms from "./components/ListOfFilms";
import Layout from "./components/Layout";
import FilmPage from "./components/FilmPage";
import styles from "./App.module.scss";
import List from "./List";

function App() {
  const dispatch = useAppDispatch();
  const { currentCategory } = useAppSelector((state) => state.films);

  const getFilms = useCallback(
    (genre: string = "mystery") => {
      dispatch(toggleLoading(true));
      dispatch(swichCurrentCategory(genre));
      setTimeout(async () => {
        try {
          const filmsData = await fetchFilms(genre);
          dispatch(setFilms({ films: filmsData }));
        } catch (err) {
          console.error("Ups...", err);
        } finally {
          dispatch(toggleLoading(false));
        }
      }, 3000);
    },
    [dispatch]
  );

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListOfFilms getFilms={getFilms} />} />
          <Route path={`/${currentCategory}/:id`} element={<FilmPage />} />
          {/*! TODO */}
          <Route path="/note" element={<h3>Notes...</h3>} />
          <Route path="*" element={<h2>Error..</h2>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
