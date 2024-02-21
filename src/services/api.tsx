/* eslint-disable react-refresh/only-export-components */
import { AddCategories, AddMenuItems, AddUser } from "@/features/ProductStore";
import { LoginInferSchema, RegisterSchemaType } from "@/lib/types";
import { CheckoutProps, ErrorResponse, LocartionProps } from "@/types";
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
      localStorage.setItem("user", JSON.stringify(res.data?.data));
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

export const RegisterApi = async (data: RegisterSchemaType) => {
  try {
    const res = await Product.post("/AddNewUser", data);
    return res.data;
  } catch (error) {
    toast.error((error as ErrorResponse).response.data.message);
  }
};

export const checkoutApi = async (data: CheckoutProps) => {
  try {
    const res = await Product.post("/AddNewOrder", data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    toast.error((error as ErrorResponse).response.data.message);
  }
};

export const getCurrentLocation = async (loc: LocartionProps) => {
  const { a, b } = loc;
  try {
    const res = await axios.get(
      `https://geocode.maps.co/reverse?lat=${a}&lon=${b}&api_key=65aa1fb0a1465715292287gvjfaf9e8`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
