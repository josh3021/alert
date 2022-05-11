import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: process.env.API_URI,
  // timeout: 15000,
});

export const requests = {
  get: (url: string, config?: AxiosRequestConfig<any>) =>
    instance.get(url, config),
  post: (url: string, body: {}, config?: AxiosRequestConfig<any>) =>
    instance.post(url, body, config),
  put: (url: string, body: {}, config?: AxiosRequestConfig<any>) =>
    instance.put(url, body, config),
  patch: (url: string, body: {}, config?: AxiosRequestConfig<any>) =>
    instance.patch(url, body, config),
  delete: (url: string, config?: AxiosRequestConfig<any>) =>
    instance.delete(url, config),
};
