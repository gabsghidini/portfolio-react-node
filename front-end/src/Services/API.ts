import axios, { AxiosInstance } from "axios";

const API: AxiosInstance = axios.create({
	baseURL: "http://localhost:3000/",
	timeout: 5000,
});

export default API;
