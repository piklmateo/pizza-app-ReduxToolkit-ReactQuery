import { useEffect, useState } from "react";
import { fetchPizzas } from "../../services/menuService";
import MenuItem, { Pizza } from "./MenuItem";
import { useSelector } from "react-redux";

const Menu = () => {
  const [menuItems, setMenuItems] = useState<Pizza[]>([]);
  const cart = useSelector((state: any) => state.cart.cart);

  console.log(cart.length);

  useEffect(() => {
    async function fetchMenuData() {
      const data = await fetchPizzas();
      setMenuItems(data.data);
    }

    fetchMenuData();
  }, []);

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
