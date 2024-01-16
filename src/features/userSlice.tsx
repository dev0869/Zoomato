import { Product } from "@/services/api";
import { ErrorResponse } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
};

export const CartApi = createAsyncThunk<void, object>(
  "AddCarts",
  async (data, thunk) => {
    try {
      const res = await Product.post("/AddToCart", data);
      if (res.data.result === false) {
        toast.error(`${res.data.message}`);
      } else if (res.data.result === true) {
        toast.success(`${res.data.message}`);
      }
      return res.data?.data;
    } catch (error) {
      return thunk.rejectWithValue(
        (error as ErrorResponse).response.data.message
      );
    }
  }
);

export const getCartApi = createAsyncThunk<void, object>(
  "getCarts",
  async (data, thunk) => {
    try {
      const res = await Product.post("/AddToCart", data);
      if (res.data.result === false) {
        toast.error(`${res.data.message}`);
      } else if (res.data.result === true) {
        toast.success(`${res.data.message}`);
      }
      return res.data?.data;
    } catch (error) {
      return thunk.rejectWithValue(
        (error as ErrorResponse).response.data.message
      );
    }
  }
);
export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {},
  extraReducers(builder) {
    builder.addCase(CartApi.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      console.log(state.cartItems);
    });
  },
});

export default cartSlice.reducer;
