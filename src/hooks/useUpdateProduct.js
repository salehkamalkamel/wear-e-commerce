import { useMutation } from "@tanstack/react-query";
import { apiUpdateProduct } from "../services/apiUpdateProduct";

function useUpdateProduct() {
  const { mutate, error, isLoading } = useMutation({
    mutationFn: ({ productId, updatedData }) =>
      apiUpdateProduct(productId, updatedData),
    onSuccess: (data) => console.log(data), // Add a comma here
  });

  return { mutate, error, isLoading }; // Use isLoading instead of isPending
}

export { useUpdateProduct }; // Correct export syntax
