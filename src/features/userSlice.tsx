import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
};
export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {},
});

export default userSlice.reducer;
