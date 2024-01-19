import LocationSrch from "./LocationSrch";
import ItnSrch from "./ItnSrch";
const SearchBar = () => {
  return (
    <>
      <div className="p-2 py-3 w-full border-[1px] flex  items-center shadow-sm rounded-md border-gray-200">
        <LocationSrch type="Search" />
        <span className="border-[#CFCFCF]  border-[1px] h-5  rounded-sm "></span>
        <ItnSrch />
      </div>
    </>
  );
};

export default SearchBar;
