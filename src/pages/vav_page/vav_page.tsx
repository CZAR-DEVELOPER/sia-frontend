import React from "react";
import NavbarComponent from "../../components/navbar/navbar-component";
import ContainerComponent from "../../components/container/container_component";
import { useSearchParams } from "react-router-dom";
import AvatarComponent from "../../components/avatar/avatar_component";
import ButtonComponent from "../../components/button/button_component";
import VavStandby from "../../assets/3d_models/vav/vav_status_standby.png";

interface StatusModel {
  label: string;
  value: number | string;
  unity: string;
}

interface VavModel {
  mode: "manual" | "automatic";
  temperature: number;
  offset: number;
  aperturePercentage: number;
}

const VavPage: React.FC = () => {
  const [vavState, setVavState] = React.useState<VavModel>({
    mode: "automatic",
    temperature: 0,
    offset: 0,
    aperturePercentage: 0,
  });

  const status: StatusModel[] = [
    {
      label: "Mode",
      value: vavState.mode,
      unity: "",
    },
    { label: "Temperatura", value: vavState.temperature, unity: "°C" },
    { label: "Offset", value: vavState.offset, unity: "°C" },
    {
      label: "Porcentaje de apertura",
      value: vavState.aperturePercentage,
      unity: "%",
    },
  ];

  // SIDEBAR
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  //ROUTER
  const [searchParams] = useSearchParams();
  const level = searchParams.get("level"); // Obtén el parámetro "level"
  const building = searchParams.get("building"); // Obtén el parámetro "building"
  const section = searchParams.get("section"); // Obtén el parámetro "building"

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <NavbarComponent title="Visualizacion de VAV"></NavbarComponent>

      <div className="grid grid-cols-[1fr_auto] h-full ">
        {/* Main Content */}
        <ContainerComponent>
          <div className="flex justify-between mb-4">
            <div>
              <h1 className="text-2xl ">Caja VAV #{section}</h1>
              <p className="text-sm opacity-50">
                Edificio: {building} Nivel: {level}
              </p>
            </div>
            <div className="flex ">
              <ButtonComponent
                size="sm"
                style="outline"
                className="flex items-center "
                onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Alternar la barra lateral
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"
                  />
                </svg>
                <span className="ms-2">Ver controles</span>
              </ButtonComponent>
            </div>
          </div>

          {/* ANIMATIONS SECTIONS */}
          <div className="bg-gray-50/25 py-2 w-full h-90 my-6 flex items-center justify-center ">
            <img src={VavStandby} alt="UMA" className=" h-full object-fit" />
          </div>

          {/* 📉 Data section */}
          <section>
            {/* STATUS SECTION */}
            <h2 className="text-lg my-4">Estatus</h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
              {status.map((objeto, index) => (
                <div
                  key={index}
                  className="text-sm opacity-75 p-8 bg-gray-100  rounded-2xl"
                >
                  <p className="text-sm">{objeto.label}</p>
                  <p>
                    <span className="text-xl ">{objeto.value}</span>
                    <span className="text-sm"> {objeto.unity}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ContainerComponent>

        {/* Sidebar */}

        {/* CONTROLS SECTION */}

        <div
          className={` ${
            isSidebarOpen == false ? "hidden" : ""
          }  bg-gray-100/80 p-8   backdrop-blur-md shadow-2xl rounded-2xl  sm:w-full md:w-125  h-full `}
        >
          <h2 className=" text-3xl mb-16">Controles VAV</h2>

          {/* 🎛️ Control de Temperatura */}
          <div className="grid grid-cols-[auto_1fr_2fr] items-center my-4 gap-4 w-full">
            <div>
              <AvatarComponent variant="white" size="large">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg>
              </AvatarComponent>
            </div>
            <div>
              <h3 className="small">Mode</h3>
              
            </div>
            <div>
              <select className="w-full bg-gray-200 rounded p-2 border-none outline-none p-0 m-0 text-center">
                <option value="automatic">Automatico</option>
                <option value="manual">Manual</option>
              </select>
            </div>
          </div>


          {/* 🎛️ Control de Temperatura */}
          <div className="grid grid-cols-[auto_1fr_2fr] items-center my-4 gap-4 w-full">
            <div>
              <AvatarComponent variant="white" size="large">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415" />
                  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1" />
                </svg>
              </AvatarComponent>
            </div>
            <div>
              <h3 className="small">Temperatura</h3>
              <p className="text-sm opacity-50">
                <input
                  type="number"
                  className="w-12 text-center bg-transparent border-none outline-none p-0 m-0 "
                />
                °C
              </p>
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="100"
                className="appearance-none w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-black"
              />
            </div>
          </div>

          {/* 🎛️  Control de offset */}
          <div className="grid grid-cols-[auto_1fr_2fr] items-center my-4 gap-4 w-full ">
            <div>
              <AvatarComponent variant="white" size="large">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10"
                  />
                </svg>
              </AvatarComponent>
            </div>
            <div>
              <h3 className="text">Offset</h3>
              <p className="text-sm opacity-50">
                <input
                  type="number"
                  className="w-12 text-center bg-transparent border-none outline-none p-0 m-0 "
                />
                °C
              </p>
            </div>
            <div className="flex items-center justify-between">
              <ButtonComponent
                size="sm"
                style="icon"
                className="flex items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                  />
                </svg>
              </ButtonComponent>
              <p className="text-xl text-center">0</p>
              <ButtonComponent
                size="sm"
                style="icon"
                className="flex items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                  />
                </svg>
              </ButtonComponent>
            </div>
          </div>

          {/* 📧 Boton enviar */}
          <div className="mt-16">
            <ButtonComponent
              className="flex justify-center items-center"
              onClick={() => {
                //Hide the sidebar
                setIsSidebarOpen(false);
                //Send the data to the server
                setVavState({
                  mode: "automatic",
                  temperature: 0,
                  offset: 0,
                  aperturePercentage: 0,
                });
              }}
            >
              <span className="me-2">Actualizar estado</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VavPage;
