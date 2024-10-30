import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_KEY;

export const Product_Read = async () => {
  const response = await axios.get(`${BASE_URL}/products/recommend/menu/2`, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
    },
  });
  return response.data;
};

export const Product_Detail_Read = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/detail/${id}`, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
    },
  });
  return response.data;
};

export const Recipe_Read = async () => {
  const response = await axios.get(`${BASE_URL}/products/recommend/recipe/1`, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
    },
  });
  return response.data;
};

export const Product_ReadByCategory = async (category) => {
  const response = await axios.post(`${BASE_URL}/products/category`, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
    },
    category: category,
  });
  return response.data;
};

export const Recipe_ReadByCategory = async (category) => {
  const response = await axios.post(`${BASE_URL}/products/recipe/category`, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
    },
    category: category,
  });
  return response.data;
};
