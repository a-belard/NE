import apiClient from "./client";

const generateToken = async (amount, meterNumber) =>
  apiClient.post("/purchased-tokens/generate", { amount, meterNumber });

const validateToken = async (token) =>
  apiClient.post("/purchased-tokens/validate", { token });

const getTokensByMeterNumber = async (meterNumber) =>
  apiClient.get(`/purchased-tokens?meterNumber=${meterNumber}`);

export default {
  generateToken,
  validateToken,
  getTokensByMeterNumber,
};
