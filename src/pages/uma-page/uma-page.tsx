import React from "react";
import NavbarComponent from "../../components/navbar/navbar-component";
import ContainerComponent from "../../components/container/container_component";
import ButtonComponent from "../../components/button/button_component";
import AvatarComponent from "../../components/avatar/avatar_component";
import UmaStandBy from "../../assets/3d_models/uma/uma_status_standby.png";
import UmaWorking from "../../assets/3d_models/uma/uma_status_working.webm";
import {
  useGetSingleUma,
 
} from "../../services/uma/uma_hooks";
import { useSearchParams } from "react-router-dom";
import LoadingComponent from "../../components/loading/loading_component";

import LoadingGif from '../../assets/icons/loading.gif';
import { updateUmaB } from "../../services/uma/uma_service";

const UmaPage: React.FC = () => {
  //GET URL PARAMS
  const [searchParams] = useSearchParams();

  const building = searchParams.get("building"); // "B"
  const level = searchParams.get("level"); // "2"

  const [umaState, setUmaState] = React.useState({
    isPowerOn: "Arranque", // Estado de encendido/apagado
    frecuence: 18,
    aperture: 0,
  });

  // HOOK UMA
  const { uma, loading, error } = useGetSingleUma(
    building ? building : "B",
    level ? parseInt(level) : 0
  );

 

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true); // Estado para alternar la barra lateral
  const [isUpdating, setIsUpdating] = React.useState(false);

  // Fill current state with data
  React.useEffect(() => {
    if (uma.data) {
      setUmaState({
        isPowerOn: uma.data.Estado,
        frecuence: uma.data.Frecuencia,
        aperture: uma.data["Temperatura de inyección"],
      });
    }
  }, [uma.data]);

  const handleUpdateUma = async () => {
    setIsUpdating(true);
    const payload = {
      floor: level ? parseInt(level) : 0,
      Encendido: umaState.isPowerOn === "Arranque" ? 1 : 0,
      Frecuencia: umaState.frecuence,
      Apertura: umaState.aperture,
    };
    try {
      await updateUmaB(payload);
      alert("Los cambios tomarán un poco de tiempo en procesarse, se recargara automaticamente en unos segundos");
    } catch (error) {
      alert("Error al actualizar la UMA. Intente nuevamente.");
    }
    setTimeout(() => {
      window.location.reload();
    }, 35000);
  };
  

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
      <NavbarComponent title="Visualizacion de UMA"></NavbarComponent>

      <div className="grid grid-cols-[1fr_auto] h-full ">
        {/* Main Content */}
        <ContainerComponent>
          <div className="flex justify-between mb-4">
            <div>
              <h1 className="text-2xl ">
                UMA - Edificio {building}, Piso {level}{" "}
              </h1>
            </div>
            <div className="flex ">
              <ButtonComponent
                disabled={!uma.data}
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
            {uma.data.Estado == "Arranque" ? (
              <video
                src={UmaWorking}
                autoPlay
                loop
                muted
                controls={false}
                className="h-full object-fit"
              ></video>
            ) : (
              <img src={UmaStandBy} alt="UMA" className="h-full object-fit" />
            )}
          </div>

          {/* 📉 Data section */}
          <section
            className={`${
              uma.data.Estado !== "Arranque"
                ? "pointer-events-none opacity-50"
                : ""
            }`}
          >
            {/* STATUS SECTION */}
            <h2 className="text-lg my-4 ">Estatus</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
              {uma.data &&
                Object.entries(uma.data).map(([key, value]) => (
                  <div
                    key={key}
                    className="text-sm opacity-75 p-8 bg-gray-100 rounded-2xl mb-2"
                  >
                    <p className="text-sm font-semibold">{key}</p>
                    <p>
                      <span className="text-xl">{String(value)}</span>
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
            isSidebarOpen == false 
              ? "hidden"
              : ""
          }  bg-gray-100/80 p-8   backdrop-blur-md shadow-2xl rounded-2xl  sm:w-full md:w-125  h-full `}
        >
          <h2 className=" text-3xl mb-16">Controles UMA</h2>
 
          {/* 🎛️ Control de prendido o apagado */}
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
              <h3 className="small">Estado</h3>
              
            </div>
            <div>
              <div className={umaState.isPowerOn === "Error" ? "opacity-50" : ""}>
                <div className="flex items-end justify-end">
                  <span className="me-4 text-sm opacity-75">
                    {umaState.isPowerOn === "Arranque"
                      ? "Encendido"
                      : umaState.isPowerOn === "Paro"
                      ? "Apagado"
                      : "Error"}
                  </span>
                  <button
                    type="button"
                    disabled={umaState.isPowerOn === "Error"}
                    aria-pressed={umaState.isPowerOn === "Arranque"}
                    className={`relative w-20 h-10 rounded-full transition-colors duration-300
                      ${umaState.isPowerOn === "Error"
                        ? "bg-gray-100 cursor-not-allowed"
                        : umaState.isPowerOn === "Arranque"
                        ? "bg-orange-500"
                        : "bg-gray-500"
                      }`}
                    onClick={() => {
                      if (umaState.isPowerOn !== "Error") {
                        setUmaState((prevState) => ({
                          ...prevState,
                          isPowerOn: prevState.isPowerOn === "Arranque" ? "Paro" : "Arranque",
                        }));
                      }
                    }}
                  >
                    <span
                      className={`absolute top-1 left-1 transition-transform duration-300
                      w-8 h-8 rounded-full bg-white shadow
                      ${umaState.isPowerOn === "Arranque" ? "translate-x-10" : ""}
                      `}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Form to change the UMA state */}
            <section className={`${umaState.isPowerOn !== "Arranque" ? "pointer-events-none opacity-25" : "opacity-100"}`}>
            
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
                max={55}
                min={18}
                disabled={umaState.isPowerOn !== "Arranque"}
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
              className="appearance-none w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-black"
              value={umaState.frecuence}
              max={55}
              min={18}
              disabled={umaState.isPowerOn !== "Arranque"}
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
  <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
</svg>
              </AvatarComponent>
            </div>
            <div>
              <h3 className="text">Apertura de agua helada</h3>
              <p className="text-sm opacity-50">
              <input
                type="number"
                className="w-12 text-center bg-transparent border-none outline-none p-0 m-0 "
                value={umaState.aperture}
                max={100}
                min={0}
                disabled={umaState.isPowerOn !== "Arranque"}
                onChange={(e) => {
                setUmaState((prevState) => ({
                  ...prevState,
                  aperture: parseInt(e.target.value),
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
              value={umaState.aperture}
              disabled={umaState.isPowerOn !== "Arranque"}
              onChange={(e) => {
                setUmaState((prevState) => ({
                ...prevState,
                aperture: parseInt(e.target.value),
                }));
              }}
              />
            </div>
            </div>

            </section>

     

          {/* 📧 Boton enviar */}
          <div className="mt-16">
            <ButtonComponent
            disabled={umaState.isPowerOn === "Error" || isUpdating}
              className="flex justify-center items-center"
              onClick={() => {
                handleUpdateUma();
              }}
            >
                {isUpdating ? (
                  <img src={LoadingGif} alt="Cargando..." className="h-6 w-6" />
                ) : umaState.isPowerOn === "Error" ? (
                <span className="me-2">Error en el estado, revise la conexion</span>
                ) : umaState.isPowerOn !== "Arranque" ? (
                <span className="me-2">Apagar UMA</span>
                ) : (
                <span className="me-2">Actualizar estado</span>
                )}

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
            
            

            <p className="text-sm text-gray-500 mt-2 text-center">
              El status de la UMA se actualizará en unos minutos despues de enviada la solicitud. Si no ves cambios espera unos minutos y recarga la página
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UmaPage;
