import React from "react";
// Router
import { useSearchParams } from "react-router-dom";
// Components
//import NavbarComponent from "../../components/navbar/navbar-component";
//import ContainerComponent from "../../components/container/container_component";
// Maps
import mapB1 from "../../assets/maps/B1.png";
import mapB2 from "../../assets/maps/B2.png";
import mapB3 from "../../assets/maps/B3.png";
import mapB4 from "../../assets/maps/B4.png";
import mapE1 from "../../assets/maps/E1.png";
import mapE2 from "../../assets/maps/E2.png";
import mapE3 from "../../assets/maps/E3.png";
import mapE4 from "../../assets/maps/E4.png";
import mapHelperE1 from "../../assets/maps_helpers/E1.png";
import mapHelperE2 from "../../assets/maps_helpers/E2.png";
import mapHelperE3 from "../../assets/maps_helpers/E3.png";
import mapHelperE4 from "../../assets/maps_helpers/E4.png";
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
import { useGetAllUmas } from "../../services/uma/uma_hooks";
import LoadingComponent from "../../components/loading/loading_component";
import { useGetAllVavDevices } from "../../services/vav/vav_hooks";
import { map } from "motion/react-client";
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
  //ROUTER
  const [searchParams] = useSearchParams();
  let level = searchParams.get("level"); // Obtén el parámetro "level"
  const building = searchParams.get("building"); // Obtén el parámetro "building"

  let currentMap;
  let currentMapHelper;
  let currentMapPoints: Point[];

  function determineMapPointCases(
    building: string | null,
    level: string | null
  ): Point[] {
    if (building === "B") {
      // Add cases for building B as needed; return empty array for now
      let currentPoints = currentMapPointsCases[parseInt(level ?? "0") - 1] || [] ;
      return currentPoints;
    }
    if (building === "E") {
      switch (level) {
        case "1":
          return [
            {
              id: 1,
              x: 78.91891891891892,
              y: 31.125733085395506,
              label: "2",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 2,
              x: 91.08108108108108,
              y: 30.095837505364038,
              label: "3",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 3,
              x: 78.01801801801803,
              y: 40.62365899013017,
              label: "4",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 4,
              x: 91.35135135135135,
              y: 41.31025604348448,
              label: "5",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 5,
              x: 77.38738738738739,
              y: 50.922614790444854,
              label: "6",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 6,
              x: 91.44144144144144,
              y: 51.60921184379917,
              label: "7",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 7,
              x: 90.81081081081082,
              y: 62.36589901301674,
              label: "8",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 8,
              x: 80.63063063063063,
              y: 79.98855671577742,
              label: "9",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 9,
              x: 77.38738738738739,
              y: 61.90816764411387,
              label: "10",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 10,
              x: 69.0990990990991,
              y: 80.21742240022887,
              label: "11",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 11,
              x: 63.42342342342342,
              y: 63.05249606637104,
              label: "12",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 12,
              x: 57.117117117117125,
              y: 79.75969103132599,
              label: "13",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 13,
              x: 48.64864864864865,
              y: 62.137033328565295,
              label: "14",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 14,
              x: 40.630630630630634,
              y: 80.10298955800315,
              label: "15",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 15,
              x: 35.945945945945944,
              y: 67.17207838649692,
              label: "16",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 16,
              x: 47.47747747747748,
              y: 50.350450579316266,
              label: "17",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 17,
              x: 47.83783783783784,
              y: 38.335002145615796,
              label: "18",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 18,
              x: 19.36936936936937,
              y: 45.42983836361036,
              label: "19",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 19,
              x: 19.45945945945946,
              y: 35.13088256329567,
              label: "20",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 20,
              x: 19.45945945945946,
              y: 21.170075811757975,
              label: "21",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 21,
              x: 19.63963963963964,
              y: 7.895866113574596,
              label: "22",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 22,
              x: 30.270270270270274,
              y: 7.667000429123158,
              label: "23",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 23,
              x: 26.576576576576578,
              y: 28.379344871978258,
              label: "24",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 24,
              x: 34.41441441441441,
              y: 28.036046345301102,
              label: "25",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 25,
              x: 46.306306306306304,
              y: 27.349449291946787,
              label: "26",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 26,
              x: 44.5045045045045,
              y: 7.4381347446717205,
              label: "27",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 27,
              x: 55.13513513513514,
              y: 23.001001287369473,
              label: "28",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 28,
              x: 56.846846846846844,
              y: 7.323701902446002,
              label: "29",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 29,
              x: 64.05405405405405,
              y: 22.886568445143755,
              label: "30",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 30,
              x: 65.94594594594595,
              y: 7.4381347446717205,
              label: "31",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 31,
              x: 72.25225225225225,
              y: 23.344299814046632,
              label: "32",
              url: "",
              type: "text",
              color: "black",
            },
            {
              id: 32,
              x: 21.891891891891895,
              y: 76.32670576455442,
              label: "33",
              url: "",
              type: "uma",
              color: "#001eff",
            },
          ];
        case "2":
          return [
  {
    "id": 1,
    "x": 82.34234234234235,
    "y": 28.71296382839518,
    "label": "33",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 2,
    "x": 95.13513513513514,
    "y": 28.71296382839518,
    "label": "34",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 3,
    "x": 80.9009009009009,
    "y": 37.885160606910304,
    "label": "35",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 4,
    "x": 95.4054054054054,
    "y": 38.58304514440602,
    "label": "36",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 5,
    "x": 80.72072072072072,
    "y": 47.15705517649624,
    "label": "37",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 6,
    "x": 95.4054054054054,
    "y": 47.85493971399196,
    "label": "38",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 7,
    "x": 83.06306306306305,
    "y": 70.58603607813815,
    "label": "39",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 8,
    "x": 95.76576576576576,
    "y": 65.5014487335265,
    "label": "40",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 9,
    "x": 75.85585585585586,
    "y": 61.3141415085522,
    "label": "41",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 10,
    "x": 68.73873873873873,
    "y": 70.98482724242142,
    "label": "42",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 11,
    "x": 54.32432432432432,
    "y": 59.718976851419136,
    "label": "43",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 12,
    "x": 53.96396396396397,
    "y": 70.48633828706733,
    "label": "44",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 13,
    "x": 41.26126126126126,
    "y": 70.08754712278406,
    "label": "45",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 14,
    "x": 29.18918918918919,
    "y": 64.70386640495997,
    "label": "46",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 15,
    "x": 35.67567567567568,
    "y": 51.244664610399724,
    "label": "47",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 16,
    "x": 44.5045045045045,
    "y": 60.317163597844036,
    "label": "48",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 17,
    "x": 44.5045045045045,
    "y": 38.88213851761847,
    "label": "49",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 18,
    "x": 37.027027027027025,
    "y": 38.88213851761847,
    "label": "50",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 19,
    "x": 28.01801801801802,
    "y": 32.99996884444029,
    "label": "51",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 20,
    "x": 36.306306306306304,
    "y": 22.432002990933732,
    "label": "52",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 21,
    "x": 28.468468468468465,
    "y": 18.0453001838178,
    "label": "53",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 22,
    "x": 43.15315315315315,
    "y": 22.033211826650465,
    "label": "54",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 23,
    "x": 28.01801801801802,
    "y": 3.290027105336947,
    "label": "55",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 24,
    "x": 39.63963963963964,
    "y": 3.1903293142661306,
    "label": "56",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 25,
    "x": 51.35135135135135,
    "y": 21.235629498083934,
    "label": "57",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 26,
    "x": 54.054054054054056,
    "y": 2.4924447767704145,
    "label": "58",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 27,
    "x": 62.52252252252253,
    "y": 21.634420662367198,
    "label": "59",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 28,
    "x": 65.85585585585586,
    "y": 2.891235941053681,
    "label": "60",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 29,
    "x": 73.06306306306305,
    "y": 21.0362339159423,
    "label": "61",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 30,
    "x": 12.432432432432433,
    "y": 71.38361840670467,
    "label": "30",
    "url": "",
    "type": "uma",
    "color": "#001eff"
  }
]
        case "3":
          return [
  {
    "id": 1,
    "x": 80.27027027027027,
    "y": 31.50512715651081,
    "label": "62",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 2,
    "x": 94.95495495495496,
    "y": 31.11737174535375,
    "label": "63",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 3,
    "x": 80.36036036036036,
    "y": 41.87758440496206,
    "label": "64",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 4,
    "x": 95.85585585585585,
    "y": 42.16840096332985,
    "label": "65",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 5,
    "x": 79.81981981981981,
    "y": 55.44902379545902,
    "label": "66",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 6,
    "x": 96.12612612612612,
    "y": 55.545962648248285,
    "label": "67",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 7,
    "x": 96.21621621621622,
    "y": 69.79597400827011,
    "label": "68",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 8,
    "x": 95.85585585585585,
    "y": 81.71945290134957,
    "label": "69",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 9,
    "x": 83.06306306306305,
    "y": 82.2041471652959,
    "label": "70",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 10,
    "x": 79.27927927927928,
    "y": 63.78576513533572,
    "label": "71",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 11,
    "x": 68.37837837837839,
    "y": 82.10720831250663,
    "label": "72",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 12,
    "x": 53.333333333333336,
    "y": 82.2041471652959,
    "label": "73",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 13,
    "x": 36.57657657657658,
    "y": 81.6225140485603,
    "label": "74",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 14,
    "x": 26.126126126126124,
    "y": 66.98474727738144,
    "label": "75",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 15,
    "x": 51.53153153153153,
    "y": 64.56127595764984,
    "label": "76",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 16,
    "x": 41.44144144144144,
    "y": 48.566365247421274,
    "label": "77",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 17,
    "x": 33.693693693693696,
    "y": 48.27554868905348,
    "label": "78",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 18,
    "x": 41.351351351351354,
    "y": 35.38268126808137,
    "label": "79",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 19,
    "x": 34.054054054054056,
    "y": 36.061253237606216,
    "label": "80",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 20,
    "x": 25.495495495495497,
    "y": 35.86737553202769,
    "label": "81",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 21,
    "x": 41.98198198198198,
    "y": 27.530634192150984,
    "label": "82",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 22,
    "x": 35.13513513513514,
    "y": 22.58675269989852,
    "label": "83",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 23,
    "x": 25.585585585585584,
    "y": 22.489813847109254,
    "label": "84",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 24,
    "x": 26.216216216216214,
    "y": 5.137759197830993,
    "label": "85",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 25,
    "x": 39.63963963963964,
    "y": 4.265309522727617,
    "label": "86",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 26,
    "x": 53.51351351351351,
    "y": 22.489813847109254,
    "label": "87",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 27,
    "x": 53.24324324324324,
    "y": 4.750003786673937,
    "label": "88",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 28,
    "x": 65.13513513513513,
    "y": 4.168370669938353,
    "label": "89",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 29,
    "x": 63.693693693693696,
    "y": 22.005119583162934,
    "label": "90",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 30,
    "x": 73.51351351351352,
    "y": 22.005119583162934,
    "label": "91",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 31,
    "x": 25.405405405405407,
    "y": 81.23475863740325,
    "label": "92",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 32,
    "x": 8.64864864864865,
    "y": 44.10717801911513,
    "label": "93",
    "url": "",
    "type": "uma",
    "color": "#001eff"
  }
];
        case "4":
          return [
  {
    "id": 1,
    "x": 75.8108108108108,
    "y": 80.26873083102089,
    "label": "93",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 2,
    "x": 66.98198198198199,
    "y": 80.15189133927268,
    "label": "94",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 3,
    "x": 54.369369369369366,
    "y": 62.742807068789254,
    "label": "95",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 4,
    "x": 75.09009009009009,
    "y": 62.39228859354462,
    "label": "96",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 5,
    "x": 54.729729729729726,
    "y": 80.26873083102089,
    "label": "97",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 6,
    "x": 48.51351351351351,
    "y": 80.03505184752446,
    "label": "98",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 7,
    "x": 36.53153153153153,
    "y": 80.26873083102089,
    "label": "99",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 8,
    "x": 37.7027027027027,
    "y": 68.00058419745875,
    "label": "100",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 9,
    "x": 50.04504504504504,
    "y": 53.04512925368775,
    "label": "101",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 10,
    "x": 49.32432432432432,
    "y": 39.959106177888124,
    "label": "102",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 11,
    "x": 36.891891891891895,
    "y": 34.58448955747043,
    "label": "103",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 12,
    "x": 49.5945945945946,
    "y": 22.5500219074047,
    "label": "104",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 13,
    "x": 36.98198198198198,
    "y": 16.240689353001315,
    "label": "105",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 14,
    "x": 36.98198198198198,
    "y": 3.8557032276909595,
    "label": "106",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 15,
    "x": 46.35135135135135,
    "y": 3.388345260698116,
    "label": "107",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 16,
    "x": 58.6036036036036,
    "y": 21.498466481670807,
    "label": "108",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 17,
    "x": 58.693693693693696,
    "y": 3.6220242441945376,
    "label": "109",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 18,
    "x": 67.97297297297298,
    "y": 22.31634292390828,
    "label": "110",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 19,
    "x": 74.81981981981983,
    "y": 21.615305973419016,
    "label": "111",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 20,
    "x": 73.37837837837839,
    "y": 4.206221702935592,
    "label": "112",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 21,
    "x": 42.47747747747748,
    "y": 80.85292828976193,
    "label": "113",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 22,
    "x": 17.972972972972972,
    "y": 42.996932963341614,
    "label": "114",
    "url": "",
    "type": "uma",
    "color": "#001eff"
  }
];
        default:
          return [];
      }
    }
    // Fallback return to satisfy the declared return type
    return [];
  }

  const currentMapPointsCases: Point[][] = [
    // Level 1
    [
      {
        id: 1,
        x: 83.7524757035604,
        y: 39,
        label: "1",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 2,
        x: 83.98059158346553,
        y: 56.2,
        label: "2",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 3,
        x: 82.06960903237847,
        y: 71.2,
        label: "3",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 4,
        x: 77.65046188298965,
        y: 86.4,
        label: "4",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 5,
        x: 69.88709526919847,
        y: 77.4,
        label: "5",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 6,
        x: 61.16823737986377,
        y: 77.2,
        label: "6",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 7,
        x: 67.02062144256789,
        y: 91.8,
        label: "7",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 8,
        x: 52.68825230941495,
        y: 77.4,
        label: "8",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 9,
        x: 44.44714005785201,
        y: 77.4,
        label: "9",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 10,
        x: 49.10516002612672,
        y: 91.8,
        label: "10",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 11,
        x: 36.20602780628908,
        y: 77.2,
        label: "11",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 12,
        x: 31.070262200242603,
        y: 91.60000000000001,
        label: "12",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 13,
        x: 28.32322478305496,
        y: 71.8,
        label: "13",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 14,
        x: 29.398152468041427,
        y: 53.2,
        label: "14",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 15,
        x: 39.90855649902025,
        y: 52.6,
        label: "15",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 16,
        x: 39.07250163291966,
        y: 36,
        label: "16",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 17,
        x: 29.517588877484368,
        y: 35.8,
        label: "17",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 18,
        x: 10.407763366613791,
        y: 10.6,
        label: "18",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 19,
        x: 18.88774843706261,
        y: 13.8,
        label: "19",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 20,
        x: 26.531678641410846,
        y: 9.8,
        label: "20",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 21,
        x: 33.45899038910143,
        y: 18.4,
        label: "21",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 22,
        x: 41.58066623122142,
        y: 16.400000000000002,
        label: "22",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 23,
        x: 48.50797797891201,
        y: 22,
        label: "23",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 24,
        x: 43.01390314453672,
        y: 4.3999999999999995,
        label: "24",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 25,
        x: 54.24092563217319,
        y: 15.8,
        label: "25",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 26,
        x: 63.55696556872259,
        y: 14.799999999999999,
        label: "26",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 27,
        x: 63.55696556872259,
        y: 4.6,
        label: "27",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 28,
        x: 75.5006065130167,
        y: 13.4,
        label: "28",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 29,
        x: 78.36708033964729,
        y: 4.3999999999999995,
        label: "29",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 30,
        x: 84.57777363068023,
        y: 19,
        label: "30",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 31,
        x: 63.43752915927965,
        y: 22.8,
        label: "31",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 32,
        x: 72.27582345805729,
        y: 32,
        label: "32",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 33,
        x: 94.25212279555846,
        y: 39,
        label: "33",
        url: "",
        type: "uma",
        color: "#0096ff",
      },
    ],
    // Level 2
    [
      {
        id: 1,
        x: 81.54842190450499,
        y: 19,
        label: "33",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 2,
        x: 80.99909262574491,
        y: 33.2,
        label: "34",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 3,
        x: 72.83762905559506,
        y: 47.4,
        label: "35",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 4,
        x: 82.09775118326507,
        y: 47.599999999999994,
        label: "36",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 5,
        x: 72.83762905559506,
        y: 71,
        label: "37",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 6,
        x: 74.87799494813252,
        y: 90.4,
        label: "38",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 7,
        x: 58.39811658532996,
        y: 89.60000000000001,
        label: "39",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 8,
        x: 46.940677342619615,
        y: 89.8,
        label: "40",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 9,
        x: 34.07067709738333,
        y: 90,
        label: "41",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 10,
        x: 20.258969517129756,
        y: 90,
        label: "42",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 11,
        x: 8.173725384407877,
        y: 90.2,
        label: "43",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 12,
        x: 7.38896927189347,
        y: 67.80000000000001,
        label: "44",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 13,
        x: 20.88677440714128,
        y: 67.80000000000001,
        label: "45",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 14,
        x: 8.016774161904996,
        y: 39.4,
        label: "46",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 15,
        x: 20.415920739632636,
        y: 38.2,
        label: "47",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 16,
        x: 32.501164872354515,
        y: 27,
        label: "48",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 17,
        x: 43.17384800255046,
        y: 26.200000000000003,
        label: "49",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 18,
        x: 52.59092135272335,
        y: 26.400000000000002,
        label: "50",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 19,
        x: 61.06628736787895,
        y: 26,
        label: "51",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 20,
        x: 70.48336071805184,
        y: 25.6,
        label: "52",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 21,
        x: 34.69848198739485,
        y: 7.3999999999999995,
        label: "53",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 22,
        x: 44.743360227579274,
        y: 7.3999999999999995,
        label: "54",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 23,
        x: 60.909336145376066,
        y: 7.199999999999999,
        label: "55",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 24,
        x: 70.95421438556049,
        y: 7.000000000000001,
        label: "56",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 25,
        x: 92.77043431346101,
        y: 50,
        label: "57",
        url: "",
        type: "uma",
        color: "#0096ff",
      },
    ],
    // Level 3
    [
      {
        id: 1,
        x: 67.90321266599679,
        y: 26,
        label: "57",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 2,
        x: 80.6778372213019,
        y: 26.200000000000003,
        label: "58",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 3,
        x: 67.29489721098226,
        y: 36.199999999999996,
        label: "59",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 4,
        x: 80.50403280558346,
        y: 36,
        label: "60",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 5,
        x: 67.64250604241914,
        y: 46.400000000000006,
        label: "61",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 6,
        x: 80.15642397414659,
        y: 46.2,
        label: "62",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 7,
        x: 71.98761643538006,
        y: 65.4,
        label: "63",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 8,
        x: 71.98761643538006,
        y: 75.4,
        label: "64",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 9,
        x: 38.09575537028488,
        y: 74.8,
        label: "65",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 10,
        x: 22.45335795562556,
        y: 75.4,
        label: "66",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 11,
        x: 21.93194470847025,
        y: 95,
        label: "67",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 12,
        x: 4.203894305189691,
        y: 94.8,
        label: "68",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 13,
        x: 3.8562854737528176,
        y: 74.8,
        label: "69",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 14,
        x: 4.203894305189691,
        y: 60.199999999999996,
        label: "70",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 15,
        x: 4.203894305189691,
        y: 45,
        label: "71",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 16,
        x: 22.800966787062436,
        y: 59.599999999999994,
        label: "72",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 17,
        x: 22.45335795562556,
        y: 34.4,
        label: "73",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 18,
        x: 4.030089889471254,
        y: 33,
        label: "74",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 19,
        x: 29.57933900008147,
        y: 15.6,
        label: "75",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 20,
        x: 36.87912446025582,
        y: 25.4,
        label: "76",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 21,
        x: 29.2317301686446,
        y: 25,
        label: "77",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 22,
        x: 29.05792575292616,
        y: 4.2,
        label: "78",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 23,
        x: 41.22423485321674,
        y: 4.3999999999999995,
        label: "79",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 24,
        x: 43.13608342611954,
        y: 25,
        label: "80",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 25,
        x: 49.219237976264836,
        y: 25.2,
        label: "81",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 26,
        x: 49.219237976264836,
        y: 4.2,
        label: "82",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 27,
        x: 55.12858811069169,
        y: 25.4,
        label: "83",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 28,
        x: 59.995111750807915,
        y: 4.3999999999999995,
        label: "84",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 29,
        x: 61.55935149227385,
        y: 25.4,
        label: "85",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 30,
        x: 75.11609591831191,
        y: 4.2,
        label: "86",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 31,
        x: 31.664991988702713,
        y: 94.6,
        label: "87",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 32,
        x: 42.26706134752736,
        y: 94.19999999999999,
        label: "88",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 33,
        x: 53.73815278494419,
        y: 94.39999999999999,
        label: "89",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 34,
        x: 53.21673953778888,
        y: 74.8,
        label: "90",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 35,
        x: 67.29489721098226,
        y: 94.8,
        label: "91",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 36,
        x: 80.50403280558346,
        y: 94.19999999999999,
        label: "92",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 37,
        x: 91.62751541156342,
        y: 45,
        label: "93",
        url: "",
        type: "uma",
        color: "#0096ff",
      },
    ],
    // Level 4
    [
      {
        id: 1,
        x: 63.220303325874504,
        y: 25.4,
        label: "93",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 2,
        x: 62.791898559871484,
        y: 5.800000000000001,
        label: "94",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 3,
        x: 82.98812324287108,
        y: 5.6000000000000005,
        label: "95",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 4,
        x: 73.44081702908944,
        y: 5.4,
        label: "96",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 5,
        x: 62.914299921586625,
        y: 36,
        label: "97",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 6,
        x: 62.914299921586625,
        y: 49.6,
        label: "98",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 7,
        x: 73.19601430565915,
        y: 63.4,
        label: "99",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 8,
        x: 71.23759251821676,
        y: 94.6,
        label: "100",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 9,
        x: 58.14064681469582,
        y: 94.6,
        label: "101",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 10,
        x: 51.28617055864747,
        y: 62.6,
        label: "102",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 11,
        x: 45.77810928146576,
        y: 94.8,
        label: "103",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 12,
        x: 33.9051771950963,
        y: 62,
        label: "104",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 13,
        x: 32.80356493965995,
        y: 95,
        label: "105",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 14,
        x: 21.909843747011685,
        y: 63,
        label: "106",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 15,
        x: 22.399449193872282,
        y: 93.60000000000001,
        label: "107",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 16,
        x: 10.893721192648268,
        y: 94.19999999999999,
        label: "108",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 17,
        x: 2.69282995773328,
        y: 93,
        label: "109",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 18,
        x: 3.182435404593876,
        y: 76.6,
        label: "110",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 19,
        x: 3.304836766309025,
        y: 53.800000000000004,
        label: "111",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 20,
        x: 3.060034042878727,
        y: 30.4,
        label: "112",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 21,
        x: 21.787442385296536,
        y: 48.8,
        label: "113",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 22,
        x: 21.42023830015109,
        y: 32.4,
        label: "114",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 23,
        x: 21.909843747011685,
        y: 4.8,
        label: "115",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 24,
        x: 2.9376326811635782,
        y: 4.8,
        label: "116",
        url: "",
        type: "text",
        color: "black",
      },
      {
        id: 25,
        x: 92.16822537150726,
        y: 25.4,
        label: "117",
        url: "",
        type: "uma",
        color: "#0096ff",
      },
    ],
  ];

  if (building === "B") {
    switch (level) {
      case "1":
        currentMap = mapB1;
        currentMapHelper = mapHelperB1;
        currentMapPoints = [
          {
            id: 1,
            x: 83.7524757035604,
            y: 39,
            label: "1",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 2,
            x: 83.98059158346553,
            y: 56.2,
            label: "2",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 3,
            x: 82.06960903237847,
            y: 71.2,
            label: "3",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 4,
            x: 77.65046188298965,
            y: 86.4,
            label: "4",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 5,
            x: 69.88709526919847,
            y: 77.4,
            label: "5",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 6,
            x: 61.16823737986377,
            y: 77.2,
            label: "6",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 7,
            x: 67.02062144256789,
            y: 91.8,
            label: "7",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 8,
            x: 52.68825230941495,
            y: 77.4,
            label: "8",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 9,
            x: 44.44714005785201,
            y: 77.4,
            label: "9",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 10,
            x: 49.10516002612672,
            y: 91.8,
            label: "10",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 11,
            x: 36.20602780628908,
            y: 77.2,
            label: "11",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 12,
            x: 31.070262200242603,
            y: 91.60000000000001,
            label: "12",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 13,
            x: 28.32322478305496,
            y: 71.8,
            label: "13",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 14,
            x: 29.398152468041427,
            y: 53.2,
            label: "14",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 15,
            x: 39.90855649902025,
            y: 52.6,
            label: "15",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 16,
            x: 39.07250163291966,
            y: 36,
            label: "16",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 17,
            x: 29.517588877484368,
            y: 35.8,
            label: "17",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 18,
            x: 10.407763366613791,
            y: 10.6,
            label: "18",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 19,
            x: 18.88774843706261,
            y: 13.8,
            label: "19",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 20,
            x: 26.531678641410846,
            y: 9.8,
            label: "20",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 21,
            x: 33.45899038910143,
            y: 18.4,
            label: "21",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 22,
            x: 41.58066623122142,
            y: 16.400000000000002,
            label: "22",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 23,
            x: 48.50797797891201,
            y: 22,
            label: "23",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 24,
            x: 43.01390314453672,
            y: 4.3999999999999995,
            label: "24",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 25,
            x: 54.24092563217319,
            y: 15.8,
            label: "25",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 26,
            x: 63.55696556872259,
            y: 14.799999999999999,
            label: "26",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 27,
            x: 63.55696556872259,
            y: 4.6,
            label: "27",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 28,
            x: 75.5006065130167,
            y: 13.4,
            label: "28",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 29,
            x: 78.36708033964729,
            y: 4.3999999999999995,
            label: "29",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 30,
            x: 84.57777363068023,
            y: 19,
            label: "30",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 31,
            x: 63.43752915927965,
            y: 22.8,
            label: "31",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 32,
            x: 72.27582345805729,
            y: 32,
            label: "32",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 33,
            x: 94.25212279555846,
            y: 39,
            label: "33",
            url: "",
            type: "uma",
            color: "#0096ff",
          },
        ];
        break;
      case "2":
        currentMap = mapB2;
        currentMapHelper = mapHelperB2;
        currentMapPoints = [
          {
            id: 1,
            x: 81.54842190450499,
            y: 19,
            label: "33",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 2,
            x: 80.99909262574491,
            y: 33.2,
            label: "34",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 3,
            x: 72.83762905559506,
            y: 47.4,
            label: "35",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 4,
            x: 82.09775118326507,
            y: 47.599999999999994,
            label: "36",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 5,
            x: 72.83762905559506,
            y: 71,
            label: "37",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 6,
            x: 74.87799494813252,
            y: 90.4,
            label: "38",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 7,
            x: 58.39811658532996,
            y: 89.60000000000001,
            label: "39",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 8,
            x: 46.940677342619615,
            y: 89.8,
            label: "40",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 9,
            x: 34.07067709738333,
            y: 90,
            label: "41",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 10,
            x: 20.258969517129756,
            y: 90,
            label: "42",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 11,
            x: 8.173725384407877,
            y: 90.2,
            label: "43",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 12,
            x: 7.38896927189347,
            y: 67.80000000000001,
            label: "44",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 13,
            x: 20.88677440714128,
            y: 67.80000000000001,
            label: "45",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 14,
            x: 8.016774161904996,
            y: 39.4,
            label: "46",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 15,
            x: 20.415920739632636,
            y: 38.2,
            label: "47",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 16,
            x: 32.501164872354515,
            y: 27,
            label: "48",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 17,
            x: 43.17384800255046,
            y: 26.200000000000003,
            label: "49",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 18,
            x: 52.59092135272335,
            y: 26.400000000000002,
            label: "50",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 19,
            x: 61.06628736787895,
            y: 26,
            label: "51",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 20,
            x: 70.48336071805184,
            y: 25.6,
            label: "52",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 21,
            x: 34.69848198739485,
            y: 7.3999999999999995,
            label: "53",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 22,
            x: 44.743360227579274,
            y: 7.3999999999999995,
            label: "54",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 23,
            x: 60.909336145376066,
            y: 7.199999999999999,
            label: "55",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 24,
            x: 70.95421438556049,
            y: 7.000000000000001,
            label: "56",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 25,
            x: 92.77043431346101,
            y: 50,
            label: "57",
            url: "",
            type: "uma",
            color: "#0096ff",
          },
        ];
        break;
      case "3":
        currentMap = mapB3;
        currentMapHelper = mapHelperB3;
        currentMapPoints = [
          {
            id: 1,
            x: 67.90321266599679,
            y: 26,
            label: "57",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 2,
            x: 80.6778372213019,
            y: 26.200000000000003,
            label: "58",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 3,
            x: 67.29489721098226,
            y: 36.199999999999996,
            label: "59",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 4,
            x: 80.50403280558346,
            y: 36,
            label: "60",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 5,
            x: 67.64250604241914,
            y: 46.400000000000006,
            label: "61",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 6,
            x: 80.15642397414659,
            y: 46.2,
            label: "62",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 7,
            x: 71.98761643538006,
            y: 65.4,
            label: "63",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 8,
            x: 71.98761643538006,
            y: 75.4,
            label: "64",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 9,
            x: 38.09575537028488,
            y: 74.8,
            label: "65",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 10,
            x: 22.45335795562556,
            y: 75.4,
            label: "66",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 11,
            x: 21.93194470847025,
            y: 95,
            label: "67",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 12,
            x: 4.203894305189691,
            y: 94.8,
            label: "68",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 13,
            x: 3.8562854737528176,
            y: 74.8,
            label: "69",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 14,
            x: 4.203894305189691,
            y: 60.199999999999996,
            label: "70",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 15,
            x: 4.203894305189691,
            y: 45,
            label: "71",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 16,
            x: 22.800966787062436,
            y: 59.599999999999994,
            label: "72",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 17,
            x: 22.45335795562556,
            y: 34.4,
            label: "73",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 18,
            x: 4.030089889471254,
            y: 33,
            label: "74",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 19,
            x: 29.57933900008147,
            y: 15.6,
            label: "75",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 20,
            x: 36.87912446025582,
            y: 25.4,
            label: "76",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 21,
            x: 29.2317301686446,
            y: 25,
            label: "77",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 22,
            x: 29.05792575292616,
            y: 4.2,
            label: "78",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 23,
            x: 41.22423485321674,
            y: 4.3999999999999995,
            label: "79",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 24,
            x: 43.13608342611954,
            y: 25,
            label: "80",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 25,
            x: 49.219237976264836,
            y: 25.2,
            label: "81",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 26,
            x: 49.219237976264836,
            y: 4.2,
            label: "82",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 27,
            x: 55.12858811069169,
            y: 25.4,
            label: "83",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 28,
            x: 59.995111750807915,
            y: 4.3999999999999995,
            label: "84",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 29,
            x: 61.55935149227385,
            y: 25.4,
            label: "85",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 30,
            x: 75.11609591831191,
            y: 4.2,
            label: "86",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 31,
            x: 31.664991988702713,
            y: 94.6,
            label: "87",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 32,
            x: 42.26706134752736,
            y: 94.19999999999999,
            label: "88",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 33,
            x: 53.73815278494419,
            y: 94.39999999999999,
            label: "89",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 34,
            x: 53.21673953778888,
            y: 74.8,
            label: "90",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 35,
            x: 67.29489721098226,
            y: 94.8,
            label: "91",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 36,
            x: 80.50403280558346,
            y: 94.19999999999999,
            label: "92",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 37,
            x: 91.62751541156342,
            y: 45,
            label: "93",
            url: "",
            type: "uma",
            color: "#0096ff",
          },
        ];
        break;
      case "4":
        currentMap = mapB4;
        currentMapHelper = mapHelperB4;
        currentMapPoints = [
          {
            id: 1,
            x: 63.220303325874504,
            y: 25.4,
            label: "93",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 2,
            x: 62.791898559871484,
            y: 5.800000000000001,
            label: "94",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 3,
            x: 82.98812324287108,
            y: 5.6000000000000005,
            label: "95",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 4,
            x: 73.44081702908944,
            y: 5.4,
            label: "96",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 5,
            x: 62.914299921586625,
            y: 36,
            label: "97",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 6,
            x: 62.914299921586625,
            y: 49.6,
            label: "98",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 7,
            x: 73.19601430565915,
            y: 63.4,
            label: "99",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 8,
            x: 71.23759251821676,
            y: 94.6,
            label: "100",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 9,
            x: 58.14064681469582,
            y: 94.6,
            label: "101",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 10,
            x: 51.28617055864747,
            y: 62.6,
            label: "102",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 11,
            x: 45.77810928146576,
            y: 94.8,
            label: "103",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 12,
            x: 33.9051771950963,
            y: 62,
            label: "104",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 13,
            x: 32.80356493965995,
            y: 95,
            label: "105",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 14,
            x: 21.909843747011685,
            y: 63,
            label: "106",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 15,
            x: 22.399449193872282,
            y: 93.60000000000001,
            label: "107",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 16,
            x: 10.893721192648268,
            y: 94.19999999999999,
            label: "108",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 17,
            x: 2.69282995773328,
            y: 93,
            label: "109",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 18,
            x: 3.182435404593876,
            y: 76.6,
            label: "110",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 19,
            x: 3.304836766309025,
            y: 53.800000000000004,
            label: "111",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 20,
            x: 3.060034042878727,
            y: 30.4,
            label: "112",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 21,
            x: 21.787442385296536,
            y: 48.8,
            label: "113",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 22,
            x: 21.42023830015109,
            y: 32.4,
            label: "114",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 23,
            x: 21.909843747011685,
            y: 4.8,
            label: "115",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 24,
            x: 2.9376326811635782,
            y: 4.8,
            label: "116",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 25,
            x: 92.16822537150726,
            y: 25.4,
            label: "117",
            url: "",
            type: "uma",
            color: "#0096ff",
          },
        ];
        break;
      default:
        currentMap = mapB1;
        currentMapHelper = mapHelperB1;
        currentMapPoints = [];
        break;
    }
  } else if (building === "E") {
    switch (level) {
      case "1":
        currentMap = mapE1;
        currentMapHelper = mapHelperE1;
        currentMapPoints = [
          {
            id: 1,
            x: 78.91891891891892,
            y: 31.125733085395506,
            label: "2",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 2,
            x: 91.08108108108108,
            y: 30.095837505364038,
            label: "3",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 3,
            x: 78.01801801801803,
            y: 40.62365899013017,
            label: "4",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 4,
            x: 91.35135135135135,
            y: 41.31025604348448,
            label: "5",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 5,
            x: 77.38738738738739,
            y: 50.922614790444854,
            label: "6",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 6,
            x: 91.44144144144144,
            y: 51.60921184379917,
            label: "7",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 7,
            x: 90.81081081081082,
            y: 62.36589901301674,
            label: "8",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 8,
            x: 80.63063063063063,
            y: 79.98855671577742,
            label: "9",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 9,
            x: 77.38738738738739,
            y: 61.90816764411387,
            label: "10",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 10,
            x: 69.0990990990991,
            y: 80.21742240022887,
            label: "11",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 11,
            x: 63.42342342342342,
            y: 63.05249606637104,
            label: "12",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 12,
            x: 57.117117117117125,
            y: 79.75969103132599,
            label: "13",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 13,
            x: 48.64864864864865,
            y: 62.137033328565295,
            label: "14",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 14,
            x: 40.630630630630634,
            y: 80.10298955800315,
            label: "15",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 15,
            x: 35.945945945945944,
            y: 67.17207838649692,
            label: "16",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 16,
            x: 47.47747747747748,
            y: 50.350450579316266,
            label: "17",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 17,
            x: 47.83783783783784,
            y: 38.335002145615796,
            label: "18",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 18,
            x: 19.36936936936937,
            y: 45.42983836361036,
            label: "19",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 19,
            x: 19.45945945945946,
            y: 35.13088256329567,
            label: "20",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 20,
            x: 19.45945945945946,
            y: 21.170075811757975,
            label: "21",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 21,
            x: 19.63963963963964,
            y: 7.895866113574596,
            label: "22",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 22,
            x: 30.270270270270274,
            y: 7.667000429123158,
            label: "23",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 23,
            x: 26.576576576576578,
            y: 28.379344871978258,
            label: "24",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 24,
            x: 34.41441441441441,
            y: 28.036046345301102,
            label: "25",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 25,
            x: 46.306306306306304,
            y: 27.349449291946787,
            label: "26",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 26,
            x: 44.5045045045045,
            y: 7.4381347446717205,
            label: "27",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 27,
            x: 55.13513513513514,
            y: 23.001001287369473,
            label: "28",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 28,
            x: 56.846846846846844,
            y: 7.323701902446002,
            label: "29",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 29,
            x: 64.05405405405405,
            y: 22.886568445143755,
            label: "30",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 30,
            x: 65.94594594594595,
            y: 7.4381347446717205,
            label: "31",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 31,
            x: 72.25225225225225,
            y: 23.344299814046632,
            label: "32",
            url: "",
            type: "text",
            color: "black",
          },
          {
            id: 32,
            x: 21.891891891891895,
            y: 76.32670576455442,
            label: "33",
            url: "",
            type: "uma",
            color: "#001eff",
          },
        ];
        break;
      case "2":
        currentMap = mapE2;
        currentMapHelper = mapHelperE2;
        currentMapPoints = [
  {
    "id": 1,
    "x": 82.34234234234235,
    "y": 28.71296382839518,
    "label": "33",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 2,
    "x": 95.13513513513514,
    "y": 28.71296382839518,
    "label": "34",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 3,
    "x": 80.9009009009009,
    "y": 37.885160606910304,
    "label": "35",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 4,
    "x": 95.4054054054054,
    "y": 38.58304514440602,
    "label": "36",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 5,
    "x": 80.72072072072072,
    "y": 47.15705517649624,
    "label": "37",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 6,
    "x": 95.4054054054054,
    "y": 47.85493971399196,
    "label": "38",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 7,
    "x": 83.06306306306305,
    "y": 70.58603607813815,
    "label": "39",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 8,
    "x": 95.76576576576576,
    "y": 65.5014487335265,
    "label": "40",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 9,
    "x": 75.85585585585586,
    "y": 61.3141415085522,
    "label": "41",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 10,
    "x": 68.73873873873873,
    "y": 70.98482724242142,
    "label": "42",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 11,
    "x": 54.32432432432432,
    "y": 59.718976851419136,
    "label": "43",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 12,
    "x": 53.96396396396397,
    "y": 70.48633828706733,
    "label": "44",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 13,
    "x": 41.26126126126126,
    "y": 70.08754712278406,
    "label": "45",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 14,
    "x": 29.18918918918919,
    "y": 64.70386640495997,
    "label": "46",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 15,
    "x": 35.67567567567568,
    "y": 51.244664610399724,
    "label": "47",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 16,
    "x": 44.5045045045045,
    "y": 60.317163597844036,
    "label": "48",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 17,
    "x": 44.5045045045045,
    "y": 38.88213851761847,
    "label": "49",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 18,
    "x": 37.027027027027025,
    "y": 38.88213851761847,
    "label": "50",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 19,
    "x": 28.01801801801802,
    "y": 32.99996884444029,
    "label": "51",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 20,
    "x": 36.306306306306304,
    "y": 22.432002990933732,
    "label": "52",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 21,
    "x": 28.468468468468465,
    "y": 18.0453001838178,
    "label": "53",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 22,
    "x": 43.15315315315315,
    "y": 22.033211826650465,
    "label": "54",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 23,
    "x": 28.01801801801802,
    "y": 3.290027105336947,
    "label": "55",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 24,
    "x": 39.63963963963964,
    "y": 3.1903293142661306,
    "label": "56",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 25,
    "x": 51.35135135135135,
    "y": 21.235629498083934,
    "label": "57",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 26,
    "x": 54.054054054054056,
    "y": 2.4924447767704145,
    "label": "58",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 27,
    "x": 62.52252252252253,
    "y": 21.634420662367198,
    "label": "59",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 28,
    "x": 65.85585585585586,
    "y": 2.891235941053681,
    "label": "60",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 29,
    "x": 73.06306306306305,
    "y": 21.0362339159423,
    "label": "61",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 30,
    "x": 12.432432432432433,
    "y": 71.38361840670467,
    "label": "30",
    "url": "",
    "type": "uma",
    "color": "#001eff"
  }
];
        break;
      case "3":
        currentMap = mapE3;
        currentMapHelper = mapHelperE3;
        currentMapPoints = [
  {
    "id": 1,
    "x": 80.27027027027027,
    "y": 31.50512715651081,
    "label": "62",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 2,
    "x": 94.95495495495496,
    "y": 31.11737174535375,
    "label": "63",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 3,
    "x": 80.36036036036036,
    "y": 41.87758440496206,
    "label": "64",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 4,
    "x": 95.85585585585585,
    "y": 42.16840096332985,
    "label": "65",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 5,
    "x": 79.81981981981981,
    "y": 55.44902379545902,
    "label": "66",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 6,
    "x": 96.12612612612612,
    "y": 55.545962648248285,
    "label": "67",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 7,
    "x": 96.21621621621622,
    "y": 69.79597400827011,
    "label": "68",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 8,
    "x": 95.85585585585585,
    "y": 81.71945290134957,
    "label": "69",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 9,
    "x": 83.06306306306305,
    "y": 82.2041471652959,
    "label": "70",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 10,
    "x": 79.27927927927928,
    "y": 63.78576513533572,
    "label": "71",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 11,
    "x": 68.37837837837839,
    "y": 82.10720831250663,
    "label": "72",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 12,
    "x": 53.333333333333336,
    "y": 82.2041471652959,
    "label": "73",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 13,
    "x": 36.57657657657658,
    "y": 81.6225140485603,
    "label": "74",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 14,
    "x": 26.126126126126124,
    "y": 66.98474727738144,
    "label": "75",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 15,
    "x": 51.53153153153153,
    "y": 64.56127595764984,
    "label": "76",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 16,
    "x": 41.44144144144144,
    "y": 48.566365247421274,
    "label": "77",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 17,
    "x": 33.693693693693696,
    "y": 48.27554868905348,
    "label": "78",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 18,
    "x": 41.351351351351354,
    "y": 35.38268126808137,
    "label": "79",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 19,
    "x": 34.054054054054056,
    "y": 36.061253237606216,
    "label": "80",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 20,
    "x": 25.495495495495497,
    "y": 35.86737553202769,
    "label": "81",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 21,
    "x": 41.98198198198198,
    "y": 27.530634192150984,
    "label": "82",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 22,
    "x": 35.13513513513514,
    "y": 22.58675269989852,
    "label": "83",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 23,
    "x": 25.585585585585584,
    "y": 22.489813847109254,
    "label": "84",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 24,
    "x": 26.216216216216214,
    "y": 5.137759197830993,
    "label": "85",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 25,
    "x": 39.63963963963964,
    "y": 4.265309522727617,
    "label": "86",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 26,
    "x": 53.51351351351351,
    "y": 22.489813847109254,
    "label": "87",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 27,
    "x": 53.24324324324324,
    "y": 4.750003786673937,
    "label": "88",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 28,
    "x": 65.13513513513513,
    "y": 4.168370669938353,
    "label": "89",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 29,
    "x": 63.693693693693696,
    "y": 22.005119583162934,
    "label": "90",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 30,
    "x": 73.51351351351352,
    "y": 22.005119583162934,
    "label": "91",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 31,
    "x": 25.405405405405407,
    "y": 81.23475863740325,
    "label": "92",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 32,
    "x": 8.64864864864865,
    "y": 44.10717801911513,
    "label": "93",
    "url": "",
    "type": "uma",
    "color": "#001eff"
  }
];
        break;
      case "4":
        currentMap = mapE4;
        currentMapHelper = mapHelperE4;
        currentMapPoints = [
  {
    "id": 1,
    "x": 75.8108108108108,
    "y": 80.26873083102089,
    "label": "93",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 2,
    "x": 66.98198198198199,
    "y": 80.15189133927268,
    "label": "94",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 3,
    "x": 54.369369369369366,
    "y": 62.742807068789254,
    "label": "95",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 4,
    "x": 75.09009009009009,
    "y": 62.39228859354462,
    "label": "96",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 5,
    "x": 54.729729729729726,
    "y": 80.26873083102089,
    "label": "97",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 6,
    "x": 48.51351351351351,
    "y": 80.03505184752446,
    "label": "98",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 7,
    "x": 36.53153153153153,
    "y": 80.26873083102089,
    "label": "99",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 8,
    "x": 37.7027027027027,
    "y": 68.00058419745875,
    "label": "100",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 9,
    "x": 50.04504504504504,
    "y": 53.04512925368775,
    "label": "101",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 10,
    "x": 49.32432432432432,
    "y": 39.959106177888124,
    "label": "102",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 11,
    "x": 36.891891891891895,
    "y": 34.58448955747043,
    "label": "103",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 12,
    "x": 49.5945945945946,
    "y": 22.5500219074047,
    "label": "104",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 13,
    "x": 36.98198198198198,
    "y": 16.240689353001315,
    "label": "105",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 14,
    "x": 36.98198198198198,
    "y": 3.8557032276909595,
    "label": "106",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 15,
    "x": 46.35135135135135,
    "y": 3.388345260698116,
    "label": "107",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 16,
    "x": 58.6036036036036,
    "y": 21.498466481670807,
    "label": "108",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 17,
    "x": 58.693693693693696,
    "y": 3.6220242441945376,
    "label": "109",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 18,
    "x": 67.97297297297298,
    "y": 22.31634292390828,
    "label": "110",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 19,
    "x": 74.81981981981983,
    "y": 21.615305973419016,
    "label": "111",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 20,
    "x": 73.37837837837839,
    "y": 4.206221702935592,
    "label": "112",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 21,
    "x": 42.47747747747748,
    "y": 80.85292828976193,
    "label": "113",
    "url": "",
    "type": "text",
    "color": "black"
  },
  {
    "id": 22,
    "x": 17.972972972972972,
    "y": 42.996932963341614,
    "label": "114",
    "url": "",
    "type": "uma",
    "color": "#001eff"
  }
];
        break;
      default:
        currentMap = mapE1;
        currentMapHelper = mapHelperE1;
        currentMapPoints = [];
        break;
    }
  }

  //Hooks
  const [isEditing, setIsEditing] = React.useState(false);
  const { devices, loading, error } = useGetAllVavDevices(
    parseInt(level ?? "0"),
    building ?? ""
  );
  const [mapPointsState, setMapPointsState] = React.useState<Point[]>(
    currentMapPoints!
  );

  React.useEffect(() => {
    if (!loading && devices) {
      // Check if the current map points are loaded

      let currentForceLevel = parseInt(searchParams.get("level") ?? "0");

      let currentMapPointsForce: Point[] = determineMapPointCases(building, level)

      // Force update the state

      setMapPointsState(currentMapPointsForce);

      let colorMapPoints = determineMapPointCases(building, level)

      //Iterate loaded devices
      for (let i = 0; i < devices.length; i++) {
        const device = devices[i];
        // look for the point
        const point = colorMapPoints.find(
          (p) => p.label === device.device.toString()
        );
        if (point) {
          // If the device is a VAV, set the color to blue
          point.color = "#000000"; // Color for UMAs

          // Check range colors
          if (device.temp) {
            if (device.temp < 20) {
              point.color = "#0096ff"; // Blue for low range
            } else if (device.temp >= 20 && device.temp < 23.5) {
              point.color = "#01a836"; // Green for medium range
            } else if (device.temp >= 23.5) {
              point.color = "#e20000"; // Red for high range
            }
          }
        } else {
          console.warn(
            `Device with id ${device.device} not found in currentMapPoints`
          );
        }
      }

      // Set the updated points to the state
      setMapPointsState(colorMapPoints);
    }
  }, [loading, devices]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingComponent></LoadingComponent>
      </div>
    );
  }

  return (
    <>
      {/* NAVBAR */}
      <NavbarComponent
        title={"Edificio " + building + " - " + "Piso " + level}
      ></NavbarComponent>

      {/* SIDEBAR */}
      <FloorSidebarComponent defaultVisible></FloorSidebarComponent>

      {/* Loading */}

      {/* MainContainer */}
      <ContainerComponent className="flex justify-center grow  ">
        <div className="height-100 h-150 xl:h-150 2xl:h-200 self-center pb-10">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <LoadingComponent></LoadingComponent>
            </div>
          ) : isEditing ? (
            <FloorMapEditorComponent
              imageUrl={currentMapHelper!}
              currentPointsList={currentMapPoints!}
              onPointClick={(point) => {
                console.log(point);
              }}
            ></FloorMapEditorComponent>
          ) : (
            <FloorMapComponent
              pointsList={mapPointsState || []}
              imageUrl={currentMap!}
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
