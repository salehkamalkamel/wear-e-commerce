import supabase from "../supabaseClient";

async function apiGetFilteredProducts(filter = {}) {
  try {
    let query = supabase.from("products").select("*");
    if (filter.rating) query = query.gt("rating", filter.rating);
    if (filter.discount) query = query.eq("discount", true);
    if (filter.category)
      query = query.eq("category", filter.category.toLowerCase());
    if (filter.type) query = query.eq("type", filter.type);

    let { data: products, error } = await query;

    return { products, error };
  } catch (error) {
    console.log(error);
  }
}

export { apiGetFilteredProducts };
