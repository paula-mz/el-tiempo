import { axiosInstance } from "./axios";


const baseURL= "http://www.el-tiempo.net/api/json/v2/provincias/08/municipios"

export const getTowns = () => {
	return axiosInstance.get(baseURL)
};

export const getTownData = (id) => {
  return axiosInstance.get(`${baseURL}/${id}`);
};