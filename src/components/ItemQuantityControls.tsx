import { useDispatch } from "react-redux";
import { Cart, decreaseItemQuantity, increaseItemQuantity, removeItem } from "../store/cartSlice/cartSlice";

interface ItemQuantityControls {
  itemId: number;
  cartItem: Cart;
}

const ItemQuantityControls = ({ itemId, cartItem }: ItemQuantityControls) => {
  const dispatch = useDispatch();

  const handleIncreaseItemQuantity = () => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDescreaseItemQuantity = () => {
    dispatch(decreaseItemQuantity(itemId));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={handleDescreaseItemQuantity}
        className="inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm"
      >
        -
      </button>
      <span className="font-bold">{cartItem?.quantity}</span>
      <button
        onClick={handleIncreaseItemQuantity}
        className="inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm"
      >
        +
      </button>
      <button
        onClick={handleRemoveItem}
        className="rounded-full bg-yellow-400 text-slate-950 px-2.5 py-1 uppercase font-semibold"
      >
        Delete
      </button>
    </div>
  );
};

export default ItemQuantityControls;
