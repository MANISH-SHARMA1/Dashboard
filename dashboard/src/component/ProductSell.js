import React from "react";
import { MdSearch } from "react-icons/md";
import abstract3D from "../assets/abstract3D.jpeg";
import sarphensIllustration from "../assets/sarphensIllustration.jpeg";

function ProductSell() {
  const product = [
    {
      img: abstract3D,
      name: "Abstract 3D",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stock: "32 in stock",
      price: "$ 45.99",
      score: "20",
    },
    {
      img: sarphensIllustration,
      name: "Sarphens Illustration ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stock: "32 in stock",
      price: "$ 45.99",
      score: "20",
    },
  ];
  return (
    <>
      <div className="bg-white rounded mb-5 py-3">
        <div className=" h-16 flex px-5 justify-between items-center ">
          <p className="font-bold text-lg">Product Sell</p>
          <div className="flex items-center ">
            <p className=" p-1 bg-indigo-50 text-slate-500">
              <MdSearch />
            </p>
            <input
              className="bg-indigo-50 hidden md:flex"
              type="text"
              placeholder="Search"
            />

            <select className="ml-8 text-slate-400 bg-indigo-50">
              <option value="last30days">Last 30 days</option>
              <option value="last60days">Last 60 days</option>
            </select>
          </div>
        </div>
        <div className=" h-16 flex p-5 justify-between items-center">
          <p className="text-slate-400">Product Name</p>
          <div className="flex items-center  gap-10 md:gap-24">
            <p className="text-slate-400">Stock</p>
            <p className="text-slate-400">Price</p>
            <p className="text-slate-400">Total Score</p>
          </div>
        </div>
        <hr />
        {product.map((product) => (
          <div className=" h-16 flex p-5 justify-between items-center">
            <div className="flex gap-16 md:gap-4">
              <img
                src={product.img}
                alt={product.name}
                className="w-14 h-14 rounded-md hidden md:block"
              />
              <div>
                <p className="font-bold ">{product.name}</p>
                <p className="text-slate-400 hidden md:block">{product.desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-14 md:gap-28 ">
              <p className="font-medium">{product.stock}</p>
              <p className="font-bold">{product.price}</p>
              <p className="font-medium">{product.score}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductSell;
