// import { data } from "autoprefixer";
import supabase from "./supabase";

export async function getProduct() {
  const { data, error } = await supabase.from("product").select("*");

  if (error) {
    console.log(error);
    throw new Error("notttt found");
  }
  return data;
}
