export function Header() {
  return (
    <div className=" bg-slate-200 w-full flex justify-between">
      <div className="flex w-[70%] items-center">
        <h1 className="m-10 ">سایت فروشگاهی</h1>
        <input
          className="w-[40%] h-10 bg-white rounded-xl"
          type="text"
          placeholder="🔎جستوجو"
        />
       
      </div>
      <div className="flex self-center m-11">سبد خرید 🛒</div>
    </div>
  );
}
