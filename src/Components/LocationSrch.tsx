import { ChevronUp, MapPin } from "lucide-react";

const LocationSrch = () => {
  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude: ", position.coords.latitude);
          console.log("Longitude: ", position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location: ", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex-[6] px-2 flex gap-1 items-center">
      <MapPin className="text-red-400" />
      <input
        type="text"
        placeholder="YWCA, Ashok Raod, Hanu..."
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
