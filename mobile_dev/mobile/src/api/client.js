import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://ff88-105-178-113-194.ngrok-free.app/api/v1",
  timeout: 1000000,
});

export default apiClient;
