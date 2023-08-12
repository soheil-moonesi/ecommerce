import { useEffect, useState } from "react";

export function Header({ children }) {
  return (
    <div className=" bg-slate-200 w-full flex justify-between">
      <div className="flex w-[70%] items-center">
        <h1 className="m-10 ">سایت فروشگاهی</h1>
        <input
          className="w-[40%] h-10 bg-white rounded-xl"
          type="text"
          placeholder="🔎جستجو"
        />
      </div>
      {children}
    </div>
  );
}
