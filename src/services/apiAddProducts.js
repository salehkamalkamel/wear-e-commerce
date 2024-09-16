import supabase from "../supabaseClient";

async function apiAddProducts(products) {
  const { data, error } = await supabase
    .from("products")
    .insert(products)
    .select();

  return { data, error };
}

export { apiAddProducts };
