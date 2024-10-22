import { useEffect } from "react";
import OrderItem from "./OrderItem";
import { getOrder } from "../../services/orderService";
import { useNavigate, useParams } from "react-router-dom";
import { Order as OrderInterface } from "../../store/orderSlice/orderSlice";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";

const Order = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrder(id!),
    enabled: !!id,
  });

  useEffect(() => {
    if (isError) {
      console.error("Error fetching order:", error);
      navigate("/");
    }
  }, [isError, navigate, error]);

  if (isPending) {
    return <Spinner />;
  }

  if (!data) {
    return <div>Order not found. Redirecting...</div>;
  }

  const order: OrderInterface = data;

  return (
    <div className="max-w-[45rem] mx-auto space-y-6 my-5">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Order #{order.id} status</h1>
        <div className="space-x-5">
          {order.priority && (
            <span className="bg-red-500 px-2.5 py-1 rounded-full text-white uppercase font-semibold text-sm">
              Priority
            </span>
          )}
          <span className="bg-green-500 px-2.5 py-1 rounded-full text-white uppercase font-semibold text-sm">
            Preparing order
          </span>
        </div>
      </div>
      <div className="flex justify-between bg-stone-200 p-5">
        <p className="font-semibold">Only 27 minutes left</p>
        <span className="font-light">{`(Estimated delivery: Tue Oct 22 2024 12:10:56)`}</span>
      </div>

      {order.cart.map((item) => (
        <div key={item.pizzaId} className="border-b-2 border-b-stone-200">
          <OrderItem orderItem={item} />
        </div>
      ))}

      <div className="bg-stone-200 p-5 space-y-3">
        <p>Price pizza: {`€${order.totalPrice}`}</p>
        {order.priority && <p>Price priority: €5.00</p>}
        <p className="font-semibold text-lg">{`To pay on delivery: €${order.priority ? (order.totalPrice + 5).toFixed(2) : order.totalPrice.toFixed(2)}`}</p>
      </div>
      <button
        onClick={() => navigate("/menu")}
        className="rounded-full bg-yellow-400 px-4 py-2 font-semibold capitalize"
      >
        Back to menu
      </button>
    </div>
  );
};

export default Order;
