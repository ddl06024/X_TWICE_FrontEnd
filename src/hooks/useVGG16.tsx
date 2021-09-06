import { instance2 } from "../configs/axios";

export function useVGG16() {
  async function computeSimilarity(params: any) {
    console.log(params);
    const { data } = await instance2.post("/vgg16", params);
    return data;
  }
  async function sendVectorNorm(params: any) {
    console.log(params);
    const { data } = await instance2.post("/vgg16", { params });
    console.log(data);
    return data;
  }
  return { computeSimilarity, sendVectorNorm };
}
