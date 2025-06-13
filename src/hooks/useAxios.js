

import axios from "axios";
import { API_BASE } from "../config";

const useAxios = () => {
  const instance = axios.create({
    baseURL: API_BASE
  });

  const get = (url) => instance.get(url);
  const post = (url, data) => instance.post(url, data);
  const patch = (url, data) => instance.patch(url, data);

  return { get, post, patch };
};

export default useAxios;
