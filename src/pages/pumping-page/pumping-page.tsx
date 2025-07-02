// Simple React pumping page component
import React from "react";
import NavbarComponent from "../../components/navbar/navbar-component";
import { useParams } from "react-router";
import ContainerComponent from "../../components/container/container_component";
import PumpBlack from "../../assets/3d_models/pumps/pump_black.webm";
import PumpBlue from "../../assets/3d_models/pumps/pump_blue.webm";
import { useGetBombeo1, useGetBombeo3 } from "../../services/bombeo/bombre_hooks";
import LoadingComponent from "../../components/loading/loading_component";
import ButtonComponent from "../../components/button/button_component";

const PumpingPage: React.FC = () => {
  //Get url params
  const { numbers } = useParams();
  const pumps = numbers?.split(",").map(Number) || [];

  // HOOKS

   const { bombeo1, loadingBombeo1, errorBombeo1 } = useGetBombeo1();
   const { bombeo3, loadingBombeo3, errorBombeo3} = useGetBombeo3();


     if (loadingBombeo1 || loadingBombeo1 || loadingBombeo3 || errorBombeo3) {
    return (
      <div className="h-screen flex items-center justify-center">
        {loadingBombeo1 || loadingBombeo3 ? (
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

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {pumps[0] == 3 &&
                  bombeo3 &&
                  bombeo3.map((item: any) => (
                    <div key={item.Bombeo} className="bg-white rounded shadow p-4">
                      <h3 className="font-semibold mb-2">Bombeo {item.Bombeo}</h3>
                      <div className="text-sm">
                        <div>Comando: {item.data.Comando}</div>
                        <div>Frecuencia: {item.data.Frecuencia}</div>
                        <div>Estado: {item.data.Estado}</div>
                      </div>
                    </div>
                  ))
                }

                {pumps[0] == 1 && bombeo1 && (
                  <>
                    {/* Secundario */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {bombeo1
                        .filter((item: any) => item.Secundario)
                        .map((item: any) => (
                          <div key={`secundario-${item.Secundario}`} className="bg-white rounded shadow p-4">
                            <h3 className="font-semibold mb-2">Secundario {item.Secundario}</h3>
                            <div className="text-sm">
                              <div>Comando: {item.data.Comando}</div>
                              <div>Frecuencia: {item.data.Frecuencia}</div>
                              <div>Estado: {item.data.Estado}</div>
                            </div>
                          </div>
                        ))}
                    </div>
                    {/* Primario */}
                    <div className="lg:col-span-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {bombeo1
                        .filter((item: any) => item.Primario)
                        .map((item: any) => (
                          <div key={`primario-${item.Primario}`} className="bg-white rounded shadow p-4">
                            <h3 className="font-semibold mb-2">Primario {item.Primario}</h3>
                            <div className="text-sm">
                              <div>Comando: {item.data.Comando}</div>
                              <div>Estado: {item.data.Estado}</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </>
                )}
              </div>
            </section>
          </ContainerComponent>
        </div>
      </div>
    </div>
  );
};

export default PumpingPage;
