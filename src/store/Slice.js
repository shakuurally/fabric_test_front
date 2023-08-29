// store/movieSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create an API using RTK Query
export const movieApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fabric.up.railway.app/api/movies",
  }),
  endpoints: (builder) => ({
    fetchMatrix: builder.query({
      query: (movieTitle) => `/${movieTitle}`,
    }),
    // Define other endpoints here
  }),
});

// Export hooks for querying
export const { useFetchMatrixQuery } = movieApi;
// Export other hooks for other endpoints if needed

export default movieApi;
