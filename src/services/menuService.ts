export const fetchPizzas = async () => {
  try {
    const res = await fetch("https://react-fast-pizza-api.onrender.com/api/menu");

    if (!res.ok) {
      throw new Error("Unable to fetch data...");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
