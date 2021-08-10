import { instance1, instance2 } from "../configs/axios";

export function useUsers() {
  async function loginUser(params: any) {
    const { data } = await instance1.post("/users/login", params);
    return data;
  }
  async function signUpUser(params: any) {
    const { data } = await instance1.post("/users", params);
    return data;
  }
  async function getUsers() {
    const { data } = await instance2.get("/users");
    console.log(data);
    return data;
  }

  return {
    loginUser,
    signUpUser,
    getUsers,
  };
}
