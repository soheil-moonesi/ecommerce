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

  const [error, setError] = useState(null);

  const [weight, setWeight] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await getProduct(weight);
        if (error) {
          setError(error);
        } else {
          setData(data);
        }
        setLoading(true);
      } catch (error) {
        setError(error);
        setLoading(true);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
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
