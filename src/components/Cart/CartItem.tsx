import { Cart } from "../../store/cartSlice/cartSlice";
import ItemQuantityControls from "../ItemQuantityControls";

interface CartItemProps {
  cartItem: Cart;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  return (
    <div className="flex flex-col gap-2 justify-center text-slate-950 ">
      <p className="sm:text-lg">
        X{cartItem.quantity} {cartItem.name}
      </p>
      <div className="flex justify-between items-center ">
        <p className="font-bold sm:text-lg">€{cartItem.totalPrice}</p>
        <ItemQuantityControls cartItem={cartItem} itemId={cartItem.pizzaId} />
      </div>
    </div>
  );
};

export default CartItem;
