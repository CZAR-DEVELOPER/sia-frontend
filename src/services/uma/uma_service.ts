//-------------------------📦 IMPORTS-------------------------
import axios from "axios";

//-------------------------🔗 ENVIRONMENT VARIABLES-------------------------
const NODERED_API = import.meta.env.VITE_NODERED_API;

//-------------------------🕹️ TYPES-------------------------
export interface UmaData {
  floor: number;
  data: any;
}

export type UmaResponse = UmaData[];

//-------------------------👾 FUNCTIONS-------------------------

//All UMAS
export const getAllUmas = (building: string) =>
  axios.get(`${NODERED_API}/get/umas/${building}`);

/** Enciende la UMA indicada (B1, B2, B3, B4) con el valor dado */
export const turnOnUma = (
  umaId: "B1" | "B2" | "B3" | "B4",
  value: number,
) => axios.post<void>(`${NODERED_API}/post/umas/${umaId}/turn-on`, { value });
