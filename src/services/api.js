import axios from "axios";

const api = axios.create({
  baseURL: "https://eduhdev.com.br/teste",
});

export default api;
