import { AddCategories, AddMenuItems, AddUser } from "@/features/ProductStore";
import { LoginInferSchema } from "@/lib/types";
import { ErrorResponse } from "@/types";
import axios from "axios";
import { toast } from "react-toastify";
export const Product = axios.create({
  baseURL: "https://freeapi.miniprojectideas.com/api/zomato",
});

export const getFoodCategory = async () => {
  try {
    const res = await Product.get("/GetAllFoodCategory");
    AddCategories(res?.data?.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllFoodItems = async () => {
  try {
    const res = await Product.get("/GetAllMenu");
    AddMenuItems(res?.data?.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginApi = async (data: LoginInferSchema) => {
  try {
    const res = await Product.post("/Login", data);
    if (res.data.result === false) {
      toast.error(`${res.data.message}`);
    } else if (res.data.result === true) {
      // localStorage.setItem("user", JSON.stringify(res.data.data));

      toast.success("Login Successfully");
    }
    return res.data?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCustumer = async (id: number | null) => {
  try {
    const res = await Product.get(`GetUserByUserId?userId=${id}`);
    if (res.data.result === false) {
      toast.error(res.data.message);
    } else if (res.data.result === true) {
      AddUser(res.data.data);
      toast.success("User Login Successfully!");
    }
    return res.data.data;
  } catch (error) {
    toast.error((error as ErrorResponse).response.data.message);
  }
};

export const CartApi = async (data) => {
  try {
    const res = await Product.post("/AddToCart", data);
    if (res.data.result === false) {
      toast.error(`${res.data.message}`);
    } else if (res.data.result === true) {
      toast.success(`${res.data.message}`);
    }
    return res.data?.data;
  } catch (error) {
    toast.error((error as ErrorResponse).response.data.message);
  }
};
