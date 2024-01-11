import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const getMovie = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addListMovie: (state, action) => {
      const data = action.payload.Search.forEach((item) =>
        state.items.push(item)
      );
    },
  },
});

export const { addListMovie } = getMovie.actions;
export default getMovie;
