import { create } from "zustand";
type UseBoundStore = {
  MenuItems: null;
  Categories: null;
  User: null | string;
};
export const ProductStore = create<UseBoundStore>(() => ({
  MenuItems: null,
  Categories: null,
  User: null,
}));

export const AddMenuItems = (items) =>
  ProductStore.setState({ MenuItems: items });

export const AddCategories = (items) =>
  ProductStore.setState({ Categories: items });

export const AddUser = (user) => {
  ProductStore.setState({ User: user });
  localStorage.setItem("user", JSON.stringify(user));
};
