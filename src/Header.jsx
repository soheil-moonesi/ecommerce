import { useEffect, useState } from "react";
import React from "react";
import { FaSearch } from "react-icons/fa";

export function Header({ children }) {
  return (
    <div className=" bg-blue-400 w-full flex flex-col justify-between h-auto items-center lg:flex-row lg:min-h-[5rem] ">
      <h1 className="flex justify-between mt-4 lg:mr-10 lg:items-center lg:mt-0">
        سایت فروشگاهی
      </h1>
      <div className="flex w-full items-center gap-10 m-4 justify-around lg:w-[50%] lg:my-0 ">
        <input
          className="flex h-8 bg-white rounded-xl w-[50%] "
          type="text"
          placeholder="جستجو"
        />
        <div className="flex">{children}</div>
      </div>
    </div>
  );
}
