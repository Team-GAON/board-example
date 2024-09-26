import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getCookie, removeCookie, setCookie } from "../react-cookie/cookie";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const instance = axios.create({
  baseURL: "https://gaon.cher1shrxd.me",
  headers: {
    Accept: "application/json, text/plain, */*, multipart/form-data",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    const token = getCookie("ACCESS_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    console.log(error);
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (originalRequest.data instanceof FormData) {
      originalRequest.headers["Content-Type"] = "multipart/form-data";
    } else {
      originalRequest.headers["Content-Type"] = "application/json";
    }

    if (originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("REFRESH_TOKEN");
      if (refreshToken) {
        return axios
          .post(
            `https://gaon.cher1shrxd.me/auth/refresh`,
            {
              refreshToken
            }
          )
          .then((response) => {
            const newAccessToken = response.data.data.accessToken;
            const newRefreshToken = response.data.data.refreshToken;
            setCookie("ACCESS_TOKEN", newAccessToken, {path:'/'});
            setCookie("REFRESH_TOKEN", newRefreshToken, {
              path: "/",
              maxAge: 2600000,
            });
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            return instance(originalRequest);
          })
          .catch((refreshError) => {
            removeCookie("ACCESS_TOKEN");
            removeCookie("REFRESH_TOKEN");
            return Promise.reject(refreshError);
          });
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
