import { useEffect, useState, useRef } from "react";
import { Buy_Section } from "./Buy_Section";
import { Footer } from "./Footer";
import { All_Levels } from "./All_Levels";
import { All_Models } from "./All_Models";
import { Header } from "./Header";
import { Accordion } from "./Accordion";
import { FaStar, FaShoppingCart } from "react-icons/fa";
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
    const itemExistsIndex = items.findIndex((item) => item.id === itemPass.id);

    if (itemExistsIndex !== -1) {
      // Item already exists, update buyCount
      const updatedItems = [...items];
      updatedItems[itemExistsIndex] = {
        ...updatedItems[itemExistsIndex],
        buyCount: updatedItems[itemExistsIndex].buyCount + itemPass.buyCount,
      };

      setItems(updatedItems);
    } else {
      // Item doesn't exist, add it to the array
      setItems((prevItems) => [...prevItems, itemPass]);
    }
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
    return <p> {error.message}</p>;
  }
  // useEffect(() => {
  //   fetch("https://64c18518fa35860baea0a3e4.mockapi.io/data")
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // });

  return (
    <div className="flex flex-col items-center justify-center w-auto h-auto bg-white ">
      <Header>
        <ShowNumberOfBuyItems items={items} />
      </Header>
      <SwiperShow />
      <Categories />
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
    <div className="flex gap-2">
      <p>سبد خرید </p> <FaShoppingCart size={20} /> <div>{items.length}</div>
    </div>
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

function Categories() {
  return (
    <div className="flex flex-wrap items-center justify-around w-full h-auto m-5">
      <div className="flex flex-col items-center justify-center h-40 m-12 w-60">
        <img src="./Categories/Box 1.jpg" alt="" />
        <p>فتوسل و روشنایی</p>
      </div>
      <div className="flex flex-col items-center justify-center h-40 m-12 w-60">
        <img src="./Categories/Box 2.jpg" alt="" />
        <p>حفاظت کننده سه فاز</p>
      </div>
      <div className="flex flex-col items-center justify-center h-40 m-12 w-60">
        <img src="./Categories/Box 3.jpg" alt="" />
        <p>حفاظت کننده تک فاز</p>
      </div>
      <div className="flex flex-col items-center justify-center h-40 m-12 w-60">
        <img src="./Categories/Box 4.jpg" alt="" />
        <p>ترموستات</p>
      </div>
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
        className="w-full mySwiper h-96"
      >
        <SwiperSlide>
          <img
            className="object-cover "
            src="./Banners/Big Banner 1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover "
            src="./Banners/Big Banner 2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="object-cover "
            src="./Banners/Big Banner 3.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
