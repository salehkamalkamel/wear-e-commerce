import supabase from "../supabaseClient";

async function apiGetproducts() {
  let { data: products, error } = await supabase.from("products").select("*");
  return { products, error };
}

export { apiGetproducts };
