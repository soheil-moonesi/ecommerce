import { useState } from "react";
import { _data } from "./App";

let listing_models = 1;
export function All_Models({ handleAddItems }) {
  const [sortBy, setSortBy] = useState("product_list");

  let sortedItems;

  if (sortBy === "product_list") sortedItems = _data;

  if (sortBy === "price_list")
    sortedItems = _data.toSorted((a, b) => a.price - b.price);

  return (
    <>
      <h2 className="m-2 text-center">تمامی محصولات</h2>

      <div className="w-80 flex border-2 broder-black">
        <select className="w-80" onChange={(e) => setSortBy(e.target.value)}>
          <option className="w-80" value="product_list">
            بر اساس محصولات
          </option>
          <option className="w-80" value="price_list">
            بر اساس قیمت
          </option>
        </select>
      </div>

      <div className="flex flex-wrap w-full justify-center">
        <div className="flex flex-wrap w-4/5 justify-center bg-white">
          {listing_models > 0 ? (
            <div className="flex flex-wrap justify-center">
              {sortedItems.map((models) => (
                <Models
                  modelsObj={models}
                  handleAddItems={handleAddItems}
                  key={models.id}
                />
              ))}
            </div>
          ) : (
            <p> محصولی برای نمایش وجود ندارد ، در حال انبار گردانی هستیم</p>
          )}
        </div>
      </div>
    </>
  );
}
function Models({ modelsObj, handleAddItems }) {
  const [buyCount, setBuyCount] = useState(0);

  function buyCountIncrease() {
    setBuyCount((currentBuyCount) => currentBuyCount + 1);
  }
  function buyCountDecrease() {
    if (buyCount > 0) setBuyCount((currentBuyCount) => currentBuyCount - 1);
  }

  if (modelsObj?.remaining == 0) return null;

  function handleSubmit(e) {
    e.preventDefault();
    const itemPass = {
      name: modelsObj?.name,
      price: modelsObj?.price,
      buyCount,
      id: modelsObj?.id,
    };
    handleAddItems(itemPass);
    setBuyCount(0);
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`flex flex-col w-72 h-auto m-3 ${
        modelsObj?.discountRate
          ? "border-2 border-sky-500"
          : "border-2 border-black"
      }`}
    >
      <div className="flex justify-center ">
        <img className=" w-64 h-64" src={modelsObj?.photo} alt="" />
      </div>
      <div className="text-center">{modelsObj?.name}</div>
      <div className="text-center">
        {modelsObj?.discountRate ? (
          <div>
            <div className="line-through text-center ">
              <span> قیمت نهایی: {modelsObj?.price} تومان</span>
            </div>
            <div> قیمت با تخفیف: {modelsObj?.finalPrice} تومان</div>
          </div>
        ) : (
          <div>قیمت نهایی: {modelsObj?.price} تومان</div>
        )}
      </div>
      <div className="text-center">
        تعداد موجود: {modelsObj?.remaining - buyCount}
      </div>
      <div className="flex gap-4 justify-center">
        <button type="button" onClick={buyCountDecrease}>
          -
        </button>
        <div>تعداد خرید:</div>
        <input
          className="w-10"
          type="number"
          value={buyCount}
          placeholder="0"
        />
        <button type="button" onClick={buyCountIncrease}>
          +
        </button>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          class=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          وارد کردن به سبد خرید🛒
        </button>
      </div>
    </form>
  );
}
