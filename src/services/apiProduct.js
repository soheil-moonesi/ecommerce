import supabase from "./supabase";

export async function getProduct() {
  const { data, error } = await supabase.from("product").select("*");

  if (error) {
    console.log(error);
    throw new Error("not found");
  }
  return data;
}
