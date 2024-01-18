import { CartApi, checkoutApi, getCartItmes } from "@/app/apis";
import { createSlice } from "@reduxjs/toolkit";

export interface CartType {
  customerId: number;
  itemId: number;
  quantity: number;
}
export interface ProductType {
  restaurantID: number;
  price: number;
  menuItemName: string;
  itemID: number;
  description: string;
  restaurantName: string;
  availability: boolean;
  photoUrl: string;
  categoryName: string;
}
const initialState = {
  cartItems: [] as CartType[],
  cartItem: [] as CartType[],

  Products: [] as ProductType[],
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProducts: (state, action) => {
      state.Products = action.payload;
    },
    addCarts: (state, action) => {
      state.cartItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(CartApi.fulfilled, (state, action) => {
    //   state.cartItems.push(action.payload);
    //   localStorage.setItem("carts", JSON.stringify(action.payload));
    // });
    builder.addCase(getCartItmes.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
    builder.addCase(checkoutApi.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const { addProducts, addCarts } = cartSlice.actions;
export default cartSlice.reducer;
