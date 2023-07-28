import { useEffect, useState } from "react";
import { Buy_Section } from "./Buy_Section";
import { Footer } from "./Footer";
import { All_Levels } from "./All_Levels";
import { All_Models } from "./All_Models";
import { Header } from "./Header";
import { Accordion } from "./Accordion";
import { FaStar } from "react-icons/fa";

// export let _data = [
//   {
//     id: 1,
//     name: "فتوسل 16 آمپر شیوا امواج",
//     price: "239000",
//     photo: "Models/فتوسل 16 آمپر شیوا امواج.jpg",
//     remaining: "10",
//     discountRate: "",
//     finalPrice: 215000,
//   },
//   {
//     id: 2,
//     name: "تایمر چپ گرد-راست گرد",
//     price: "200000",
//     photo: "Models/تایمر چپ گرد-راست گرد.png",
//     remaining: "15",
//     discount: "",
//   },
//   {
//     id: 3,
//     name: "تایمر دیجیتال شیوا امواج",
//     price: "657000",
//     photo: "Models/تایمر دیجیتال شیوا امواج.jpg",
//     remaining: "20",
//     discount: "",
//   },
//   {
//     id: 4,
//     name: "سوپر ولت آمپر مترVAB-6000A-22B1-71 شیوا امواج",
//     price: "1019000",
//     photo: "Models/سوپر ولت آمپر مترVAB-6000A-22B1-71 شیوا امواج.jpg",
//     remaining: "10",
//     discount: "",
//   },
//   {
//     id: 5,
//     name: "ترموستات شیوا امواج مدل TRB - 125D",
//     price: "1380000",
//     photo: "Models/ترموستات شیوا امواج مدل TRB - 125D.jpg",
//     remaining: "9",
//     discount: "",
//   },
//   {
//     id: 6,
//     name: "ترموستات 96 شیوا امواج",
//     price: "1476500",
//     photo: "Models/ترموستات 96 شیوا امواج.jpg",
//     remaining: "9",
//     discount: "",
//   },
//   {
//     id: 7,
//     name: "ترموستات 50- تا 125 سنسوردار ( سری N ) شیواامواج مدل 15JN3",
//     price: "978240",
//     photo:
//       "Models/ترموستات 50- تا 125 سنسوردار ( سری N ) شیواامواج مدل 15JN3.jpg",
//     remaining: "9",
//     discount: "",
//   },
//   {
//     id: 8,
//     name: "تایمر روغنی کلید شیوا امواج",
//     price: "328000",
//     photo: "Models/تایمر کلید روغنی شیوا امواج.jpg",
//     remaining: "9",
//     discount: "",
//   },
//   {
//     id: 9,
//     name: "کنترل فاز شیوا امواج",
//     price: "771000",
//     photo: "Models/کنترل فاز شیوا امواج (سری M).jpg",
//     remaining: "9",
//     discount: "",
//   },
// ];

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

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://64c18518fa35860baea0a3e4.mockapi.io/data")
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  });

  return (
    <div className=" w-auto h-auto bg-white flex flex-col justify-center items-center">
      <Header>
        <ShowNumberOfBuyItems items={items} />
      </Header>
      <All_Models handleAddItems={handleAddItems} data={data} />

      <Buy_Section
        items={items}
        handleDeleteItems={handleDeleteItems}
        handleDeleteAllItems={handleDeleteAllItems}
      />
      <All_Levels />
      <Footer />
      <Rating />
      <Accordion AccordionText={AccordionText} />
    </div>
  );
}

function ShowNumberOfBuyItems({ items }) {
  return (
    <div className="flex self-center m-11">سبد خرید 🛒 {items.length}</div>
  );
}

function ButtonDeleteAllItems() {
  return <button onClick={() => handleDeleteItems(items.id)}>❌</button>;
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

function Rating() {
  const createStars = Array(5).fill(0);
  const [currentRate, setRate] = useState(0);
  const [currentRateHover, setRateHover] = useState(0);
  //explain how position in short circuited is important
  return (
    <div className="flex">
      {createStars.map((_, i) => (
        <FaStar
          key={i}
          color={(currentRateHover || currentRate) > i ? "orange" : "gray"}
          onClick={() => {
            setRate(i + 1);
          }}
          onMouseEnter={() => setRateHover(i + 1)}
          onMouseLeave={() => setRateHover(0)}
        />
      ))}
    </div>
  );
}

export default App;
