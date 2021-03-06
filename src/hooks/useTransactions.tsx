import { instance2 } from "../configs/axios";
export function useTransactions() {
  async function insertHistory(params: any) {
    console.log(params.user_num1);
    const { data } = await instance2.post("/histories", params);
    console.log(data);
    return data;
  }
  async function fetchHistories(params: any) {
    console.log(params);
    const { data } = await instance2.get("/histories", {
      params,
    });
    console.log(data);
    return data;
  }

  return {
    fetchHistories,
    insertHistory,
  };
}
