export function Footer() {
  const hour = new Date().getHours();
  const activeHour = 8;
  const deActiveHour = 22;
  const isActive = hour >= activeHour && hour <= deActiveHour;

  return (
    <footer className="text-center m-3">
      تاریخ امروز: {new Date().toLocaleDateString("fa-IR")}
      <div>
        پشتیبانی تلفنی از ساعت {activeHour} تا {deActiveHour} : 09190169216
      </div>
      {isActive && <p>همین حالا تماس بگیرید</p>}
    </footer>
  );
}
