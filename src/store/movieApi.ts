// movieApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "../interface";

export const movieApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fabric.up.railway.app/api/movies/",
  }),
  endpoints: (builder) => ({
    fetchMatrix: builder.query<Movie[], void>({
      query: () => "fetch-matrix",
    }),
    fetchMatrixReloaded: builder.query<Movie[], void>({
      query: () => "fetch-matrix-reloaded",
    }),
    fetchMatrixRevolutions: builder.query<Movie[], void>({
      query: () => "fetch-matrix-revolutions",
    }),
  }),
});

export const {
  useFetchMatrixQuery,
  useFetchMatrixReloadedQuery,
  useFetchMatrixRevolutionsQuery,
} = movieApi;
