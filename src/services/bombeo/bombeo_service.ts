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

//-------------------------👾 FUNCTIONS-------------------------

//Get bombeos 3
export const getBombeo3 = () =>
  axios.get(`${NODERED_API}/get/bombeo3`, {
    params: {
      Cuarto: "CD",
      Edificio: "C",
    },
  });

//Get bombeos 1,2

export const getBombeo1 = () =>
  axios.get(`${NODERED_API}/get/bombeo1`, {
    params: {
      Cuarto: "Sec",
      Edificio: "1",
    },
  });
