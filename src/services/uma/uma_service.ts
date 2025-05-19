import axios from "axios";

const NODERED_API = import.meta.env.VITE_NODERED_API;

export const getAllUmas = (building: string) => axios.get(`${NODERED_API}/get/umas/${building}`);

