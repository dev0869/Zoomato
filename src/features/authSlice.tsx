/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Product } from "@/services/api";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ErrorResponse } from "@/types";
import { toast } from "react-toastify";
import { RegisterSchemaType } from "@/lib/types";
const initialState = {
  loading: false,
  user: null,
} as {
  loading: boolean;
  user: RegisterSchemaType | void | null;
};

export const RegisterApis = createAsyncThunk<void, object>(
  "Register Api",
  async (data, thunk) => {
    try {
      const res = await Product.post("/AddNewUser", data);
      return res.data;
    } catch (error) {
      return thunk.rejectWithValue(
        (error as ErrorResponse).response.data.message
      );
    }
  }
);

export const loginApis = createAsyncThunk<void, object>(
  "login api",
  async (data, thunk) => {
    try {
      const res = await Product.post("/Login", data);
      if (res.data.result === false) {
        toast.error(`${res.data.message}`);
      } else if (res.data.result === true) {
        toast.success("Login Successfully");
      }
      return res.data?.data;
    } catch (error) {
      return thunk.rejectWithValue(
        (error as ErrorResponse).response.data.message
      );
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(RegisterApis.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      RegisterApis.fulfilled,
      (state, action: PayloadAction<any>) => {
        if (action.payload.result === false) {
          toast.error(`${action.payload.message}`);
        } else if (action.payload.result === true) {
          toast.success("User Registered Successfully");
        }
        state.loading = false;
      }
    );
    builder.addCase(RegisterApis.rejected, (_state, action) => {
      toast.error(action.payload as string);
    });
    // login builder
    builder.addCase(loginApis.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginApis.fulfilled, (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
