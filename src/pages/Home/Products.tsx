import Card from "@/components/Card";
import ChildLayout from "@/layout/ChildLayout";
const Products = () => {
  return (
    <ChildLayout>
      <div className="py-8">
        <p className="text-3xl py-8 text-grays">Best Food in Delhi NCR</p>
        <Card />
      </div>
    </ChildLayout>
  );
};

export default Products;
