import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

// Add auth token if you integrate REST calls later
api.interceptors.request.use(async (config) => {
  // Example: attach Firebase ID token if needed
  // const token = await getIdTokenSomehow();
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
