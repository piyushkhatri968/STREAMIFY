import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://streamify-sigma-six.vercel.app/api",
  withCredentials: true,
});
