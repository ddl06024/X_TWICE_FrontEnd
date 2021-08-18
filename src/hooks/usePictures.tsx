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

  async function fetchPicturesBySearch(params: any) {
    console.log(params.keyword);
    const { data } = await instance2.get(
      `/pictures/keywords/${params.keyword}`,
      {
        params,
      }
    );
    return data;
  }

  async function increasePostsViews(params: any) {
    console.log(params);
    const { data } = await instance2.put(`/pictures/count/${params.token_id}`, {
      params,
    });
    return data;
  }

  async function getUsersToken(params: any) {
    console.log(params);
    const { data } = await instance2.get("/pictures/mylist", {
      params,
    });
    console.log(data);
    return data;
  }

  async function setTokenOnSale(params: any) {
    console.log(params);
    const { data } = await instance2.put("/pictures/sale", params);
    console.log(data);
    return data;
  }

  async function cancleTokenOnSale(params: any) {
    console.log(params);
    const { data } = await instance2.put(
      `/pictures/cancle/${params.token_id}`,
      { params }
    );
    console.log(data);
    return data;
  }

  async function BuyToken(params: any) {
    console.log(params);
    const { data } = await instance2.put("/pictures", params);
    console.log(data);
    return data;
  }

  return {
    insertPicture,
    setTokenOnSale,
    fetchPicturesByPrice,
    fetchPicturesByPopularity,
    fetchPicturesByCategory,
    fetchPictureInfo,
    fetchPicturesBySearch,
    increasePostsViews,
    getUsersToken,
    cancleTokenOnSale,
    BuyToken,
  };
}
