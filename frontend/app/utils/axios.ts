import axios from "axios";

export const getAxios = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });
};

export const getAxiosWithToken = (token: string) => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
