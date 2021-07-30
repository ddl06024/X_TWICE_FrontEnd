import axios from "axios";
import { getCookie } from "../hooks/cookie";

export const instance1 = axios.create({
  baseURL: "http://172.16.163.153:4000",
  timeout: 1000,
  /*headers: {'Content-Type': "application/json"}*/
});
export const instance2 = axios.create({
  baseURL: "http://172.16.163.153:4000",
  headers: {
    "Content-Type": "application/json",
    Authroization: `${getCookie("myToken")}`,
  },
});
