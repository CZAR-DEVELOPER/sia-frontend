import React from "react";
// Router
import {  useSearchParams } from "react-router-dom";
// Components
//import NavbarComponent from "../../components/navbar/navbar-component";
//import ContainerComponent from "../../components/container/container_component";
// Maps
import mapB1 from "../../assets/maps/B1.png";
import mapB2 from "../../assets/maps/B2.png";
import mapB3 from "../../assets/maps/B3.png";
import mapB4 from "../../assets/maps/B4.png";
import mapHelperB1 from "../../assets/maps_helpers/B1.png";
import mapHelperB2 from "../../assets/maps_helpers/B2.png";
import mapHelperB3 from "../../assets/maps_helpers/B3.png";
import mapHelperB4 from "../../assets/maps_helpers/B4.png";
import ContainerComponent from "../../components/container/container_component";
import ButtonComponent from "../../components/button/button_component";
import NavbarComponent from "../../components/navbar/navbar-component";
import FloorMapComponent from "../../components/floor-maps/floor-map-component";
import FloorMapEditorComponent from "../../components/floor_map_editor/floor_map_editor_component";
import FloorSidebarComponent from "../../components/floors_sidebar/floors_sidebar_component";
//import ButtonComponent from "../../components/button/button_component";

interface Point {
  id: number;
  x: number;
  y: number;
  label: string;
  url: string;
  type?: "text" | "uma";
  color: string;
}

