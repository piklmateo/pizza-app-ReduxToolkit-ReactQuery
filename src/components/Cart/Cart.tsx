import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useNavigate } from "react-router";
import { Cart as CartInterface, clearCart } from "../../store/cartSlice/cartSlice";

const Cart = () => {
  const userName = useSelector((state: any) => state.user.name);
  const cart = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    if (!cart) return;
    dispatch(clearCart());
  };

  console.log(cart);

  return (
    <div className="space-y-5 p-4 sm:mx-auto max-w-[40rem]">
      <span onClick={() => navigate(-1)} className="font-medium text-blue-500 cursor-pointer hover:text-blue-700">
        {"<- "}Back to menu
      </span>
      <div className="space-y-5">
        <h1 className="font-medium text-2xl">Your cart, {userName}</h1>

        {cart.length > 0 ? (
          <>
            <div className="space-y-4 divide-y divide-stone-200">
              {cart.map((item: CartInterface) => (
                <CartItem key={item.pizzaId} cartItem={item} />
              ))}
            </div>
            <div className="space-x-4">
              <button className="hover:bg-yellow-300 hover:transition-colors px-4 py-2 uppercase font-medium rounded-full bg-yellow-400">
                Order pizzas
              </button>
              <button
                onClick={handleClearCart}
                className="hover:bg-stone-200 hover:transition-colors px-4 py-2 uppercase font-medium rounded-full border-solid border-2 border-stone-20"
              >
                Clear cart
              </button>
            </div>
          </>
        ) : (
          <p className="font-semibold text-2xl">Cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
