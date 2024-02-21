import { Product } from "@/services/api";
import AdminApp from "./AdminApp";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/components/Navbar";
import { columns } from "./Columns";
import { AdminNavbar } from "./AdminNavbar";
import ChildLayout from "@/layout/ChildLayout";

const AdminPanel = () => {
  const { data } = useQuery({
    queryKey: ["order", User?.restaurantId],
    queryFn: () => {
      return Product.get(`/GetAllOrdersByrestaurantId?restaurantId=4`);
    },
  });
  const datas = data?.data.data || [];

  return (
    <ChildLayout>
      <div className="flex ">
        <div className="flex-[2]">
          <AdminNavbar />
        </div>
        <div className="flex-[6]">
          <AdminApp data={datas} columns={columns} />
        </div>
      </div>
    </ChildLayout>
  );
};

export default AdminPanel;
