import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

function Chart() {
  return (
    <>
      <div className=" mt-10 md:flex md:gap-5">
        <div className="bg-white p-5 pb-16 md:pb-10 md:w-3/5 h-screen md:h-5/6 rounded">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-lg">Overview</p>
              <p className="text-slate-400">Monthly Earning</p>
            </div>
            <select className="text-slate-400 bg-slate-50">
              <option value="Quarterly">Quarterly</option>
            </select>
          </div>
          <BarChart />
        </div>
        <div className="bg-white my-10 md:my-0  p-5 h-screen md:h-5/6 md:w-2/5 rounded z-10">
          <p className="font-bold text-lg">Customers</p>
          <p className="text-slate-400">Customers that buy products</p>
          <PieChart />
        </div>
      </div>
    </>
  );
}

export default Chart;
