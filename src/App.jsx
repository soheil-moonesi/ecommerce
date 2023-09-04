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

  //faild , Try it later ...
  const [search, setSearch] = useState("");
  function handleSearch(x) {
    setSearch(x);
  }

  const [priceValue, setPriceValue] = useState(12000000);
  const handlePriceValue = (e) => {
    setPriceValue(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await getProduct(search, priceValue);
        // if (data !== 0) {
        console.log(data);
        console.log(error);

        //   setError(null);
        // }

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
  }, [search, priceValue]);

  // if (error) {
  //   return <p> {error.message}</p>;
  // }

  function ShowErrorMessage({ error }) {
    if (error == null) {
      return null;
    }
    return (
      <div className={`${error ? "bg-red-500" : "hidden"}`}>
        <p> {error.message}</p>
      </div>
    );
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
      <Header handleSearch={handleSearch}>
        <ShowNumberOfBuyItems items={items} />
      </Header>
      <SwiperShow />
      <Categories />
      <All_Models
        handleAddItems={handleAddItems}
        data={data}
        isLoading={isLoading}
        priceValue={priceValue}
        handlePriceValue={handlePriceValue}
      />
      <ShowErrorMessage error={error} />
      <Buy_Section
        items={items}
        handleDeleteItems={handleDeleteItems}
        handleDeleteAllItems={handleDeleteAllItems}
      />
      <All_Levels />
      <Footer />
      <Rating />
      <Accordion AccordionText={AccordionText} />
      <Toast items={items} />
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

function Toast({ items }) {
  const [toastP, setToast] = useState();
  const [latestItem, setLatestItem] = useState(null);

  useEffect(() => {
    if (items.length > 0) {
      setLatestItem(items[items.length - 1]);
      setToast(true);

      const timer = setTimeout(() => {
        setToast(false);
        setLatestItem(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [items]);

  return (
    <div className={`fixed bottom-5 right-5 ${toastP ? "visible" : "hidden"}`}>
      {latestItem && (
        <div
          className="max-w-xs bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700"
          role="alert"
        >
          <div className="flex p-4">
            <div className="flex-shrink-0">
              <svg
                className="h-4 w-4 text-green-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="px-3 text-gray-700 text-l dark:text-gray-400">
                {latestItem.name} به سبد خرید اضافه شد 🛒
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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
