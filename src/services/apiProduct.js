import supabase from "./supabase";
import { useState } from "react";

export async function getProduct() {
  const { data, error } = await supabase
    .from("product")
    .select("*")
    .eq("weight", "100gr");

  if (error) {
    throw new Error("مشکل در برقراری ارتباط");
  }
  if (data.length === 0) {
    throw new Error("محصول جستوجو شده، موجود نمی باشد");
  }
  return { data, error };
}
