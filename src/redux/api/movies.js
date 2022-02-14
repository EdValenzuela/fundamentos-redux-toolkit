import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': '270be5fb23mshd55c70115c15f79p1d4f43jsn6d0a87eaf7df'
  }

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://imdb8.p.rapidapi.com'}),
    endpoints: builder => ({
        fetchMovies: builder.query({
            query: title => ({
                url: `/title/find?q=${title}`,
                method: 'GET',
                headers
            })
        })
    })
})

export const { useFetchMoviesQuery } = moviesApi;