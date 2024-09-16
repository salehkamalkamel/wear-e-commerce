import supabase from "../supabaseClient";

async function apiGetProduct(productId) {
  try {
    const { data, error } = await supabase
      .from("products") // Specify the table
      .select("*") // Specify the columns to retrieve (or '*' for all)
      .eq("id", productId);
    return { data, error };
  } catch (error) {
    console.log(error);
  }
}

export { apiGetProduct };
