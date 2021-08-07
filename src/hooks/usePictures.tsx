import { instance1, instance2 } from "../configs/axios";
import { getCookie } from "../configs/cookie";

export function usePictures() {
  async function registerPictures(params: any) {
    const { data } = await instance2.post("/pictures", params);
    return data;
  }
  async function getPictures(params: any) {
    const { data } = await instance2.get("/pictures/popular", {
      params,
    });
    return data;
  }
  return {
    registerPictures,
    getPictures,
  };
}
