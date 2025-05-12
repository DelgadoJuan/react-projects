const API_URL = "https://fakestoreapi.com/products";

const fetchProductos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error fetching productos:", response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching productos:", error);
  }
};

const getProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Error fetching producto:", response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching producto:", error);
  }
};

export { fetchProductos, getProduct };
