import React from "react";
import NavbarComponent from "../../components/navbar/navbar-component";
import ContainerComponent from "../../components/container/container_component";
import ChillerStandby from "../../assets/3d_models/chiller/chiller_standby.png";

interface StatusModel {
  label: string;
  value: number;
  unity: string;
}

const ChillersPage: React.FC = () => {
  const [chillersState, setChillerState] = React.useState({
    chiller_1: true,
    chiller_2: true,
    chiller_3: true,
    temperatura_inyeccion_helada: 0,
    temperatura_retorno_helada: 0,
    temperatura_retorno_condensados: 0,
  });

  const chillersList = [
    {
      id: "chiller_1",
      label: "Chiller 1",
      status: true,
     },
     {
      id: "chiller_2",
      label: "Chiller 2",
      status: true,
     },
     {
      id: "chiller_3",
      label: "Chiller 3",
      status: true,
     }
  ]

  const status: StatusModel[] = [
    {
      label: "Temp. de inyección de agua helada",
      value: chillersState.temperatura_inyeccion_helada,
      unity: "°C",
    },
    {
      label: "Temp. de retorno de agua helada",
      value: chillersState.temperatura_retorno_helada,
      unity: "°C",
    },
    {
      label: "Temp. de retorno de condensados",
      value: chillersState.temperatura_retorno_condensados,
      unity: "°C",
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <NavbarComponent title="Visualizacion de chillers"></NavbarComponent>

      <div className="grid grid-cols-[1fr_auto] h-full ">
        {/* Main Content */}
        <ContainerComponent>
          <div className="flex justify-between mb-4">
            <div>
              <h1 className="text-2xl ">Cuarto de chillers</h1>
              <p className="opacity-50">Edificio F - Piso 2</p>
            </div>
          </div>

          {/* ANIMATIONS SECTIONS */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {chillersList.map((chiller) => (
              <div key={chiller.id}>
              <div className="flex justify-between items-center">
                <h2 className="text-xl my-4 text-center">{chiller.label}</h2>
              </div>
              <div className="bg-gray-50/25 w-full h-65 my-6 flex items-center justify-center">
                <img
                src={ChillerStandby}
                alt={chiller.label}
                className="h-full object-contain"
                />
              </div>
              </div>
            ))}
          </section>

          {/* 📉 Data section */}
          <section
            className={`${
              !chillersState.chiller_1 ||
              !chillersState.chiller_2 ||
              !chillersState.chiller_3
                ? "pointer-events-none opacity-50"
                : ""
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
      </div>
    </div>
  );
};

export default ChillersPage;
