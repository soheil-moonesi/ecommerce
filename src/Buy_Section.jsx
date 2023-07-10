export function Buy_Section({
  items,
  handleDeleteItems,
  handleDeleteAllItems,
}) {
  return (
    <>
      <button onClick={() => handleDeleteAllItems()}>
        خالی کردن سبد خرید❌🛒
      </button>
      <div>
        <div className="flex w-auto h-auto flex-col m-3">
          {items.map((items) => (
            <Buy_Item items={items} handleDeleteItems={handleDeleteItems} />
          ))}
        </div>
      </div>
    </>
  );
}
function Buy_Item({ items, handleDeleteItems }) {
  return (
    <div className="w-auto h-auto flex ">
      <div>
        <span>{items.name}</span> <span>{items.buyCount}</span>
        <span> {items.price} تومان </span>
        <button onClick={() => handleDeleteItems(items.id)}>❌</button>
      </div>
    </div>
  );
}
