import axios from "axios";
import { RegisterSchemaType } from "@/lib/types";
export const Product = axios.create({
  baseURL: "https://freeapi.miniprojectideas.com/api/zomato",
});

export const getFoodCategory = async () => {
  try {
    const res = await Product.get("/GetAllFoodCategory");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllFoodItems = async () => {
  try {
    const res = await Product.get("/GetAllMenu");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// auth api

export const RegisterApi = async ({ data }: { data: RegisterSchemaType }) => {
  try {
    const res = await Product.post("/AddNewUser", data);
    return res.data;
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
