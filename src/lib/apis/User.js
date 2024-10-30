import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_KEY;

export const User_Read = async () => {
  const response = await axios.get(`${BASE_URL}/users/2`, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
    },
  });
  return response.data;
};
