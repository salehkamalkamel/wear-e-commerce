import { useQuery } from "@tanstack/react-query";
import { apiGetFilteredProducts } from "../services/apiGetFilteredProducts";

function useBestSellers(filter) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", "bestSellers", filter],
    queryFn: () => apiGetFilteredProducts(filter),
  });
  return { data, isLoading, error };
}

export { useBestSellers };
