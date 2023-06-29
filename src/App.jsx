const _data = [
  {
    name: "فتوسل 16 آمپر شیوا امواج",
    price: "239000",
    photo: "Models/فتوسل 16 آمپر شیوا امواج.jpg",
    remaining: "0",
  },

  {
    name: "تایمر دیجیتال شیوا امواج",
    price: "657000",
    photo: "Models/تایمر دیجیتال شیوا امواج.jpg",
    remaining: "20",
  },
  {
    name: "تایمر چپ گرد-راست گرد",
    price: "686000",
    photo: "Models/تایمر چپ گرد-راست گرد.png",
    remaining: "15",
  },
];

// import propTypes from "prop-types";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col justify-center items-center">
      <Header />
      <All_Models />
      <Footer />
    </div>
  );
}
let listing_models = 1;
function All_Models() {
  return (
    <div>
      <h2 className="text-center">تمامی محصولات</h2>
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
  );
}

function Models(modelsObj) {
  if (modelsObj?.remaining == 0) return null;
  return (
    <div className="bg-red-500 flex flex-col w-52 h-72 m-3">
      <img src={modelsObj?.photo} alt="" />
      <div>{modelsObj?.name}</div>
      <div>{modelsObj?.price} </div>
      <div>{modelsObj?.remaining}</div>
    </div>
  );
}

function Header() {
  return <h1>ecommerce site</h1>;
}

function Footer() {
  const hour = new Date().getHours();
  const activeHour = 8;
  const deActiveHour = 22;
  const isActive = hour >= activeHour && hour <= deActiveHour;

  return (
    <footer className="text-center">
      {new Date().toLocaleDateString("fa-IR")} :تاریخ امروز
      <div>
        پشتیبانی تلفنی از ساعت {activeHour} تا {deActiveHour} : 09190169216
      </div>
      {isActive && <p>همین حالا تماس بگیرید</p>}
    </footer>
  );
}

export default App;
