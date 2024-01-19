import { ChevronUp, MapPin } from "lucide-react";
import useLocationHook from "@/hooks/useLocationHook";
import { useState } from "react";

const LocationSrch = () => {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const loc = { a: latitude, b: longitude };
  console.log(loc);
  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location: ", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const { data } = useLocationHook({
    latitudes: latitude,
    longitudes: longitude,
  });
  console.log(data);

  return (
    <div className="flex-[6] px-2 flex gap-1 items-center">
      <MapPin className="text-red-400" />
      <input
        type="text"
        placeholder="YWCA, Ashok Road, Hanu..."
        className="w-full focus:outline-none"
      />
      <ChevronUp
        onClick={requestLocation}
        className="text-bold cursor-pointer"
      />
    </div>
  );
};

export default LocationSrch;
