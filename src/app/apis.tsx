import { checkoutType } from "@/lib/types";
import { Product } from "@/services/api";
import { ErrorResponse } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getCartItmes = createAsyncThunk(
  "getcartbyrestranaut",
  async (data, thunk) => {
    try {
      const res = await Product.post(
        "GetCartItemsByCustomerIdForRestaurant",
        data
      );
      return res.data;
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

export const checkoutApi = createAsyncThunk<checkoutType[], object>(
  "checkout",
  async (data, thunk) => {
    try {
      const res = await Product.post("/AddNewOrder", data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      thunk.rejectWithValue((error as ErrorResponse).response.data.message);
    }
  }
);
