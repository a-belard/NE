import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.109:8000/api/v1",
  timeout: 1000000,
});

export default apiClient;
