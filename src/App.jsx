import { useState } from "react";
import { Buy_Section } from "./Buy_Section";
import { Footer } from "./Footer";
import { All_Levels } from "./All_Levels";
import { All_Models } from "./All_Models";
import { Header } from "./Header";
import { Accordion } from "./Accordion";

export const _data = [
  {
    id: 1,
    name: "فتوسل 16 آمپر شیوا امواج",
    price: "239000",
    photo: "Models/فتوسل 16 آمپر شیوا امواج.jpg",
    remaining: "10",
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
  {
    id: 4,
    name: "سوپر ولت آمپر مترVAB-6000A-22B1-71 شیوا امواج",
    price: "1019000",
    photo: "Models/سوپر ولت آمپر مترVAB-6000A-22B1-71 شیوا امواج.jpg",
    remaining: "10",
    discount: "",
  },
  {
    id: 5,
    name: "ترموستات شیوا امواج مدل TRB - 125D",
    price: "1380000",
    photo: "Models/ترموستات شیوا امواج مدل TRB - 125D.jpg",
    remaining: "9",
    discount: "",
  },
  {
    id: 6,
    name: "ترموستات 96 شیوا امواج",
    price: "1476500",
    photo: "Models/ترموستات 96 شیوا امواج.jpg",
    remaining: "9",
    discount: "",
  },
  {
    id: 7,
    name: "ترموستات 50- تا 125 سنسوردار ( سری N ) شیواامواج مدل 15JN3",
    price: "978240",
    photo:
      "Models/ترموستات 50- تا 125 سنسوردار ( سری N ) شیواامواج مدل 15JN3.jpg",
    remaining: "9",
    discount: "",
  },
  {
    id: 8,
    name: "تایمر روغنی کلید شیوا امواج",
    price: "328000",
    photo: "Models/تایمر کلید روغنی شیوا امواج.jpg",
    remaining: "9",
    discount: "",
  },
  {
    id: 9,
    name: "کنترل فاز شیوا امواج",
    price: "771000",
    photo: "Models/کنترل فاز شیوا امواج (سری M).jpg",
    remaining: "9",
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
    <div className=" w-auto h-auto bg-white flex flex-col justify-center items-center">
      <Header />
      <All_Models handleAddItems={handleAddItems} />

      <Buy_Section
        items={items}
        handleDeleteItems={handleDeleteItems}
        handleDeleteAllItems={handleDeleteAllItems}
      />
      <All_Levels />
      <Footer />

      <Accordion AccordionText={AccordionText} />
    </div>
  );
}

export const level_message = [
  "انتخاب محصولات برای خرید",
  "وارد کردن مشخصات",
  "تعیین زمان  و تاریخ برای تماس",
];

const AccordionText = [
  {
    title: " این سایت چه خدماتی رو ارائه میده؟",
    note: "شما میتونید اینجا محصولاتی رو که میخواهید رو به هر تعدادی که سفارش دهید و بعد از ثبت سفارش و ثبت اطلاعات تماس با شما برای ثبت نهایی و قیمت محصولات تماس گرفته میشود",
  },
  {
    title: "سازنده این سایت ",
    note: "سهیل مونسی ",
  },
];

export default App;
