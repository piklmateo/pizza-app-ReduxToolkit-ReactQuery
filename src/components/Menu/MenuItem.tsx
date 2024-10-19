export interface Pizza {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  soldOut: boolean;
  unitPrice: number;
}

export interface MenuItemProps {
  menuItem: Pizza;
}

const MenuItem = ({ menuItem }: MenuItemProps) => {
  return (
    <div className="flex gap-2 text-slate-950 sm:min-w-[40rem]">
      <img
        className={`w-28 ${menuItem.soldOut ? "opacity-70 grayscale" : ""}`}
        src={menuItem.imageUrl}
        alt={menuItem.name}
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col gap-2">
          <span>{menuItem.name}</span>
          <span className="text-slate-500 italic text-wrap capitalize">{menuItem.ingredients.join(", ")}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>{menuItem.soldOut ? "Sold out" : "$" + menuItem.unitPrice}</span>
          {/*<button className="rounded-full bg-yellow-400 text-slate-950 px-4 py-2">Add to card</button>*/}
          <div className="flex gap-2 items-center ">
            <button className="inline-block  rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm">
              -
            </button>
            <span className="font-bold">1</span>
            <button className="inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm">
              +
            </button>
            <button className="rounded-full bg-yellow-400 text-slate-950 px-2.5 py-1 uppercase font-semibold text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
