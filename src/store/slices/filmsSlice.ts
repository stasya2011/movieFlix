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
  currentCategory: string;
}

const initialState: IFilms = {
  films: [],
  isLoading: false,
  currentCategory: "",
};

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
    swichCurrentCategory(state, action: PayloadAction<string>) {
      state.currentCategory = action.payload;
    },
  },
});

const { reducer, actions } = FilmSlice;
export const { setFilms, toggleLoading, swichCurrentCategory } = actions;
export default reducer;
