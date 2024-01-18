import { create } from "zustand";
export const CartStore = create((set) => ({
  cartDetails: [],
}));

export const AddCartDetails = (items) =>
  CartStore.setState((state) => ({
    cartDetails: [...state.cartDetails, items],
  }));
