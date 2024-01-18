import { useAppDispatch } from "@/app/hooks";
import Card from "@/components/Card";
import { addProducts } from "@/features/cartSlice";
import { getAllFoodItems } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const dispatch = useAppDispatch();
  const { data, isSuccess } = useQuery({
    queryKey: ["food"],
    queryFn: getAllFoodItems,
  });
  // console.log(data?.data);
  if (isSuccess) {
    dispatch(addProducts(data?.data));
  }
  return (
    <div className="py-8">
      <p className="text-3xl py-8 text-grays">Best Food in Delhi NCR</p>
      <Card datas={data?.data} />
    </div>
  );
};

export default Products;
