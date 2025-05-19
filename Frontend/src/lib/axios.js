import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://streamify-backend-ebon.vercel.app/api",
  withCredentials: true,
});
