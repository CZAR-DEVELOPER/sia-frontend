//-------------------------📦 IMPORTS-------------------------
import axios from "axios";

//-------------------------🔗 ENVIRONMENT VARIABLES-------------------------
const NODERED_API = import.meta.env.VITE_NODERED_API;

//-------------------------🕹️ TYPES-------------------------

export interface BombeoData {
  Comando: string;
  Frecuencia: string;
  Estado: string;
}

export interface BombeoResponseItem {
  Bombeo: number;
  data: BombeoData;
}

export interface BombPriPayload {
  num: number;      // Pump number (1?n)
  Comando: number;  // 1 = ON, 0 = OFF (or whatever the API expects)
}

export interface BombSecPayload {
  num: number;        // Pump number (1-n)
  Comando: number;    // 1 = ON, 0 = OFF
  Frecuencia: number; // e.g. 3000
}

export interface BombTerPayload {
  Cuarto: string;      // e.g. "CD"
  Edificio: string;    // e.g. "C"
  Bombeo: string;      // e.g. "1"  (mantén string si llega así)
  Comando: number;     // e.g. 150
  Frecuencia: number;  // e.g. 5432
}

//-------------------------👾 FUNCTIONS-------------------------

//Get bombeos 3
export const getBombeo = (cuarto: string, edificio: string) =>
  axios.get(`${NODERED_API}/get/bombeo?Cuarto=${encodeURIComponent(cuarto)}&Edificio=${encodeURIComponent(edificio)}`);

//Update bombeo 1
export const postBombPri = (payload: BombPriPayload) =>
  axios.post(`${NODERED_API}/post/Bombpri`, payload);

// Update bombeo 2
export const postBombSec = (payload: BombSecPayload) =>
  axios.post(`${NODERED_API}/post/Bombsec`, payload);

// Update bombeo 3
export const postBombTer = (payload: BombTerPayload) =>
  axios.post(`${NODERED_API}/post/Bombter`, payload); 