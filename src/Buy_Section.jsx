import React from "react";

export function Buy_Section({
  items,
  handleDeleteItems,
  handleDeleteAllItems,
}) {
  const sumPriceEachItem = items.map((item) => item.price * item.buyCount);
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
        <div className="flex flex-col w-[70%] h-auto m-3 border-2 border-black">
          <table className="table-fixed ">
            <thead>
              <tr>
                <th className="border border-slate-600">نام محصول</th>
                <th className="border border-slate-600">قیمت</th>
                <th className="border border-slate-600">تعداد</th>
                <th className="border border-slate-600">مجموع قیمت</th>
                <th className="border border-slate-600">حذف</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <Buy_Item
                  key={item.id} // Add a unique key for each item
                  item={item}
                  handleDeleteItems={handleDeleteItems}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>مبلغ کل خرید: {totalPriceAllItems} تومان</div>
    </>
  );
}

function Buy_Item({ item, handleDeleteItems }) {
  return (
    <tr className="border border-slate-600">
      <td className="text-center border border-slate-600">{item.name}</td>
      <td className="text-center border border-slate-600 ">{item.price}</td>
      <td className="text-center border border-slate-600">{item.buyCount}</td>
      <td className="text-center border border-slate-600">
        {item.price * item.buyCount}
      </td>
      <td className="text-center">
        <button onClick={() => handleDeleteItems(item.id)}>❌</button>
      </td>
    </tr>
  );
}
