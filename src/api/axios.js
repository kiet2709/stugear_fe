import axios from "axios";
import useRefreshToken from "../hooks/useRefreshToken";
import { async } from "q";

const BASE_URL = "http://localhost:3000/api";
const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});
const axioisPublic = axios.create({
  baseURL: BASE_URL,
});

axiosPrivate.interceptors.request.use(
  (request) => {
    console.log("Request here");
    if (!request.headers["Authorization"]) {
      request.headers["Authorization"] = `Bearer ${localStorage.getItem("access_token")}`;
    }
    console.log(request)
    return request;
  },
  (error) => Promise.reject(error)
);
axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if(error.response.status === 500){

      console.log("Old token")
      console.log(localStorage.getItem("access_token"))
      const refresh = await useRefreshToken()
      console.log(refresh)
      if(refresh){
        localStorage.setItem("access_token",refresh)
      }
      console.log("New token")
      console.log(localStorage.getItem("access_token"))
    }else{
      return Promise.reject(error)
    }
  }
);

export { axiosPrivate, axioisPublic };
