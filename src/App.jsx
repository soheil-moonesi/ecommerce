import { useEffect, useState, useRef } from "react";
import { Buy_Section } from "./Buy_Section";
import { Footer } from "./Footer";
import { All_Levels } from "./All_Levels";
import { All_Models } from "./All_Models";
import { Header } from "./Header";
import { Accordion } from "./Accordion";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getProduct } from "./services/apiProduct";

// import { Swiper } from "./Swiper";

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

  const [isLoading, setLoading] = useState(false);

  function handleDeleteItems(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  function handleDeleteAllItems() {
    setItems([]);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct().then((data) => {
      setData(data); // Set the name of the first product
      setLoading(true);
    });
  }, []);

  // useEffect(() => {
  //   fetch("https://64c18518fa35860baea0a3e4.mockapi.io/data")
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // });

  return (
    <div className=" w-auto h-auto bg-white flex flex-col justify-center items-center">
      <Header>
        <ShowNumberOfBuyItems items={items} />
      </Header>
      <SwiperShow />
      <All_Models
        handleAddItems={handleAddItems}
        data={data}
        isLoading={isLoading}
      />

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
    note: " سهیل مونسی و سپهر مونسی",
  },
];

function Rating() {
  const createStars = Array(5).fill(0);
  const [currentRate, setRate] = useState(0);
  const [currentRateHover, setRateHover] = useState(0);
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

function SwiperShow() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-96"
      >
        <SwiperSlide className="bg-black">Slide 1</SwiperSlide>
        <SwiperSlide>
          <img src="Models/logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
