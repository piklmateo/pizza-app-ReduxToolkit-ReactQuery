import React from "react";

const CartItem = () => {
  return (
    <div className="flex flex-col gap-2 justify-center text-slate-950 ">
      <p className="sm:text-lg">1X Margherita</p>
      <div className="flex justify-between items-center ">
        <p className="font-bold sm:text-lg">€12.00</p>
        <div className="flex gap-2 items-center ">
          <button className="inline-block  rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm">
            -
          </button>
          <span className="font-bold">1</span>
          <button className="inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm">
            +
          </button>
        </div>
        <button className="px-4 py-1 uppercase font-medium rounded-full bg-yellow-400 ">Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
