import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Cart, clearCart } from "../../store/cartSlice/cartSlice";
import { createOrder } from "../../services/orderService";
import { useNavigate } from "react-router";
import useGeolocation from "../../hooks/useGeolocation";
import { useEffect } from "react";
import Spinner from "../Spinner";

interface FormData {
  fname: string;
  phone: string;
  address: string;
  priority: boolean;
}

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.cart);
  const userName = useSelector((state: any) => state.user.name);
  const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);
  const totalPrice = cart.reduce((acc: number, item: Cart) => acc + item.totalPrice, 0);
  const { data: cityData, handleCurrentAddress, isError, isLoading } = useGeolocation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<FormData>();

  useEffect(() => {
    if (cityData) {
      setValue("address", `${cityData.city}, ${cityData.countryName}`);
    }
  }, [cityData, setValue]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const { fname, phone, address, priority } = data;
      const order = {
        cart,
        user: {
          name: fname,
          phone,
          address,
          isAuthenticated,
        },
        totalPrice,
        priority: priority ? "on" : "",
      };

      const { id } = await createOrder(order);
      dispatch(clearCart());
      navigate(`/orders/${id}`);
    } catch (error) {
      console.error("Order submission error:", error);
    }
  };

  if (isError) navigate("/");
  if (isLoading) return <Spinner />;

  return (
    <div className="text-slate-950 p-4 text-lg sm:max-w-[40rem] sm:mx-auto">
      <h1 className="text-2xl mb-6">Ready to order? Let's go!</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="fname">First name</label>
          <input
            className="rounded-full border px-4 py-2 text-sm focus:ring focus:ring-yellow-400"
            type="text"
            id="fname"
            {...register("fname", { required: true })}
            defaultValue={userName || ""}
          />
        </div>

        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="phone">Phone number</label>
          <input
            className="rounded-full border px-4 py-2 text-sm focus:ring focus:ring-yellow-400"
            type="text"
            id="phone"
            {...register("phone", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2 mb-2">
          <div className="flex justify-between items-center">
            <label htmlFor="address">Address</label>
            <button
              onClick={handleCurrentAddress}
              className="rounded-full px-4 py-2 uppercase bg-yellow-400 hover:bg-yellow-300 text-sm"
              type="button"
            >
              Use current address
            </button>
          </div>
          <input
            className="rounded-full border px-4 py-2 text-sm focus:ring focus:ring-yellow-400"
            type="text"
            id="address"
            {...register("address", { required: true })}
          />
        </div>

        <div className="flex gap-4 items-center my-4">
          <input
            className="h-6 w-6 accent-yellow-400 focus:ring-2 focus:ring-yellow-400"
            type="checkbox"
            id="priority"
            {...register("priority")}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <button className="rounded-full px-4 py-2 uppercase bg-yellow-400 hover:bg-yellow-300" disabled={isSubmitting}>
          Order now for ${totalPrice.toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default Form;
