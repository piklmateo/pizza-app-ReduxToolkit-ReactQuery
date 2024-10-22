import { fetchPizzas } from "../../services/menuService";
import MenuItem, { Pizza } from "./MenuItem";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Menu = () => {
  const cart = useSelector((state: any) => state.cart.cart);
  const navigate = useNavigate();
  const { data, isError, isPending } = useQuery({
    queryKey: ["menu"],
    queryFn: fetchPizzas,
  });

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  });

  if (isPending) {
    return <Spinner />;
  }

  const menuItems: Pizza[] = data.data;

  return (
    <div className="flex justify-center items-center m-2">
      <div className="flex flex-col sm:items-center min-w-64 divide-y divide-stone-200">
        {menuItems.map((item) => (
          <div className="py-4" key={item.id}>
            <MenuItem menuItem={item} cart={cart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
