import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Cart } from "../store/cartSlice/cartSlice";

const Footer = () => {
  const cart = useSelector((state: any) => state.cart.cart);
  const totalPrice = cart.reduce((acc: number, item: Cart) => {
    return acc + item.totalPrice;
  }, 0);
  const totalQuantity = cart.reduce((acc: number, item: Cart) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div className="flex items-center justify-between bg-slate-950 px-6 py-6 text-slate-200">
      <div className="flex gap-2">
        {totalQuantity > 0 ? (
          <>
            <p>{totalQuantity} Pizzas,</p>
            <p>${totalPrice.toFixed(2)}</p>
          </>
        ) : (
          <p>Empty</p>
        )}
      </div>
      <div>
        <Link to="/cart">
          <span>OPEN CART</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
