import { configureStore } from "@reduxjs/toolkit";
import getMovie from "./getMovie";
// import cartSlice from "./features/cart/cartSlice";
export default configureStore({
  reducer: {
    movie: getMovie.reducer,
  },
});
