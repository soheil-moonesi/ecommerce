const _data = [
  {
    name: "فتوسل 16 آمپر شیوا امواج",
    price: "239000",
    photo: "Models/فتوسل 16 آمپر شیوا امواج.jpg",
    remaining: "10",
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

import propTypes from "prop-types";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col justify-center items-center">
      <Header />
      <All_Models />
      <Footer />
    </div>
  );
}

function All_Models() {
  return (
    <div>
      <h2 className="text-center">تمامی محصولات</h2>
      <div className="flex">
        <div className="flex">
          {_data.map((models) => (
            <Models modelsObj={models} />
          ))}
        </div>

        {/* <Models
          name="فتوسل 16 آمپر شیوا امواج"
          price="239000"
          photo="Models/فتوسل 16 آمپر شیوا امواج.jpg"
          remaining="10"
        />
        <Models
          name="تایمر دیجیتال شیوا امواج"
          price="657000"
          photo="Models/تایمر دیجیتال شیوا امواج.jpg"
          remaining="20"
        />
        <Models
          name="تایمر چپ گرد-راست گرد"
          price="686000"
          photo="Models/تایمر چپ گرد-راست گرد.png"
          remaining="15"
        /> */}
      </div>
    </div>
  );
}

function Models(props) {
  console.log(props);

  return (
    <div className="bg-red-500 flex flex-col w-52 h-72 m-3">
      <img src={props?.modelsObj?.photo} alt="" />
      <div>{props?.modelsObj?.name}</div>
      <div>{props?.modelsObj?.price} </div>
      <div>{props?.modelsObj?.remaining}</div>
    </div>
  );
}
Models.propTypes = {
  name: propTypes.string,
  price: propTypes.number,
  photo: propTypes.string,
  remaining: propTypes.number,
};

function Header() {
  return <h1>ecommerce site</h1>;
}

function Footer() {
  return (
    <footer>{new Date().toLocaleDateString("fa-IR")} :تاریخ امروز </footer>
  );
  // const hour = new Date().getHours();
  // const activeHour = 8;
  // const deactiveHour =23;
  // const isActive = hour >= openHour && hour <= closeHour;
}

export default App;
