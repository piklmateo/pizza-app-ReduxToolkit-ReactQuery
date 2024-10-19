import { addItem, increaseItemQuantity, decreaseItemQuantity, removeItem, Cart } from "../../store/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import ItemQuantityControls from "../ItemQuantityControls";

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
  cart: Cart[];
}

const MenuItem = ({ menuItem, cart }: MenuItemProps) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    let quantity = 1;
    const newMenuItem = {
      pizzaId: menuItem.id,
      name: menuItem.name,
      quantity: quantity,
      unitPrice: menuItem.unitPrice,
      totalPrice: menuItem.unitPrice * quantity,
    };
    dispatch(addItem(newMenuItem));
  };

  const itemInCart = cart.find((item) => item.pizzaId === menuItem.id);

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
          {!itemInCart && !menuItem.soldOut && (
            <button onClick={handleAddItem} className="rounded-full bg-yellow-400 text-slate-950 px-2.5 py-1">
              Add to cart
            </button>
          )}
          {itemInCart && <ItemQuantityControls cartItem={itemInCart} itemId={menuItem.id} />}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
