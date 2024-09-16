import supabase from "../supabaseClient";

async function apiUpdateProduct(productId, updatedData) {
  try {
    const { data, error } = await supabase
      .from("products") // Specify the table
      .update(updatedData) // Pass the object containing the column names and new values
      .eq("id", productId); // Match the product by id

    if (error) {
      throw new Error(error.message);
    }

    return { data, error };
  } catch (error) {
    console.error("Error updating product:", error);
    return { data: null, error };
  }
}

export { apiUpdateProduct };
