import { ChevronUp, LocateFixed, MapPin } from "lucide-react";
import useLocationHook from "@/hooks/useLocationHook";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useLocFunction from "@/hooks/useLocFunction";
import { useEffect, useState } from "react";
const Drp = ({ onClick }: { onClick: () => void }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ChevronUp className=" size-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <div onClick={onClick} className=" cursor-pointer gap-3 flex p-2">
          <LocateFixed className="text-[#F28993]" />
          <div className="relative bottom-1">
            <p className="text-[#F28993]  text-lg font-[400]">
              Detect Current Location{" "}
            </p>
            <span className="text-gray-500 text-md">Using GPS</span>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const LocationSrch = () => {
  const { loc, requestLocation } = useLocFunction();
  const [address, setAddress] = useState("");
  const { data } = useLocationHook(loc);
  const handleLocation = () => {
    requestLocation();
    setAddress(data?.display_name);
  };

  useEffect(() => {
    setAddress(data?.display_name);
  }, [data?.display_name]);

  return (
    <>
      <div className="flex-[6] px-2 flex gap-1 items-center">
        <MapPin className="text-red-400" />
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder="YWCA, Ashok Road, Hanu..."
          className="w-full text-gray-600 focus:outline-none"
        />
        <Drp onClick={handleLocation} />
      </div>
    </>
  );
};

export default LocationSrch;
