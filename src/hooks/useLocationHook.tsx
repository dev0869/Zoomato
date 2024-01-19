import { getCurrentLocation } from "@/services/api";
import { LocartionProps } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useLocationHook = (loc: LocartionProps) => {
  return useQuery({
    queryKey: ["location", loc],
    queryFn: () => getCurrentLocation(loc),
  });
};

export default useLocationHook;
