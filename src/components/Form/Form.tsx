import { useForm, SubmitHandler, FieldValues } from "react-hook-form"; // Make sure to import these types
import { useDispatch, useSelector } from "react-redux";
import { Cart, clearCart } from "../../store/cartSlice/cartSlice";
import { createOrder } from "../../services/orderService";
import { useNavigate } from "react-router";
import Spinner from "../Spinner";

interface FormData {
  fname: string;
  phone: string;
  address: string;
  priority: string;
}

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.cart);
  const userName = useSelector((state: any) => state.user.name);
  const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);
  const totalPrice = cart.reduce((acc: number, item: Cart) => {
    return acc + item.totalPrice;
  }, 0);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log(data);

      const { fname, phone, address, priority } = data;
      const order = {
        cart: cart,
        user: {
          name: fname,
          phone: phone,
          address: address,
          isAuthenticated: isAuthenticated,
        },
        totalPrice: totalPrice,
        priority: priority ? "on" : "",
      };

      const { id } = await createOrder(order);
      dispatch(clearCart());
      navigate(`/orders/${id}`);
    } catch (error) {
      console.error("error: ", error);
    }
  };

  if (isSubmitting) return <Spinner />;

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
            {...register("fname", { required: true })}
            defaultValue={userName ? userName : ""}
          />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="phone">Phone number</label>
          <input
            className="rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
            type="text"
            id="phone"
            {...register("phone", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="address">Address</label>
          <input
            className="rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
            type="text"
            id="address"
            {...register("address", { required: true })}
          />
        </div>
        <div className="flex gap-4 items-center justify-start my-4">
          <input
            className="h-6 w-6 accent-yellow-400 bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            id="priority"
            {...register("priority")}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>
        <button className="rounded-full px-4 py-2 uppercase bg-yellow-400 hover:bg-yellow-300 transition-colors ">
          Order now for ${totalPrice.toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default Form;
