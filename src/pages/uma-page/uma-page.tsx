import React from "react";
import NavbarComponent from "../../components/navbar/navbar-component";
import ContainerComponent from "../../components/container/container_component";
import ButtonComponent from "../../components/button/button_component";
import UmaStandBy from "../../assets/3d_models/uma/uma_status_standby.png";
import AvatarComponent from "../../components/avatar/avatar_component";

interface StatusModel {
  label: string;
  value: number;
  unity: string;
}

const UmaPage: React.FC = () => {
  const [umaState, setUmaState] = React.useState({
    isPowerOn: true,
    frecuence: 0,
    aperturePercentage: 0,
    injectionTemperature: 0,
  });

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true); // Estado para alternar la barra lateral

  const status: StatusModel[] = [
    {
      label: "Temperatura de inyección",
      value: umaState.injectionTemperature,
      unity: "°C",
    },
    { label: "Frecuencia", value: umaState.frecuence, unity: "Hz" },
    {
      label: "Porcentaje de apertura",
      value: umaState.aperturePercentage,
      unity: "%",
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <NavbarComponent title="Visualizacion de UMA"></NavbarComponent>

      <div className="grid grid-cols-[1fr_auto] h-full ">
        {/* Main Content */}
        <ContainerComponent>
          <div className="flex justify-between mb-4">
            <div>
              <h1 className="text-2xl ">UMA de Cocina</h1>
            </div>
            <div className="flex ">
              <ButtonComponent
                disabled={!umaState.isPowerOn}
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
              <ButtonComponent
                style={umaState.isPowerOn ? "solid" : "outline"}
                className="flex items-center ms-2 bg-blue-500"
                size="sm"
                onClick={() => {
                  setUmaState((prevState) => ({
                    ...prevState,
                    isPowerOn: !prevState.isPowerOn,
                  }));
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.5 1v7h1V1z" />
                  <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                </svg>
                <span className="ms-2">
                  {umaState.isPowerOn ? "Encendido" : "Apagado"}
                </span>
              </ButtonComponent>
            </div>
          </div>

          {/* ANIMATIONS SECTIONS */}
          <div className="bg-gray-50/25 py-2 w-full h-90 my-6 flex items-center justify-center ">
            <img src={UmaStandBy} alt="UMA" className=" h-full object-fit" />
          </div>

          {/* 📉 Data section */}
          <section
            className={`${
              !umaState.isPowerOn ? "pointer-events-none opacity-50" : ""
            }`}
          >
            {/* STATUS SECTION */}
            <h2 className="text-lg my-4">Estatus</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
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
          className={` ${isSidebarOpen== false || umaState.isPowerOn == false ? 'hidden':''}  bg-gray-100/80 p-8   backdrop-blur-md shadow-2xl rounded-2xl  sm:w-full md:w-125  h-full `}
        >
         
          <h2 className=" text-3xl mb-16">Controles UMA</h2>

          {/* 🎛️ Control de Frecuencia */}
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
                  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                </svg>
              </AvatarComponent>
            </div>
            <div>
              <h3 className="small">Frecuencia</h3>
              <p className="text-sm opacity-50">
                <input
                  type="number"
                  className="w-12 text-center bg-transparent border-none outline-none p-0 m-0 "
                  value={umaState.frecuence}
                  onChange={(e) => {
                    setUmaState((prevState) => ({
                      ...prevState,
                      frecuence: parseInt(e.target.value),
                    }));
                  }}
                />
                Hz
              </p>
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="100"
                className="appearance-none w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-black"
                value={umaState.frecuence}
                onChange={(e) => {
                  setUmaState((prevState) => ({
                    ...prevState,
                    frecuence: parseInt(e.target.value),
                  }));
                }}
              />
            </div>
          </div>

          {/* 🎛️  Control de apertura */}
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
                  <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
              </AvatarComponent>
            </div>
            <div>
              <h3 className="text">Procentaje de apertura</h3>
              <p className="text-sm opacity-50">
                <input
                  type="number"
                  className="w-12 text-center bg-transparent border-none outline-none p-0 m-0 "
                  value={umaState.aperturePercentage}
                  onChange={(e) => {
                    setUmaState((prevState) => ({
                      ...prevState,
                      aperturePercentage: parseInt(e.target.value),
                    }));
                  }}
                />
                %
              </p>
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="100"
                className="appearance-none w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-black"
                value={umaState.aperturePercentage}
                onChange={(e) => {
                  setUmaState((prevState) => ({
                    ...prevState,
                    aperturePercentage: parseInt(e.target.value),
                  }));
                }}
              />
            </div>
          </div>

          {/* 📧 Boton enviar */}
          <div className="mt-16">
            <ButtonComponent className="flex justify-center items-center" onClick={() => {

              //Hide the sidebar
              setIsSidebarOpen(false);
              //Send the data to the server
              
            }}>
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

export default UmaPage;
