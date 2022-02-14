import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../redux/api/movies'
import moviesReducerSlice from '../redux/slices/movies'
import MoviesReducer from '../redux/reducers/movies';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    moviesReducerSlice,
    MoviesReducer
  },
  middleware: getdefaultMiddleware => getdefaultMiddleware().concat(moviesApi.middleware)
});
