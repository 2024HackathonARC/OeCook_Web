import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_KEY;

export const Company_Read = async () => {
  const response = await axios.get(`${BASE_URL}/companies`, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
    },
  });
  return response.data;
};

export const Company_Detail_Read = async (id) => {
  const response = await axios.get(`${BASE_URL}/companies/detail/${id}`, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
    },
  });
  return response.data;
};
