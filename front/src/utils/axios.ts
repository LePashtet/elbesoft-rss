import axios from "axios";

export const api = axios.create(import.meta.env.VITE_API_SERVER);
