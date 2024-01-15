import { Search } from "lucide-react";

const ItnSrch = () => {
  return (
    <div className="flex-[8] px-2 flex gap-3 items-center">
      <Search className="text-[#CDCDCD]" />
      <input
        type="text"
        placeholder="Search For Restaurant, Items or Dish.. "
        className="w-full focus:outline-none"
      />
    </div>
  );
};

export default ItnSrch;
