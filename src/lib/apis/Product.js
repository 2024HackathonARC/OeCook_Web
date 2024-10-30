import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_KEY;

export const Product_Read = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/recommend/menu/2`, {
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
