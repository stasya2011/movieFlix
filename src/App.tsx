import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setFilms, toggleLoading } from "./store/slices/filmsSlice";
import CategoryButton from "./components/CategoryButton";
import ListOfFilms from "./components/ListOfFilms";
import Loading from "./Loading";
import { fetchFilms } from "./utils/api";

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
    <div className="App">
      <CategoryButton onClick={getFilms} category="mystery" />
      {isLoading ? <Loading /> : <ListOfFilms />}
    </div>
  );
}

export default App;
