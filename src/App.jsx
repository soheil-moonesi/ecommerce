// const data = [
//   {
//     // why must this object wrapped in array?
//     name: "فتوسل 16 آمپر شیوا امواج",
//     price: "239000",
//     photo: "",
//     Remaining: "10",
//   },
//   {
//     name: " سوپر تایمر دیجیتال شیوا امواج",
//     price: "657000",
//     photo: "",
//     Remaining: "20",
//   },
// ];

function App() {
  return (
    // we must return just one variable
    <div className="w-screen h-screen bg-slate-500 flex flex-col justify-center items-center">
      <Header />
      <All_Models />
      <Footer />
    </div>
  );
}
// how to export and showing img?
// answer : we must use public directory for export images
function Models() {
  return (
    <div className="bg-red-500 flex flex-col w-52 h-72 m-3">
      <img src="Models/فتوسل 16 آمپر شیوا امواج.jpg" alt="" />
      <div>فتوسل 16 آمپر شیوا امواج</div>
      <div>239000 </div>
      <div>10</div>
    </div>
  );
}
function Header() {
  return <h1>ecommerce name</h1>;
}

function All_Models() {
  return (
    <div>
      <h2 className="text-center">تمامی محصولات</h2>
      <div className="flex">
        <Models
          name="فتوسل 16 آمپر شیوا امواج"
          price="239000"
          photo="Models/فتوسل 16 آمپر شیوا امواج.jpg"
          remaining="10"
        />
      </div>
    </div>
  );
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
