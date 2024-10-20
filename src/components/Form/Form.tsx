import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Cart, clearCart } from "../../store/cartSlice/cartSlice";
import { createOrder } from "../../services/orderService";
import { useNavigate } from "react-router";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.cart);
  const userName = useSelector((state: any) => state.user.name);
  const totalPrice = cart.reduce((acc: number, item: Cart) => {
    return acc + item.totalPrice;
  }, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      console.log(data);

      const { fname, phone, address, priority } = data;
      const order = {
        cart: cart,
        user: {
          name: fname,
          phone: phone,
          address: address,
        },
        totalPrice: totalPrice,
        priority: priority ? "on" : "",
      };

      await createOrder(order);
      dispatch(clearCart());
      navigate("/menu");
    } catch (error) {
      console.error("error: ", error);
    }
  };

  return (
    <div className="text-slate-950 p-4 text-lg sm:max-w-[40rem] sm:mx-auto">
      <h1 className="text-2xl mb-6 ">Ready to order? Let's go!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="fname">First name</label>
          <input
            className="rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
            type="text"
            id="fname"
            {...register("fname")}
            defaultValue={userName ? userName : ""}
          />
        </div>
        <div className="flex flex-col gap-2 mb-2 text-">
          <label htmlFor="phone">Phone number</label>
          <input
            className="rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
            type="text"
            id="phone"
            {...register("phone")}
          />
        </div>
        <div className="flex flex-col gap-2  mb-2">
          <label htmlFor="address">Address</label>
          <input
            className="rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
            type="text"
            id="address"
            {...register("address")}
          />
        </div>
        <div className="flex gap-4 items-center justify-start my-4">
          <input
            className="h-6 w-6 accent-yellow-400 bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            id="priority"
            {...register("priority")}
          />
          <span>Want to give your order priority?</span>
        </div>
        <button className="rounded-full px-4 py-2 uppercase bg-yellow-400 hover:bg-yellow-300 transition-colors ">
          Order now from X
        </button>
      </form>
    </div>
  );
};

export default Form;
