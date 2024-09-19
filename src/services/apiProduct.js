import supabase from "./supabase";
import { useState } from "react";

export async function getProduct(search, priceValue) {
  const { data, error } = await supabase
    .from("product")
    .select("*")
    .lt("price", priceValue);
  // console.log(search);
  // .eq("name", " تایمر"); or use lt

  if (error) {
    throw new Error("مشکل در برقراری ارتباط");
  }
  if (data.length === 0) {
    throw new Error("محصول جستوجو شده، موجود نمی باشد");
  }
  return { data, error };
}
