import { configureStore } from "@reduxjs/toolkit";
import films from "./slices/filmsSlice";

const store = configureStore({
  reducer: { films },
  middleware: (getDefaultMiddlewear) => getDefaultMiddlewear(),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
