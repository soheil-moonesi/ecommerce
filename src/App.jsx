import { useState } from "react";

const _data = [
  {
    id: 1,
    name: "فتوسل 16 آمپر شیوا امواج",
    price: "239000",
    photo: "Models/فتوسل 16 آمپر شیوا امواج.jpg",
    remaining: "1",
    discountRate: "10",
    finalPrice: 215000,
  },
  {
    id: 2,
    name: "تایمر چپ گرد-راست گرد",
    price: "200000",
    photo: "Models/تایمر چپ گرد-راست گرد.png",
    remaining: "15",
    discount: "",
  },
  {
    id: 3,
    name: "تایمر دیجیتال شیوا امواج",
    price: "657000",
    photo: "Models/تایمر دیجیتال شیوا امواج.jpg",
    remaining: "20",
    discount: "",
  },
];

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(itemPass) {
    setItems((items) => [...items, itemPass]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  return (
    <div className=" w-screen h-screen bg-slate-500 flex flex-col justify-center items-center">
      <Header />
      <All_Models items={items} handleAddItems={handleAddItems} />
      <All_Levels />
      <Footer />
      <Buy_Section items={items} handleDeleteItems={handleDeleteItems} />
    </div>
  );
}

function Header() {
  return <h1>ecommerce site</h1>;
}

let listing_models = 1;
function All_Models({ items, handleAddItems }) {
  const [sortBy, setSortBy] = useState("product_list");

  let sortedItems;

  if (sortBy === "product_list") sortedItems = _data;

  if (sortBy === "price_list")
    sortedItems = _data.slice().sort((a, b) => a.price.localeCompare(b.price));

  return (
    <>
      <h2 className="text-center">تمامی محصولات</h2>

      <div>
        <div className="flex">
          {listing_models > 0 ? (
            <div className="flex">
              {sortedItems.map((models) => (
                <Models
                  modelsObj={models}
                  items={items}
                  handleAddItems={handleAddItems}
                  key={models.name}
                />
              ))}
            </div>
          ) : (
            <p> محصولی برای نمایش وجود ندارد ، در حال انبار گردانی هستیم</p>
          )}
        </div>
      </div>
      <div className="w-80 flex">
        <select
          className="w-80"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option className="w-80" value="product_list">
            بر اساس محصولات
          </option>
          <option className="w-80" value="price_list">
            بر اساس قیمت
          </option>
        </select>
      </div>
    </>
  );
}

function Models({ modelsObj, items, handleAddItems }) {
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
      className={`flex flex-col w-52 h-auto gap-3 m-3  ${
        modelsObj?.discountRate ? "border-2 border-sky-500" : "bg-red-500"
      }`}
    >
      <img src={modelsObj?.photo} alt="" />
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

const level_message = [
  "انتخاب محصولات برای خرید",
  "وارد کردن مشخصات",
  "تعیین زمان  و تاریخ برای تماس",
];

function All_Levels() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) {
      setStep((currentState) => currentState - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((currentState) => currentState + 1);
    }
  }

  return (
    <div className="m-5">
      <div className="flex justify-around ">
        <div
          className={`w-10 text-center ${step >= 1 ? "bg-orange-500" : null}`}
        >
          1
        </div>
        <div
          className={`w-10 text-center ${step >= 2 ? "bg-orange-500" : null}`}
        >
          2
        </div>
        <div
          className={`w-10 text-center ${step >= 3 ? "bg-orange-500" : null}`}
        >
          3
        </div>
      </div>

      <div>
        مرحله {step} : {level_message[step - 1]}
      </div>

      <div className="flex justify-around gap-4">
        <button onClick={handlePrevious}>مرحله قبلی</button>
        <button onClick={handleNext}>مرحله بعدی</button>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const activeHour = 8;
  const deActiveHour = 22;
  const isActive = hour >= activeHour && hour <= deActiveHour;

  return (
    <footer className="text-center">
      تاریخ امروز: {new Date().toLocaleDateString("fa-IR")}
      <div>
        پشتیبانی تلفنی از ساعت {activeHour} تا {deActiveHour} : 09190169216
      </div>
      {isActive && <p>همین حالا تماس بگیرید</p>}
    </footer>
  );
}

function Buy_Section({ items, handleDeleteItems }) {
  return (
    <div>
      <div className="flex w-auto h-auto flex-col m-3">
        {items.map((items) => (
          <Buy_Item items={items} handleDeleteItems={handleDeleteItems} />
        ))}
      </div>
    </div>
  );
}

function Buy_Item({ items, handleDeleteItems }) {
  return (
    <div className="w-auto h-auto flex ">
      <div>
        <span>{items.name}</span> <span>{items.buyCount}</span>{" "}
        <span> {items.price} تومان </span>{" "}
        <button onClick={() => handleDeleteItems(items.id)}>❌</button>
      </div>
    </div>
  );
}

export default App;
