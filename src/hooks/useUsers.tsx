import { instance1, instance2 } from "../configs/axios";

export function useUsers() {
    
    async function loginUser(params: any) {
        const { data } = await instance1.post("/users/login", params)
        return data
    }
    async function isUserLogin(params: any){
        const res = await instance2.get("/users/login", params)
        return res;
    }
    return {
        loginUser, isUserLogin
    }
}