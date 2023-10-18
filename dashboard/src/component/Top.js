import React from "react";
import { MdWavingHand, MdSearch } from "react-icons/md";
import Card from "./Card/Card";
import Chart from "./Charts/Chart";
import ProductSell from "./ProductSell";

function Top() {
  return (
    <div className="flex flex-col bg-indigo-50 md:ml-48 pl-24 pr-10 w-full  ">
      <div className=" h-16 flex w-auto justify-between">
        <p className="flex gap-1 items-center font-semibold">
          Hello Shahrukh
          <MdWavingHand className="text-orange-300 " />
        </p>
        <div className="flex items-center ">
          <p className="bg-white p-1 text-slate-500">
            <MdSearch />
          </p>
          <input type="text" placeholder="Search" className="hidden md:flex" />
        </div>
      </div>
      <Card />
      <Chart />
      <ProductSell />
    </div>
  );
}

export default Top;
