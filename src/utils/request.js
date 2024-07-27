import axios from "axios";

// 创建 axios 实例
const service = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.NODE_ENV === "development" ? "/api" : "http://localhost:3000",
  timeout: 5000,
});

//requst拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error(`error:`, error);
    Promise.reject(error);
  }
);

//response拦截器
service.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error(`error:`, error);
    Promise.reject(error);
  }
);

export default service;
