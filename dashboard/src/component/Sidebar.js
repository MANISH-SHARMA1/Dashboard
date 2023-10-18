import React from "react";
import { TbHexagonNumber0, TbCoins } from "react-icons/tb";
import { CgKeyhole } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { LuBadgePercent, LuCodesandbox } from "react-icons/lu";
import { MdOutlineLiveHelp } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import evans from "../assets/download.jpeg";

function Sidebar() {
  const listItem = [
    {
      icon: <CgKeyhole />,
      itemName: "Dashboard",
    },
    {
      icon: <LuCodesandbox />,
      itemName: "Product",
      arrow: <FiChevronRight />,
    },
    {
      icon: <BsPerson />,
      itemName: "Customers",
      arrow: <FiChevronRight />,
    },
    {
      icon: <TbCoins />,
      itemName: "Income",
      arrow: <FiChevronRight />,
    },
    {
      icon: <LuBadgePercent />,
      itemName: "Product",
      arrow: <FiChevronRight />,
    },
    {
      icon: <MdOutlineLiveHelp />,
      itemName: "Help",
      arrow: <FiChevronRight />,
    },
  ];

  return (
    <>
      <div className="bg-blue-900 text-white pt-4 pb-10 fixed">
        <p className="font-bold items-center gap-2 text-xl md:flex  mx-6 py-5 hidden ">
          <TbHexagonNumber0 />
          Dashboard
        </p>
        <ul>
          {listItem.map((item) => (
            <li className="flex p-3 my-1 mx-4 rounded items-center gap-14 md:justify-between hover:bg-white hover:text-blue-800 cursor-pointer">
              <div className="flex items-center gap-2 ">
                {item.icon}
                <div className="hidden md:contents">{item.itemName}</div>
              </div>
              <div className="hidden md:contents">{item.arrow}</div>
            </li>
          ))}
        </ul>

        {/* OWNER */}
        <div className="bg-blue-600 flex items-center rounded mx-1  md:px-4 gap-5 mt-52 md:mt-24 ">
          <img src={evans} alt="img" className="rounded-full w-14 h-14 " />
          <div className="hidden md:block">
            <h5 className="font-bold">Evano</h5>
            <p className="text-slate-200 text-sm">Project Manager</p>
          </div>
          <div className="hidden md:contents">
            <FiChevronRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
