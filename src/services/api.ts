import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmoney-xi-three.vercel.app/api",
});
