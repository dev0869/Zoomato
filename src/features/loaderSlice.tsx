import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loader: false,
};
export const loaderSlice = createSlice({
  initialState,
  name: "loader",
  reducers: {
    setLoader: (state) => {
      state.loader = !state.loader;
    },
  },
});
export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
