import { useState } from "react";
import { Buy_Section } from "./Buy_Section";
import { Footer } from "./Footer";
import { All_Levels } from "./All_Levels";
import { All_Models } from "./All_Models";
import { Header } from "./Header";

export const _data = [
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

  function handleDeleteAllItems() {
    setItems([]);
  }

  return (
    <div className=" w-screen h-screen bg-slate-500 flex flex-col justify-center items-center">
      <Header />
      <All_Models items={items} handleAddItems={handleAddItems} />
      <All_Levels />
      <Footer />
      <Buy_Section
        items={items}
        handleDeleteItems={handleDeleteItems}
        handleDeleteAllItems={handleDeleteAllItems}
      />
    </div>
  );
}

export const level_message = [
  "انتخاب محصولات برای خرید",
  "وارد کردن مشخصات",
  "تعیین زمان  و تاریخ برای تماس",
];

export default App;
