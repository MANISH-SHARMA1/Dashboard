import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { TbNotes, TbCoins, TbShoppingBag } from "react-icons/tb";

function Card() {
  const cardInfo = [
    {
      iconStyle: "rounded-full bg-green-200 text-7xl  p-4 text-green-600",
      icon: <AiOutlineDollar />,
      name: "Earning",
      price: "$198k",
      hikeStyle: "text-green-600 font-bold",
      hike: "↑ 37.8% ",
    },
    {
      iconStyle: "rounded-full bg-violet-200 text-7xl p-4 text-violet-600",
      icon: <TbNotes />,
      name: "Orders",
      price: "$2.4k",
      hikeStyle: "text-red-600 font-bold",
      hike: "↓ 2% ",
    },
    {
      iconStyle: "rounded-full bg-blue-200 text-7xl p-4 text-blue-600",
      icon: <TbCoins />,
      name: "Balance",
      price: "$2.4k",
      hikeStyle: "text-red-600 font-bold",
      hike: "↓ 2% ",
    },
    {
      iconStyle: "rounded-full bg-pink-200 text-7xl p-4 text-pink-600",
      icon: <TbShoppingBag />,
      name: "Total Sales",
      price: "$89k",
      hikeStyle: "text-green-600 font-bold",
      hike: "↑ 11% ",
    },
  ];

  return (
    <>
      <div className="flex gap-10 md:gap-7  md:overflow-hidden overflow-x-scroll scrollbar-hide no-scrollbar">
        {cardInfo.map((card) => (
          <div className="flex bg-white rounded md:gap-2 gap-10 px-8 md:px-2 py-5 items-center">
            <div className={card.iconStyle}>{card.icon}</div>
            <div>
              <p className="text-slate-400">{card.name}</p>
              <p className="text-slate-800 text-2xl font-bold">{card.price}</p>
              <p className="text-slate-700 font-semibold">
                <span className={card.hikeStyle}>{card.hike}</span> this month
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
