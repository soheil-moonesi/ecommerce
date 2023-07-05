import { useState } from "react";

const _data = [
  {
    name: "فتوسل 16 آمپر شیوا امواج",
    price: "239000",
    photo: "Models/فتوسل 16 آمپر شیوا امواج.jpg",
    remaining: "1",
    discountRate: "10",
    finalPrice: 215000,
  },

  {
    name: "تایمر دیجیتال شیوا امواج",
    price: "657000",
    photo: "Models/تایمر دیجیتال شیوا امواج.jpg",
    remaining: "20",
    discount: "",
  },
  {
    name: "تایمر چپ گرد-راست گرد",
    price: "686000",
    photo: "Models/تایمر چپ گرد-راست گرد.png",
    remaining: "15",
    discount: "",
  },
];

// import propTypes from "prop-types";

function App() {
  return (
    <div className=" w-screen h-screen bg-slate-500 flex flex-col justify-center items-center">
      <Header />
      <All_Models />
      <All_Levels />
      <Footer />
      <Buy_Section />
    </div>
  );
}

function Header() {
  return <h1>ecommerce site</h1>;
}

let listing_models = 1;
function All_Models() {
  return (
    // use React Fragment
    <>
      <h2 className="text-center">تمامی محصولات</h2>

      <div>
        <div className="flex">
          {listing_models > 0 ? (
            <div className="flex">
              {_data.map((models) => (
                <Models modelsObj={models} key={models.name} />
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

function Models({ modelsObj }) {
  const [buyCount, setBuyCount] = useState(0);

  function buyCountIncrease() {
    setBuyCount((currentBuyCount) => currentBuyCount + 1);
  }
  function buyCountDecrease() {
    if (buyCount > 0) setBuyCount((currentBuyCount) => currentBuyCount - 1);
  }

  if (modelsObj?.remaining == 0) return null;

  return (
    <div
      className={`flex flex-col w-52 h-auto gap-3 m-3  ${
        modelsObj?.discountRate ? "border-2 border-sky-500" : "bg-red-500"
      }`}
    >
      <img src={modelsObj?.photo} alt="" />
      <div className="text-center">{modelsObj?.name}</div>
      <div className="text-center">
        {modelsObj?.discountRate ? (
          //
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
        تعداد موجود: {modelsObj?.remaining - buyCount}{" "}
      </div>
      <div className="flex gap-4 justify-center">
        <button onClick={buyCountDecrease}>-</button>
        <div>تعداد خرید:</div>
        <div>{buyCount}</div>
        <button onClick={buyCountIncrease}>+</button> 
      </div>
      <div className="flex justify-center items-center">
      <button type="button" class=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">وارد کردن به سبد خرید</button>
      </div>
    </div>
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
    <div className="mb-10">
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
        مرحله {step} : {level_message[step - 1]}{" "}
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

function Buy_Section() {
  return (
    <div>
      <div className="flex">
        {_data.map((models) => (
          <Buy_Item modelsObj={models} key={models.name} />
        ))}
      </div>
    </div>
  );
}

function Buy_Item({ modelsObj }) {
  return (
    <div className="w-auto h-auto">
      {modelsObj.name} {modelsObj.price} <button>❌</button>
    </div>
  );
}

export default App;
