import { Cart } from "../store/cartSlice/cartSlice";
import { User } from "../store/userSlice/userSlice";

export interface Order {
  id?: string;
  cart: Cart[];
  user: User;
  totalPrice: number;
  priority: string;
}

export const getOrder = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:9000/orders/${id}`);

    if (!res.ok) throw new Error("Error while fetching order");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error: ", error);
  }
};

export const createOrder = async (order: Order) => {
  try {
    const res = await fetch("http://localhost:9000/orders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!res.ok) throw new Error("Error while creating order");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error: ", error);
  }
};

export const fetchCityByLatLang = async (lat: string | null, lang: string | null) => {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lang}`
    );

    if (!res.ok) {
      throw new Error("Couldn't fetch city by lat and lang");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