const FloorPage: React.FC = () => {
  //Hooks
  const [isEditing, setIsEditing] = React.useState(false);

  

  

  //ROUTER
  const [searchParams] = useSearchParams();
  const level = searchParams.get("level"); // Obtén el parámetro "level"
  const building = searchParams.get("building"); // Obtén el parámetro "building"

  let currentMap;
  let currentMapHelper;
  let currentMapPoints:Point[];
  

  switch (level) {
    case "1":
      currentMap = mapB1;
      currentMapHelper = mapHelperB1;
      currentMapPoints = 

        [
          {
            "id": 1,
            "x": 83.7524757035604,
            "y": 39,
            "label": "1",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 2,
            "x": 83.98059158346553,
            "y": 56.2,
            "label": "2",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 3,
            "x": 82.06960903237847,
            "y": 71.2,
            "label": "3",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 4,
            "x": 77.65046188298965,
            "y": 86.4,
            "label": "4",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 5,
            "x": 69.88709526919847,
            "y": 77.4,
            "label": "5",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 6,
            "x": 61.16823737986377,
            "y": 77.2,
            "label": "6",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 7,
            "x": 67.02062144256789,
            "y": 91.8,
            "label": "7",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 8,
            "x": 52.68825230941495,
            "y": 77.4,
            "label": "8",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 9,
            "x": 44.44714005785201,
            "y": 77.4,
            "label": "9",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 10,
            "x": 49.10516002612672,
            "y": 91.8,
            "label": "10",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 11,
            "x": 36.20602780628908,
            "y": 77.2,
            "label": "11",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 12,
            "x": 31.070262200242603,
            "y": 91.60000000000001,
            "label": "12",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 13,
            "x": 28.32322478305496,
            "y": 71.8,
            "label": "13",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 14,
            "x": 29.398152468041427,
            "y": 53.2,
            "label": "14",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 15,
            "x": 39.90855649902025,
            "y": 52.6,
            "label": "15",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 16,
            "x": 39.07250163291966,
            "y": 36,
            "label": "16",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 17,
            "x": 29.517588877484368,
            "y": 35.8,
            "label": "17",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 18,
            "x": 10.407763366613791,
            "y": 10.6,
            "label": "18",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 19,
            "x": 18.88774843706261,
            "y": 13.8,
            "label": "19",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 20,
            "x": 26.531678641410846,
            "y": 9.8,
            "label": "20",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 21,
            "x": 33.45899038910143,
            "y": 18.4,
            "label": "21",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 22,
            "x": 41.58066623122142,
            "y": 16.400000000000002,
            "label": "22",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 23,
            "x": 48.50797797891201,
            "y": 22,
            "label": "23",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 24,
            "x": 43.01390314453672,
            "y": 4.3999999999999995,
            "label": "24",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 25,
            "x": 54.24092563217319,
            "y": 15.8,
            "label": "25",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 26,
            "x": 63.55696556872259,
            "y": 14.799999999999999,
            "label": "26",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 27,
            "x": 63.55696556872259,
            "y": 4.6,
            "label": "27",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 28,
            "x": 75.5006065130167,
            "y": 13.4,
            "label": "28",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 29,
            "x": 78.36708033964729,
            "y": 4.3999999999999995,
            "label": "29",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 30,
            "x": 84.57777363068023,
            "y": 19,
            "label": "30",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 31,
            "x": 63.43752915927965,
            "y": 22.8,
            "label": "31",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 32,
            "x": 72.27582345805729,
            "y": 32,
            "label": "32",
            "url": "",
            "type": "text",
            "color": "black"
          },
          {
            "id": 33,
            "x": 94.25212279555846,
            "y": 39,
            "label": "33",
            "url": "",
            "type": "uma",
            "color": "#0096ff"
          }
        ]
       
      ;
      break;
    case "2":
      currentMap = mapB2;
      currentMapHelper = mapHelperB2;
      currentMapPoints = [
        {
          "id": 1,
          "x": 81.54842190450499,
          "y": 19,
          "label": "33",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 2,
          "x": 80.99909262574491,
          "y": 33.2,
          "label": "34",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 3,
          "x": 72.83762905559506,
          "y": 47.4,
          "label": "35",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 4,
          "x": 82.09775118326507,
          "y": 47.599999999999994,
          "label": "36",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 5,
          "x": 72.83762905559506,
          "y": 71,
          "label": "37",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 6,
          "x": 74.87799494813252,
          "y": 90.4,
          "label": "38",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 7,
          "x": 58.39811658532996,
          "y": 89.60000000000001,
          "label": "39",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 8,
          "x": 46.940677342619615,
          "y": 89.8,
          "label": "40",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 9,
          "x": 34.07067709738333,
          "y": 90,
          "label": "41",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 10,
          "x": 20.258969517129756,
          "y": 90,
          "label": "42",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 11,
          "x": 8.173725384407877,
          "y": 90.2,
          "label": "43",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 12,
          "x": 7.38896927189347,
          "y": 67.80000000000001,
          "label": "44",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 13,
          "x": 20.88677440714128,
          "y": 67.80000000000001,
          "label": "45",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 14,
          "x": 8.016774161904996,
          "y": 39.4,
          "label": "46",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 15,
          "x": 20.415920739632636,
          "y": 38.2,
          "label": "47",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 16,
          "x": 32.501164872354515,
          "y": 27,
          "label": "48",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 17,
          "x": 43.17384800255046,
          "y": 26.200000000000003,
          "label": "49",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 18,
          "x": 52.59092135272335,
          "y": 26.400000000000002,
          "label": "50",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 19,
          "x": 61.06628736787895,
          "y": 26,
          "label": "51",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 20,
          "x": 70.48336071805184,
          "y": 25.6,
          "label": "52",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 21,
          "x": 34.69848198739485,
          "y": 7.3999999999999995,
          "label": "53",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 22,
          "x": 44.743360227579274,
          "y": 7.3999999999999995,
          "label": "54",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 23,
          "x": 60.909336145376066,
          "y": 7.199999999999999,
          "label": "55",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 24,
          "x": 70.95421438556049,
          "y": 7.000000000000001,
          "label": "56",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 25,
          "x": 92.77043431346101,
          "y": 50,
          "label": "57",
          "url": "",
          "type": "uma",
          "color": "#0096ff"
        }
      ];
      break;
    case "3":
      currentMap = mapB3;
      currentMapHelper = mapHelperB3;
      currentMapPoints = [
        {
          "id": 1,
          "x": 67.90321266599679,
          "y": 26,
          "label": "57",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 2,
          "x": 80.6778372213019,
          "y": 26.200000000000003,
          "label": "58",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 3,
          "x": 67.29489721098226,
          "y": 36.199999999999996,
          "label": "59",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 4,
          "x": 80.50403280558346,
          "y": 36,
          "label": "60",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 5,
          "x": 67.64250604241914,
          "y": 46.400000000000006,
          "label": "61",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 6,
          "x": 80.15642397414659,
          "y": 46.2,
          "label": "62",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 7,
          "x": 71.98761643538006,
          "y": 65.4,
          "label": "63",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 8,
          "x": 71.98761643538006,
          "y": 75.4,
          "label": "64",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 9,
          "x": 38.09575537028488,
          "y": 74.8,
          "label": "65",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 10,
          "x": 22.45335795562556,
          "y": 75.4,
          "label": "66",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 11,
          "x": 21.93194470847025,
          "y": 95,
          "label": "67",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 12,
          "x": 4.203894305189691,
          "y": 94.8,
          "label": "68",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 13,
          "x": 3.8562854737528176,
          "y": 74.8,
          "label": "69",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 14,
          "x": 4.203894305189691,
          "y": 60.199999999999996,
          "label": "70",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 15,
          "x": 4.203894305189691,
          "y": 45,
          "label": "71",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 16,
          "x": 22.800966787062436,
          "y": 59.599999999999994,
          "label": "72",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 17,
          "x": 22.45335795562556,
          "y": 34.4,
          "label": "73",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 18,
          "x": 4.030089889471254,
          "y": 33,
          "label": "74",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 19,
          "x": 29.57933900008147,
          "y": 15.6,
          "label": "75",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 20,
          "x": 36.87912446025582,
          "y": 25.4,
          "label": "76",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 21,
          "x": 29.2317301686446,
          "y": 25,
          "label": "77",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 22,
          "x": 29.05792575292616,
          "y": 4.2,
          "label": "78",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 23,
          "x": 41.22423485321674,
          "y": 4.3999999999999995,
          "label": "79",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 24,
          "x": 43.13608342611954,
          "y": 25,
          "label": "80",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 25,
          "x": 49.219237976264836,
          "y": 25.2,
          "label": "81",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 26,
          "x": 49.219237976264836,
          "y": 4.2,
          "label": "82",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 27,
          "x": 55.12858811069169,
          "y": 25.4,
          "label": "83",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 28,
          "x": 59.995111750807915,
          "y": 4.3999999999999995,
          "label": "84",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 29,
          "x": 61.55935149227385,
          "y": 25.4,
          "label": "85",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 30,
          "x": 75.11609591831191,
          "y": 4.2,
          "label": "86",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 31,
          "x": 31.664991988702713,
          "y": 94.6,
          "label": "87",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 32,
          "x": 42.26706134752736,
          "y": 94.19999999999999,
          "label": "88",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 33,
          "x": 53.73815278494419,
          "y": 94.39999999999999,
          "label": "89",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 34,
          "x": 53.21673953778888,
          "y": 74.8,
          "label": "90",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 35,
          "x": 67.29489721098226,
          "y": 94.8,
          "label": "91",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 36,
          "x": 80.50403280558346,
          "y": 94.19999999999999,
          "label": "92",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 37,
          "x": 91.62751541156342,
          "y": 45,
          "label": "93",
          "url": "",
          "type": "uma",
          "color": "#0096ff"
        }
      ];
      break;
    case "4":
      currentMap = mapB4;
      currentMapHelper = mapHelperB4;
      currentMapPoints = [
        {
          "id": 1,
          "x": 63.220303325874504,
          "y": 25.4,
          "label": "93",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 2,
          "x": 62.791898559871484,
          "y": 5.800000000000001,
          "label": "94",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 3,
          "x": 82.98812324287108,
          "y": 5.6000000000000005,
          "label": "95",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 4,
          "x": 73.44081702908944,
          "y": 5.4,
          "label": "96",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 5,
          "x": 62.914299921586625,
          "y": 36,
          "label": "97",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 6,
          "x": 62.914299921586625,
          "y": 49.6,
          "label": "98",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 7,
          "x": 73.19601430565915,
          "y": 63.4,
          "label": "99",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 8,
          "x": 71.23759251821676,
          "y": 94.6,
          "label": "100",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 9,
          "x": 58.14064681469582,
          "y": 94.6,
          "label": "101",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 10,
          "x": 51.28617055864747,
          "y": 62.6,
          "label": "102",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 11,
          "x": 45.77810928146576,
          "y": 94.8,
          "label": "103",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 12,
          "x": 33.9051771950963,
          "y": 62,
          "label": "104",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 13,
          "x": 32.80356493965995,
          "y": 95,
          "label": "105",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 14,
          "x": 21.909843747011685,
          "y": 63,
          "label": "106",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 15,
          "x": 22.399449193872282,
          "y": 93.60000000000001,
          "label": "107",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 16,
          "x": 10.893721192648268,
          "y": 94.19999999999999,
          "label": "108",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 17,
          "x": 2.69282995773328,
          "y": 93,
          "label": "109",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 18,
          "x": 3.182435404593876,
          "y": 76.6,
          "label": "110",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 19,
          "x": 3.304836766309025,
          "y": 53.800000000000004,
          "label": "111",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 20,
          "x": 3.060034042878727,
          "y": 30.4,
          "label": "112",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 21,
          "x": 21.787442385296536,
          "y": 48.8,
          "label": "113",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 22,
          "x": 21.42023830015109,
          "y": 32.4,
          "label": "114",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 23,
          "x": 21.909843747011685,
          "y": 4.8,
          "label": "115",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 24,
          "x": 2.9376326811635782,
          "y": 4.8,
          "label": "116",
          "url": "",
          "type": "text",
          "color": "black"
        },
        {
          "id": 25,
          "x": 92.16822537150726,
          "y": 25.4,
          "label": "117",
          "url": "",
          "type": "uma",
          "color": "#0096ff"
        }
      ];
      break;
    default:
      currentMap = mapB1;
      currentMapHelper = mapHelperB1;
      currentMapPoints = [
      ];
      break;
  }

  return (
    <>
      {/* NAVBAR */}
      <NavbarComponent
        title={"Edificio " + building + " - " + "Piso " + level}
      ></NavbarComponent>

      {/* SIDEBAR */}
      <FloorSidebarComponent defaultVisible></FloorSidebarComponent>
      

      {/* MainContainer */}
      <ContainerComponent className="flex justify-center grow  ">
        <div className="height-100 h-150 xl:h-150 2xl:h-200 self-center pb-10">
          {isEditing ? (
            <FloorMapEditorComponent
              imageUrl={currentMapHelper}
              currentPointsList={currentMapPoints}
              onPointClick={(point) => {
                console.log(point);
              }}
            ></FloorMapEditorComponent>
          ) : (
            <FloorMapComponent
              pointsList={currentMapPoints  || []}
              imageUrl={currentMap}
              currentBuilding={building!}
              currentLevel={level!}
            ></FloorMapComponent>
          )}
        </div>
        <div>
          <div className="fixed bottom-8 right-8">
            <ButtonComponent
            style="outline"
              size="sm"
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              {isEditing ? "Listo" : "Editar"}
            </ButtonComponent>
          </div>
        </div>
      </ContainerComponent>
    </>
  );
};

export default FloorPage;
