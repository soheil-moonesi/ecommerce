import { useState } from "react";

export function All_Models({
  handleAddItems,
  data,
  isLoading,
  priceValue,
  handlePriceValue,
}) {
  const [sortBy, setSortBy] = useState("product_list");

  let sortedItems;
  if (sortBy === "product_list") sortedItems = data;

  if (sortBy === "price_list")
    sortedItems = data.toSorted(
      (a, b) => parseInt(a.price) - parseInt(b.price)
    );

  // const [priceValue, setPriceValue] = useState(1000);

  // const handlePriceValue = (e) => {
  //   setPriceValue(e.target.value);
  // };

  return (
    <>
      <h2 className="m-2 m-8 text-center">تمامی محصولات</h2>

      <div className="flex border-2 w-80 broder-black">
        <select className="w-80" onChange={(e) => setSortBy(e.target.value)}>
          <option className="w-80" value="product_list">
            بر اساس محصولات
          </option>
          <option className="w-80" value="price_list">
            بر اساس قیمت
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="default-range"
          className="block mb-2 text-sm font-medium"
        >
          بازه قیمت{" "}
        </label>
        <input
          id="default-range"
          min={0}
          max={8900000}
          type="range"
          value={priceValue}
          onChange={handlePriceValue}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div>{priceValue} تومان</div>
      </div>

      <div className="flex flex-wrap justify-center w-full">
        <div className="flex flex-wrap justify-center w-4/5 bg-white">
          {isLoading ? (
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
            <p>در حال بارگیری محصولات ...</p>
          )}
        </div>
      </div>
    </>
  );
}
function Models({ modelsObj, handleAddItems }) {
  const [buyCount, setBuyCount] = useState(1);

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
    setBuyCount(1);
  }
  //discountRate is not supported for now
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`flex flex-row sm:flex-col w-80 sm:w-64 h-auto m-2 hover:shadow-2xl items-center

      ${
        modelsObj?.discountRate
          ? "border-2 border-sky-500"
          : "border-2 border-gray"
      }`}
    >
      <div className="flex justify-center w-64 h-64 p-3 ">
        <img className=" w-[80%] h-[80%] " src={modelsObj?.photo} alt="" />
      </div>
      <div className="flex flex-col items-center h-32 gap-2 ">
        <div className="flex text-sm text-center">{modelsObj?.name}</div>
        <div className="flex text-center">
          {modelsObj?.discountRate ? (
            <div>
              <div className="flex text-center line-through">
                <span> {modelsObj?.price} تومان</span>
              </div>
              <div> قیمت با تخفیف: {modelsObj?.finalPrice} تومان</div>
            </div>
          ) : (
            <div> {modelsObj?.price} تومان</div>
          )}
        </div>
        {/* <div className="text-center">
        تعداد موجود: {modelsObj?.remaining - buyCount}
      </div> */}
        <div className="sm:hidden">
          <div className="flex justify-center gap-4">
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
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            class=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <span>
              <span className="sm:hidden">سبد خرید🛒</span>
              <span className="hidden sm:block">وارد کردن به سبد خرید🛒</span>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
