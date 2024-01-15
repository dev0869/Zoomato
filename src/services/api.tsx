import axios from "axios";

export const api = axios.create({
  baseURL: "https://freeapi.miniprojectideas.com/api/zomato",
});

export const getFoodCategory = async () => {
  try {
    const res = await api.get("/GetAllFoodCategory");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllFoodItems = async () => {
  try {
    const res = await api.get("/GetAllMenu");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
