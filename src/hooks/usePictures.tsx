import { instance1, instance2 } from "../configs/axios";

export function usePictures() {
  async function registerPictures(params: any) {
    const { data } = await instance2.post("/pictures", params);
    return data;
  }
  return {
    registerPictures,
  };
}
