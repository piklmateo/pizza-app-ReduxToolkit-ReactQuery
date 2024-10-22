import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCityByLatLang } from "../services/orderService";

interface Position {
  lat: number | null;
  lang: number | null;
}

const useGeolocation = () => {
  const [position, setPosition] = useState<Position>({ lat: null, lang: null });

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["address", position?.lat, position?.lang],
    queryFn: () => fetchCityByLatLang(position!.lat!.toString(), position!.lang!.toString()),
    enabled: !!position.lat && !!position.lang,
  });

  const handleCurrentAddress = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newPosition = {
          lat: pos?.coords?.latitude,
          lang: pos?.coords?.longitude,
        };
        setPosition(newPosition);
        refetch();
      },
      (error) => console.error(error)
    );
  };

  return { data, position, handleCurrentAddress, isError, isLoading };
};

export default useGeolocation;
