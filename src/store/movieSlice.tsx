import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  activeButton: "",
  filterTitle: "",
  filterType: "",
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
    setFilterTitle: (state, action) => {
      state.filterTitle = action.payload;
    },
    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },
  },
});

export const { setData, setLoading, setActiveButton, setFilterTitle, setFilterType } = movieSlice.actions;
export default movieSlice.reducer;
