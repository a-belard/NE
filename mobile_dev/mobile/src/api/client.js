import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://5567-197-243-61-202.ngrok-free.app/api/v1",
  timeout: 1000000,
});

export default apiClient;
