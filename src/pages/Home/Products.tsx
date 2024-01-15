import Card from "@/components/Card";
import { getAllFoodItems } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const { data } = useQuery({
    queryKey: ["food"],
    queryFn: getAllFoodItems,
  });
  console.log(data);
  return (
    <div className="py-8">
      <p className="text-3xl py-8 text-grays">Best Food in Delhi NCR</p>
      <Card datas={data?.data} />
    </div>
  );
};

export default Products;
