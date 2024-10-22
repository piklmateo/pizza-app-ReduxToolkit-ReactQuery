import { Cart } from "../../store/cartSlice/cartSlice";

interface OrderItemProps {
  orderItem: Cart;
}

const OrderItem = ({ orderItem }: OrderItemProps) => {
  return (
    <div className="space-y-3 ">
      <div className="flex justify-between ">
        <p>
          <span className="font-semibold">{`X${orderItem.quantity}`}</span> {orderItem.name}
        </p>
        <p className="font-semibold">{`€${orderItem.totalPrice.toFixed(2)}`}</p>
      </div>
      <p className="italic text-stone-400 capitalize">{orderItem?.ingridients?.join(", ")}</p>
    </div>
  );
};

export default OrderItem;
