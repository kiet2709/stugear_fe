import axios from "axios";
import useRefreshToken from "../hooks/useRefreshToken";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:3000/api";

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});

let isRefreshing = false;

axiosPrivate.interceptors.request.use(
  (request) => {
    console.log("Request here");
    if (!request.headers["Authorization"]) {
      request.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "access_token"
      )}`;
    }
    console.log(request);
    return request;
  },
  (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const prevRequest = error?.config;
    if (
      (error.response.status === 498 || error.response.status === 403) &&
      !prevRequest?.sent
    ) {
      prevRequest.sent = true;

      const refresh = await useRefreshToken();

      if (refresh) {
        localStorage.setItem("access_token", refresh?.access_token);
        localStorage.setItem("refresh_token", refresh?.refresh_token);
        return axiosPrivate(prevRequest);
      } else {
        console.log("Hết cứu")
      }
    } else {
      console.log("Hết cứu thật")
    }
    return Promise.reject(error);
  }
);

export { axiosPrivate };
