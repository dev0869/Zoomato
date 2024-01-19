import { getCurrentLocation } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const useLocationHook = ({ longitudes, latitudes }) => {
  console.log(longitudes, latitudes);
  return useQuery({
    queryKey: ["location"],
    queryFn: () => getCurrentLocation({ a: latitudes, b: longitudes }),
  });
};

export default useLocationHook;
