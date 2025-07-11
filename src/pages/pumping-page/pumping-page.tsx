// Simple React pumping page component
import React from "react";
import NavbarComponent from "../../components/navbar/navbar-component";
import { useParams } from "react-router-dom";
import ContainerComponent from "../../components/container/container_component";
import PumpBlack from "../../assets/3d_models/pumps/pump_black.webm";
import PumpBlue from "../../assets/3d_models/pumps/pump_blue.webm";
import { useGetBombeo } from "../../services/bombeo/bombre_hooks";
import LoadingComponent from "../../components/loading/loading_component";
import ButtonComponent from "../../components/button/button_component";

const PumpingPage: React.FC = () => {
  //Get url params
  const { numbers } = useParams();
  const pumps = numbers?.split(",").map(Number) || [];

  //Get current value of 'cuarto' and 'edificio' from params

  // Determine 'cuarto' value based on pumps[0] using switch-case
  let cuarto = "";
  switch (pumps[0]) {
    case 1:
      cuarto = "Chiller";
      break;
    case 3:
      cuarto = "CD";
      break;
    default:
      cuarto = "";
      break;
  }

  // Determine 'edificio' value based on pumps[0] using switch-case
  let edificio = "";
  switch (pumps[0]) {
    case 1:
      edificio = "Sec";
      break;
    case 3:
      edificio = "C";
      break;
    default:
      edificio = "";
      break;
  }
  // HOOKS

   // Replace 'cuartoValue' and 'otherArg' with the actual values you need to pass
  // Define the expected bombeo type
  interface BombeoData {
    chiller?: {
      primarios: Array<{
        Primario: number;
        data: {
          Comando: string;
          Estado: string;
        };
      }>;
      secundarios: Array<{
        Secundario: number;
        data: {
          Comando: string;
          Frecuencia: string;
          Estado: string;
        };
      }>;
    };
    bombeos?: Array<{
      Bombeo: number;
      data: {
        Comando: string;
        Frecuencia: string;
        Estado: string;
      };
    }>;
    // Add other properties if needed
  }

  const { bombeo, loadingBombeo, errorBombeo } = useGetBombeo(cuarto, edificio) as {
    bombeo: BombeoData | undefined;
    loadingBombeo: boolean;
    errorBombeo: boolean;
  };
   


     if (loadingBombeo || errorBombeo ) {
    return (
      <div className="h-screen flex items-center justify-center">
        {loadingBombeo ? (
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
    <div>
      <div className="h-screen flex flex-col">
        {/* Navbar */}
        <NavbarComponent title="Visualizacion de torres de bombas" />

        {/* Main content */}
        <div className="grid grid-cols-[1fr_auto] h-full ">
          {/* Main Content */}
          <ContainerComponent>
            <div className="flex justify-between mb-4">
              <div>
                <h1 className="text-2xl ">
                  Bombeo{" "}
                  {pumps[0] == 3 ? " terciario" : " primario y secundario"}
                </h1>
                <p className="opacity-50">
                  {pumps[0] == 3
                    ? "Edificio F"
                    : "Edificio Primario y Secundario"}
                </p>
              </div>
            </div>

            {/* ANIMATIONS SECTIONS */}
            <div
              className={`grid grid-cols-${pumps.length} gap-4 bg-gray-50/25 py-2 w-full h-90 my-6`}
            >
              {pumps.map((pump, index) => (
                <div key={index} className="flex items-center justify-center">
                  <video
                    src={pump % 2 === 1 ? PumpBlue : PumpBlack}
                    autoPlay
                    loop
                    muted
                    controls={false}
                    className="h-90"
                  ></video>
                </div>
              ))}{" "}
            </div>

            {/* 📉 Data section */}
            <section>
              {/* STATUS SECTION */}
              <h2 className="text-lg my-4">Estatus</h2>

                {/* Render primarios and secundarios if pumps[0] == 1 */}
                {pumps[0] == 1 && bombeo?.chiller && (
                <div className="grid grid-cols-2  gap-4">
                  {/* Primarios */}
                  <div>
                  <h3 className="font-semibold mb-2">Primarios</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {bombeo.chiller.primarios.map((primario: any, idx: number) => (
                    <div key={idx} className="bext-sm opacity-75 p-8 bg-gray-100 rounded-2xl mb-2">
                      <div className="font-bold">Primario {primario.Primario}</div>
                      <div>Comando: {primario.data.Comando}</div>
                      <div>Estado: {primario.data.Estado}</div>
                    </div>
                    ))}
                  </div>
                  </div>
                  {/* Secundarios */}
                  <div >
                  <h3 className="font-semibold mb-2">Secundarios</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {bombeo.chiller.secundarios.map((secundario: any, idx: number) => (
                    <div key={idx} className="ext-sm opacity-75 p-8 bg-gray-100 rounded-2xl mb-2">
                      <div className="font-bold">Secundario {secundario.Secundario}</div>
                      <div>Comando: {secundario.data.Comando}</div>
                      <div>Frecuencia: {secundario.data.Frecuencia}</div>
                      <div>Estado: {secundario.data.Estado}</div>
                    </div>
                    ))}
                  </div>
                  </div>
                </div>
                )}

                {pumps[0] == 3 && bombeo?.bombeos && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bombeo.bombeos.map((bombeoItem: any, idx: number) => (
                      <div key={idx} className="ext-sm opacity-75 p-8 bg-gray-100 rounded-2xl mb-2">
                        <div className="font-bold">Bombeo {bombeoItem.Bombeo}</div>
                        <div>Comando: {bombeoItem.data.Comando}</div>
                        <div>Frecuencia: {bombeoItem.data.Frecuencia}</div>
                        <div>Estado: {bombeoItem.data.Estado}</div>
                      </div>
                    ))}
                  </div>
                )}
            </section>
          </ContainerComponent>
        </div>
      </div>
    </div>
  );
};

export default PumpingPage;
