import { createAction } from '@reduxjs/toolkit'

//importar actions de slices, solo para cuestiones demostrativas
import { startFetchMovieRatings as startFetchMovieRatingsSlice,
    successFetchMovieRatings as successFetchMovieRatingsSlice,
    errorFetchMovieRatings as errorFetchMovieRatingsSlice,
    startFetchMovieDetail as startFetchMovieDetailSlice,
    successFetchMovieDetail as successFetchMovieDetailSlice,
    errorFetchMovieDetail as errorFetchMovieDetailSlice } from '../slices/movies'

const BASE_URL = 'https://imdb8.p.rapidapi.com/title';
const headers = {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "270be5fb23mshd55c70115c15f79p1d4f43jsn6d0a87eaf7df"
}

export const startFetchMovieRatings = createAction('START_FETCH_MOVIE_RATINGS');
export const successFetchMovieRatings = createAction('SUCCESS_FETCH_MOVIE_RATINGS');
export const errorFetchMovieRatings =  createAction('ERROR_FETCH_MOVIE_RATINGS');

export const fetchMovieRatings = (movieId) => async(dispatch) => {
    try {
        //dispatch(startFetchMovieRatings());

        dispatch(startFetchMovieRatingsSlice())

        //Iniciar la llamada API
        const resp = await fetch(`${BASE_URL}/get-ratings?tconst=${movieId}`,{headers})
        const data = await resp.json();
        dispatch(successFetchMovieRatingsSlice({data}))
        //dispatch(successFetchMovieRatings({data}));
    } catch (error) {
        //dispatch(errorFetchMovieRatings({error}));
        dispatch(errorFetchMovieRatingsSlice({error}))
    }
}

export const startFetchMovieDetail = createAction('START_FETCH_MOVIE_DETAIL');
export const successFetchMovieDetail = createAction('SUCCESS_FETCH_MOVIE_DETAIL');
export const errorFetchMovieDetail = createAction('ERROR_FETCH_MOVIE_DETAIL');

export const fetchMovieDetail = (movieId) => async(dispatch) => {
    try {
        //dispatch(startFetchMovieDetail())
        dispatch(startFetchMovieDetailSlice())
        const overviewDetailsResponse = await fetch(`${BASE_URL}/get-overview-details?tconst=${movieId}`,{headers});
        const overviewDetailsData = await overviewDetailsResponse.json();

        const topCastResponse = await fetch(`${BASE_URL}/get-top-cast?tconst=${movieId}`,{headers});
        const topCastData = await topCastResponse.json();

        const detailsResponse = await fetch(`${BASE_URL}/get-details?tconst=${movieId}`,{headers});
        const detailsData = await detailsResponse.json();

        const fullCreditsResponse = await fetch(`${BASE_URL}/get-full-credits?tconst=${movieId}`,{headers});
        const fullCreditsData = await fullCreditsResponse.json();

        dispatch(successFetchMovieDetailSlice({
            overview: overviewDetailsData,
            topCast: topCastData,
            details: detailsData,
            fullCredits: fullCreditsData
        }))

        /* dispatch(successFetchMovieDetail({
            overview: overviewDetailsData,
            topCast: topCastData,
            details: detailsData,
            fullCredits: fullCreditsData
        })); */
    } catch (error) {
        //dispatch(errorFetchMovieDetail({error}))
        dispatch(errorFetchMovieDetailSlice({error}))
    }
}