import { useCallback, useRef } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setFilms, toggleLoading } from "./store/slices/filmsSlice";
import CategoryButton from "./components/CategoryButton";
import ListOfFilms from "./components/ListOfFilms";
import Loading from "./Loading";

function App() {
  const myRef = useRef<HTMLButtonElement>(null);
  const { isLoading } = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  const getFilms = useCallback(
    (genre: string = "mystery") => {
      dispatch(toggleLoading(true));
      setTimeout(async () => {
        const data = await fetch(`https://api.sampleapis.com/movies/${genre}`);
        const filmsData = await data.json();
        dispatch(setFilms({ films: filmsData }));
        dispatch(toggleLoading(false));
      }, 3000);
    },
    [dispatch]
  );

  return (
    <div className="App">
      <CategoryButton onClick={getFilms} category="mystery" ref={myRef} />
      {isLoading ? <Loading /> : <ListOfFilms />}
    </div>
  );
}

export default App;