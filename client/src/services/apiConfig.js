import axios from "axios";

const apiUrl = "https://sapphire-blog-api.herokuapp.com/api";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
