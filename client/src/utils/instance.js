import axios from "axios";

const instance = axios.create({
  baseURL: "https://manhyia-north-live.onrender.com/api/v1",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export default instance;
