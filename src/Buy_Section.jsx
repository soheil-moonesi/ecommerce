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
      <div className="w-full flex justify-center">
        <div className="flex h-auto flex-col m-3 border-2 border-black w-1/2">
          {items.map((items) => (
            <Buy_Item items={items} handleDeleteItems={handleDeleteItems} />
          ))}
        </div>
      </div>

      <div>مبلغ کل خرید: {totalPriceAllItems}</div>
    </>
  );
}

function Buy_Item({ items, handleDeleteItems }) {
  return (
    <div className=" w-full h-auto flex justify-around p-2 border-2 border-black ">
      <span>{items.name}</span> <span> {items.buyCount} عدد</span>
      <span> {items.price} تومان </span>
      <span>مجموع {items.price * items.buyCount}</span>
      <button onClick={() => handleDeleteItems(items.id)}>❌</button>
    </div>
  );
}
