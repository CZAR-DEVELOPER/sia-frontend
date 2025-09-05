import React from "react";
import NavbarComponent from "../../components/navbar/navbar-component";
import ContainerComponent from "../../components/container/container_component";
import CoolingTowerModel from "../../assets/3d_models/cooling_towers/cooling_towers.webm";
import { useCoolingTowers } from "../../services/cooling_towers/cooling_hooks";
import LoadingComponent from "../../components/loading/loading_component";
import ButtonComponent from "../../components/button/button_component";

import CoolingTowerOn1 from "../../assets/3d_models/cooling_towers/cooling_towers_on_1.webm";
import CoolingTowerOn2 from "../../assets/3d_models/cooling_towers/cooling_towers_on_2.webm";
import CoolingTowerOnBoth from "../../assets/3d_models/cooling_towers/cooling_towers_on_both.webm";

const CoolingTowersPage: React.FC = () => {

  // HOOK cooling towers
  const { coolingTowersData, loading, error } = useCoolingTowers();
 
  const [coolingTowersState, setCoolingTowersState] = React.useState([
    {
      value: false,
      label: "Estado Torre 1",
    },
    {
      value: false,
      label: "Estado Torre 2",
    },
  ]);

  React.useEffect(() => {
    if (
      coolingTowersData &&
      coolingTowersData.status === "ok" &&
      coolingTowersData.data
    ) {
      setCoolingTowersState([
        {
          value: coolingTowersData.data.Torre1 === "Encendido",
          label: "Estado Torre 1",
        },
        {
          value: coolingTowersData.data.Torre2 === "Encendido",
          label: "Estado Torre 2",
        },
      ]);
    }
  }, [coolingTowersData]);

  function getCoolingTowerImage(state: { value: boolean }[]) {
    const [tower1, tower2] = state.map(s => s.value);
    if (tower1 && tower2) return CoolingTowerOnBoth;
    if (tower1) return CoolingTowerOn1;
    if (tower2) return CoolingTowerOn2;
    return CoolingTowerModel;
  }

  // Loading and error handling
  if (loading || error) {
    console.log("Loading or error state detected:", { loading, error });
    return (
      <div className="h-screen flex items-center justify-center">
        {loading ? (
          <LoadingComponent></LoadingComponent>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl mb-5">Ocurrió un error</h1>
            <p className="text-sm text-gray-500">
              No se pudo obtener los datos. Por favor, revise la conexion de los
              dispositivos y NodeRed.
            </p>
            <ButtonComponent
              className="mt-4"
              onClick={() => {
                window.location.reload();
              }}
            >
              Volver a intentar
            </ButtonComponent>

            <ButtonComponent
              className="mt-4"
              style="text"
              size="sm"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Regresar al inicio
            </ButtonComponent>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <NavbarComponent title="Torres de enfriamiento" />

      {/* Main content */}
      <div className="grid grid-cols-[1fr_auto] h-full ">
        {/* Main Content */}
        <ContainerComponent>
          <div className="flex justify-between mb-4">
            <div>
              <h1 className="text-2xl ">Torres de enfriamiento</h1>
              <p className="opacity-50">Edificio F - Piso 2</p>
            </div>
          </div>

          {/* ANIMATIONS SECTIONS */}
      {/* ANIMATIONS SECTIONS */}
            <div className="bg-gray-50/25  w-full h-100 my-2 flex items-center justify-center ">
            {/* <img src={VavStandby} alt="UMA" className=" h-full object-fit" /> */}
            
            <video
              src={getCoolingTowerImage(coolingTowersState)}
              autoPlay
              loop
              muted
              controls={false}
              className="h-full object-fit"
              ></video>
            </div>

          {/* 📉 Data section */}
          <section>
            {/* STATUS SECTION */}
            <h2 className="text-lg my-4">Estatus</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
              {coolingTowersState.map((status, index) => (
                <div
                  key={index}
                  className="text-sm opacity-75 p-8 bg-gray-100  rounded-2xl"
                >
                  <p className="text-sm">{status.label}</p>
                  <p>
                <span className="text-xl ">{status.value ? "Encendido" : "Apagada"}</span>
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

export default CoolingTowersPage;
