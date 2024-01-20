import { CheckoutProps } from "@/types";
import { create } from "zustand";
type UseBoundStore = {
  MenuItems: null;
  Categories: null;
  User: null | string;
  Orders: CheckoutProps | null;
};
export const ProductStore = create<UseBoundStore>(() => ({
  MenuItems: null,
  Categories: null,
  User: null,
  Orders: null,
}));

export const AddMenuItems = (items: null | undefined) =>
  ProductStore.setState({ MenuItems: items });

export const AddCategories = (items: null) =>
  ProductStore.setState({ Categories: items });

export const AddUser = (user: null) => {
  ProductStore.setState({ User: user });
};

export const AddOrders = (orders: CheckoutProps) => {
  ProductStore.setState({ Orders: orders });
};
