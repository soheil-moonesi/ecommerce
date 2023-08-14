export function Buy_Section({
  items,
  handleDeleteItems,
  handleDeleteAllItems,
}) {
  const sumPriceEachItem = items.map((items) => items.price * items.buyCount);
  const totalPriceAllItems = sumPriceEachItem.reduce(
    (total, price) => total + price,
    0
  );

  return (
    <>
      <button onClick={() => handleDeleteAllItems()}>
        خالی کردن سبد خرید❌🛒
      </button>
      <div className="flex justify-center w-full">
        <div className="flex flex-col w-1/2 h-auto m-3 border-2 border-black">
          {items.map((items) => (
            <Buy_Item items={items} handleDeleteItems={handleDeleteItems} />
          ))}
        </div>
      </div>

      <div>مبلغ کل خرید: {totalPriceAllItems} تومان</div>
    </>
  );
}

function Buy_Item({ items, handleDeleteItems }) {
  return (
    <div className="flex justify-around w-full h-auto p-2 border-2 border-black ">
      <span>{items.name}</span> <span> {items.buyCount} عدد</span>
      <span> {items.price} تومان </span>
      <span>مجموع {items.price * items.buyCount}</span>
      <button onClick={() => handleDeleteItems(items.id)}>❌</button>
    </div>
  );
}
