import { getFoodCategory } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import Categories from "./Categories";
import Products from "./Products";
const Home = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["categories"],
    queryFn: getFoodCategory,
  });
  if (isSuccess) {
    console.log("okkkkkkkk");
  }
  if (isLoading) {
    console.log("loading");
  }
  return (
    <div className="py-4">
      <p className="py-5 text-4xl text-grays">
        Inspiration for your first order
      </p>
      <Categories data={data?.data} />
      <Products />
    </div>
  );
};

export default Home;
