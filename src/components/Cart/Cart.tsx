import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const userName = useSelector((state: any) => state.user.name);

  return (
    <div className="space-y-5 p-4 sm:mx-auto max-w-[40rem]">
      <span className="text-blue-500 ">{"<- "}Back to menu</span>
      <div className="space-y-5">
        <h1 className="font-medium text-2xl">Your cart, {userName}</h1>
        <CartItem />
        <div className="space-x-4">
          <button className="hover:bg-yellow-300 hover:transition-colors px-4 py-2 uppercase font-medium rounded-full bg-yellow-400">
            Order pizzas
          </button>
          <button className="hover:bg-stone-200 hover:transition-colors px-4 py-2 uppercase font-medium rounded-full border-solid border-2 border-stone-200 border-stone-200">
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
