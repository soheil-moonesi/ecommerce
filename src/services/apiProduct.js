import supabase from "./supabase";
import { useState } from "react";

export async function getProduct(weight) {
  const { data, error } = await supabase
    .from("product")
    .select("*")
    .eq([], weight);

  if (error) {
    throw new Error("مشکل در برقراری ارتباط");
  }
  if (data.length === 0) {
    throw new Error("محصول جستوجو شده، موجود نمی باشد");
  }
  return { data, error };
}
