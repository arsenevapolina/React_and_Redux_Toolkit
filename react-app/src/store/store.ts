import { configureStore } from "@reduxjs/toolkit";
import favoriteMoviesReducer from "./favoriteMoviesSlice";

const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(
    "favoriteMovies",
    JSON.stringify(state.favoriteMovies.movies)
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
