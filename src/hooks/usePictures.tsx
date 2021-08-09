import { instance1, instance2 } from "../configs/axios";
import { getCookie } from "../configs/cookie";

export function usePictures() {
  async function insertPicture(params: any) {
    const { data } = await instance2.post("/pictures", params);
    return data;
  }

  async function fetchPicturesByPopularity(params: any) {
    const { data } = await instance2.get("/pictures/popular", {
      params,
    });
    return data;
  }

  async function fetchPicturesByPrice(params: any) {
    const { data } = await instance2.get("/pictures/price", {
      params,
    });
    return data;
  }

  async function fetchPicturesByCategory(params: any) {
    const { data } = await instance2.get("/pictures/category", {
      params,
    });
    return data;
  }

  async function fetchPictureInfo(params: any) {
    console.log(params);
    const { data } = await instance2.get(`/pictures/${params}`, {
      params,
    });
    return data;
  }

  return {
    insertPicture,
    fetchPicturesByPrice,
    fetchPicturesByPopularity,
    fetchPicturesByCategory,
    fetchPictureInfo,
  };
}
