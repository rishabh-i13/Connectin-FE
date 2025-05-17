import axios   from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://connectin-be.onrender.com/api/v1",
    withCredentials:true
});