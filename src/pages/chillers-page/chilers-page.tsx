import React from "react";
import NavbarComponent from "../../components/navbar/navbar-component";
import ContainerComponent from "../../components/container/container_component";
import ChillerStandby from "../../assets/3d_models/chiller/chiller_standby.png";
import ChillerOn from "../../assets/3d_models/chiller/chiller_on.png";
import { useChillerTemps } from "../../services/chillers/chillers_hooks";
import LoadingComponent from "../../components/loading/loading_component";
import ButtonComponent from "../../components/button/button_component";

interface StatusModel {
  label: string;
  value: number;
  unity: string;
}

const ChillersPage: React.FC = () => {
  // HOOK chillers
  const { chillersData, loading, error } = useChillerTemps();

  const [chillersState, setChillerState] = React.useState({
    chiller_1: true,
    chiller_2: true,
    chiller_3: true,
    temperatura_inyeccion_helada: 0,
    temperatura_retorno_helada: 0,
    temperatura_retorno_condensados: 0,
  });

  // Update state when data is fetched
  React.useEffect(() => {
    if (chillersData && chillersData.data) {
      setChillerState(prev => ({
        ...prev,
        chiller_1: chillersData.data.Chiller_1 ?? prev.chiller_1,
        chiller_2: chillersData.data.Chiller_2 ?? prev.chiller_2,
        chiller_3: chillersData.data.Chiller_3 ?? prev.chiller_3,
        temperatura_inyeccion_helada: chillersData.data.SupplyTemp ?? prev.temperatura_inyeccion_helada,
        temperatura_retorno_helada: chillersData.data.ReturnTemp ?? prev.temperatura_retorno_helada,
        temperatura_retorno_condensados: chillersData.data.CondensedTemp ?? prev.temperatura_retorno_condensados,
      }));
    }
  }, [chillersData]);

  const chillersList = [
    {
      id: "chiller_1",
      label: "Chiller 1",
      status: chillersState.chiller_1,
    },
    {
      id: "chiller_2",
      label: "Chiller 2",
      status: chillersState.chiller_2,
    },
    {
      id: "chiller_3",
      label: "Chiller 3",
      status: chillersState.chiller_3,
    },
  ];

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

  // Update state when data is fetched

  

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
                  <div>
                    <h2 className="text-xl my-4 text-center">
                      {chiller.label}
                    </h2>
                    
                    <p className={` ${chiller.status ? "text-green-600 opacity-100" : "opacity-50"} `}>
                      <div className="w-3 h-3 rounded-full mr-2 inline-block" style={{ backgroundColor: chiller.status ? 'green' : 'gray' }}>
                  
                      </div>
                      {chiller.status ? "Prendido" : "Apagado"}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50/25 w-full h-65 my-6 flex items-center justify-center">
                  <img
                    src={chiller.status ? ChillerOn : ChillerStandby}
                    alt={chiller.label}
                    className="h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </section>

          {/* 📉 Data section */}
          <section
           
          >
            {/* STATUS SECTION */}
            <h2 className="text-lg my-4">Estatus</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
              <div className="text-sm opacity-75 p-8 bg-gray-100  rounded-2xl">
                <p className="text-sm">Temp. de inyección de agua helada</p>
                <p>
                  <span className="text-xl ">
                    {chillersData.data &&
                    chillersData.data.supplyTemp !== undefined
                      ? chillersData.data.supplyTemp
                      : "Sin conexion"}
                  </span>
                  <span className="text-sm">°C</span>
                </p>
              </div>

              <div className="text-sm opacity-75 p-8 bg-gray-100  rounded-2xl">
                <p className="text-sm">Temp. de retorno de agua helada</p>
                <p>
                  <span className="text-xl ">
                    {chillersData.data &&
                    chillersData.data.returnTemp !== undefined
                      ? chillersData.data.returnTemp
                      : "Sin conexion"}
                  </span>
                  <span className="text-sm">°C</span>
                </p>
              </div>

              <div className="text-sm opacity-75 p-8 bg-gray-100  rounded-2xl">
                <p className="text-sm">Temp. de retorno de condensados</p>
                <p>
                  <span className="text-xl ">
                    {chillersData.data &&
                    chillersData.data.condensedTemp !== undefined
                      ? chillersData.data.condensedTemp
                      : "Sin conexion"}
                  </span>
                  <span className="text-sm">°C</span>
                </p>
              </div>
            </div>
          </section>
        </ContainerComponent>
      </div>
    </div>
  );
};

export default ChillersPage;
