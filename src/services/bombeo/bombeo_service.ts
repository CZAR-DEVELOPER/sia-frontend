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
export const getBombeo = (cuarto: string, edificio: string) =>
  axios.get(`${NODERED_API}/get/bombeo?Cuarto=${encodeURIComponent(cuarto)}&Edificio=${encodeURIComponent(edificio)}`);

//Get bombeos 1,2
