// movieSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  activeButton: "",

};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
  },
});

export const { setData, setLoading, setActiveButton } = movieSlice.actions;
export default movieSlice.reducer;
