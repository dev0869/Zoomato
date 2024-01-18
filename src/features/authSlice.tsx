import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RegisterSchemaType } from "@/lib/types";
import { RegisterApis, loginApis } from "@/app/apis";
import React from "react";
const initialState = {
  loading: false,
  user: null,
} as {
  loading: boolean;
  user: RegisterSchemaType | null | React.ReactNode | void;
};

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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
