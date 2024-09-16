import { useQuery } from "@tanstack/react-query";
import { apiGetProduct } from "../services/apiGetProduct";

function useGetProduct(productId) {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["produt", productId],
    queryFn: () => apiGetProduct(productId),
  });

  return { product, isLoading, error };
}

export { useGetProduct };
