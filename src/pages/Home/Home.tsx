import { getAllFoodItems, getFoodCategory } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import Products from "./Products";
import Product from "../Product/Product";
import Category from "./Category";
const Home = () => {
  const {
    data,
    isLoading: m,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getFoodCategory,
  });
  if (isError) {
    console.log(error, ";errorrdddd");
  }
  const { data: datas, isLoading: n } = useQuery({
    queryKey: ["Items"],
    queryFn: getAllFoodItems,
  });

  return (
    <div className="py-4">
      <div className="bg-[#F8F8F8]">
        <Category />
      </div>
      <Products />
    </div>
  );
};

export default Home;
