import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IFilm {
  id: number;
  title: string;
  posterURL: string;
  imdbId: string;
}

interface IFilms {
  films: IFilm[];
  isLoading: boolean;
}

const initialState: IFilms = { films: [], isLoading: false };

const FilmSlice = createSlice({
  initialState,
  name: "films",
  reducers: {
    setFilms(state, action: PayloadAction<{ films: IFilm[] }>) {
      state.films = [...action.payload.films];
    },
    toggleLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

const { reducer, actions } = FilmSlice;
export const { setFilms, toggleLoading } = actions;
export default reducer;
