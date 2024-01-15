import { ChevronUp, MapPin } from "lucide-react";

const LocationSrch = () => {
  return (
    <div className="flex-[6] px-2 flex gap-1 items-center">
      <MapPin className="text-red-400" />
      <input
        type="text"
        placeholder="YWCA, Ashok Raod, Hanu..."
        className="w-full focus:outline-none"
      />
      <ChevronUp className="text-bold" />
    </div>
  );
};

export default LocationSrch;
