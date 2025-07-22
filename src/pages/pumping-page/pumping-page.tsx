// Simple React pumping page component
import React, { useState } from "react";
import NavbarComponent from "../../components/navbar/navbar-component";
import { useParams } from "react-router-dom";
import ContainerComponent from "../../components/container/container_component";
import PumpBlack from "../../assets/3d_models/pumps/pump_black.webm";
import PumpBlue from "../../assets/3d_models/pumps/pump_blue.webm";
import { useGetBombeo } from "../../services/bombeo/bombre_hooks";
import LoadingComponent from "../../components/loading/loading_component";
import ButtonComponent from "../../components/button/button_component";
import {
  BombPriPayload,
  BombSecPayload,
  BombTerPayload,
  postBombPri,
  postBombTer,
} from "../../services/bombeo/bombeo_service";
import AvatarComponent from "../../components/avatar/avatar_component";

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

  let [isPostingData, setisPostingData] = useState<boolean>(false);

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

  const { bombeo, loadingBombeo, errorBombeo } = useGetBombeo(
    cuarto,
    edificio
  ) as {
    bombeo: BombeoData | undefined;
    loadingBombeo: boolean;
    errorBombeo: boolean;
  };

  // State for controllers
  const [primario1State, setPrimario1State] = useState<BombPriPayload | null>(
    null
  );
  const [primario2State, setPrimario2State] = useState<BombPriPayload | null>(
    null
  );
  const [primario3State, setPrimario3State] = useState<BombPriPayload | null>(
    null
  );
  const [secundario1State, setSecundario1State] =
    useState<BombSecPayload | null>(null);
  const [secundario2State, setSecundario2State] =
    useState<BombSecPayload | null>(null);
  const [secundario3State, setSecundario3State] =
    useState<BombSecPayload | null>(null);
  const [terciario1State, setTerciario1State] = useState<BombTerPayload | null>(
    null
  );
  const [terciario2State, setTerciario2State] = useState<BombTerPayload | null>(
    null
  );
  

  // // Fill current state with data
  React.useEffect(() => {
    if (bombeo) {
      if (pumps[0] == 1) {
        // FullFill primarios and secundarios states

        // Primarios
        setPrimario1State({
          num: 1, // Pump number (1)
          Comando:
            bombeo.chiller?.primarios[0]?.data.Comando === "Arranque" ? 1 : 0,
        });
        setPrimario2State({
          num: 2, // Pump number (2)
          Comando:
            bombeo.chiller?.primarios[1]?.data.Comando === "Arranque" ? 1 : 0,
        });
        setPrimario3State({
          num: 3, // Pump number (3)
          Comando:
            bombeo.chiller?.primarios[2]?.data.Comando === "Arranque" ? 1 : 0,
        });

        // Secundarios
        setSecundario1State({
          num: 1, // Pump number (1)
          Comando:
            bombeo.chiller?.secundarios[0]?.data.Comando === "Arranque" ? 1 : 0,
          Frecuencia:
            isNaN(Number(bombeo.chiller?.secundarios[0]?.data.Frecuencia))
              ? 0
              : Number(bombeo.chiller?.secundarios[0]?.data.Frecuencia),
        });
        setSecundario2State({
          num: 2, // Pump number (2)
          Comando:
            bombeo.chiller?.secundarios[1]?.data.Comando === "Arranque" ? 1 : 0,
          Frecuencia:
            isNaN(Number(bombeo.chiller?.secundarios[1]?.data.Frecuencia))
              ? 0
              : Number(bombeo.chiller?.secundarios[1]?.data.Frecuencia),
        });
        setSecundario3State({
          num: 3, // Pump number (3)
          Comando:
            bombeo.chiller?.secundarios[2]?.data.Comando === "Arranque" ? 1 : 0,
          Frecuencia:
            isNaN(Number(bombeo.chiller?.secundarios[2]?.data.Frecuencia))
              ? 0
              : Number(bombeo.chiller?.secundarios[2]?.data.Frecuencia),
        });
      }

      if (pumps[0] == 3) {
        
        setTerciario1State({
          Cuarto: "CD",
          Edificio: "C",
          Bombeo: "1",
          Comando: bombeo.bombeos?.[0]?.data.Comando === "Arranque" ? 1 : 0,
          Frecuencia: isNaN(Number(bombeo.bombeos?.[0]?.data.Frecuencia))
            ? 0
            : Number(bombeo.bombeos?.[0]?.data.Frecuencia),
        });

        setTerciario2State({
          Cuarto: "CD",
          Edificio: "C",
          Bombeo: "2",
          Comando: bombeo.bombeos?.[1]?.data.Comando === "Arranque" ? 1 : 0,
          Frecuencia: isNaN(Number(bombeo.bombeos?.[1]?.data.Frecuencia))
            ? 0
            : Number(bombeo.bombeos?.[1]?.data.Frecuencia),
        });


      }
    }
  }, [bombeo]);

  if (loadingBombeo || errorBombeo) {
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
                    <h3 className="font-semibold font-bold mb-2">Primarios</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {bombeo.chiller.primarios.map(
                        (primario: any, idx: number) => (
                          <div
                            key={idx}
                            className="bext-sm opacity-75 p-8 bg-gray-100 rounded-2xl mb-2"
                          >
                            <div className="font-bold">
                              Primario {primario.Primario}
                            </div>
                            <div>Comando: {primario.data.Comando}</div>
                            <div>Estado: {primario.data.Estado}</div>
                          </div>
                        )
                      )}
                    </div>

                    {/* 🎛️  Control de encendido/apagado y frecuencia Primarios */}
                    {[primario1State, primario2State, primario3State].map((primarioState, idx) => (
                      <div
                      key={idx}
                      className="grid grid-cols-[auto_1fr] items-center my-4 gap-4 w-full"
                      >
                      <div className="self-start">
                        <AvatarComponent variant="light" size="large">
                        {idx +1}
                        </AvatarComponent>
                      </div>
                      <div>
                        {/* Switch row */}
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="text font-bold">Primario {idx + 1}</h3>
                            <p className="text-sm opacity-50">
                            {primarioState?.Comando === 1 ? "Encendido" : "Apagado"}
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer" style={{ opacity: isPostingData ? 0.5 : 1 }}>
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            disabled={isPostingData}
                            checked={primarioState?.Comando === 1}
                            onChange={() => {
                            if (idx === 0) {
                              setPrimario1State(prev =>
                              prev
                                ? { ...prev, Comando: prev.Comando === 1 ? 0 : 1 }
                                : null
                              );
                            } else if (idx === 1) {
                              setPrimario2State(prev =>
                              prev
                                ? { ...prev, Comando: prev.Comando === 1 ? 0 : 1 }
                                : null
                              );
                            } else if (idx === 2) {
                              setPrimario3State(prev =>
                              prev
                                ? { ...prev, Comando: prev.Comando === 1 ? 0 : 1 }
                                : null
                              );
                            }
                            }}
                          />
                          <div className={`w-11 h-6 rounded-full transition-all relative ${primarioState?.Comando === 1 ? "bg-orange-400" : "bg-gray-200"}`}>
                            <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${primarioState?.Comando === 1 ? "translate-x-5 bg-blue-600" : ""}`}></span>
                          </div>
                          </label>
                        </div>
                        {/* No frequency for primario, only switch */}
                        <div className="flex justify-end mt-1">
                          <ButtonComponent
                            size="sm"
                            disabled={isPostingData}
                            onClick={async () => {
                              setisPostingData(true);
                              if (idx === 0) {
                                await postBombPri(primario1State!);
                              } else if (idx === 1) {
                                await postBombPri(primario2State!);
                              } else if (idx === 2) {
                                await postBombPri(primario3State!);
                              }
                              setTimeout(() => {
                                setisPostingData(false);
                                alert("Actualizacion de estado solicitada exitosamente, espere unos minutos para ver los cambios (Si no se actualiza, refresque la pagina)");
                                window.location.reload();
                              }, 30000);
                            }}
                          >
                            {isPostingData ? "Enviado..." : "Actualizar estado →"}
                          </ButtonComponent>
                        </div>
                      </div>
                    </div>
                    ))}
                   
                  </div>
                  {/* Secundarios */}
                  <div>
                    <h3 className="font-semibold mb-2">Secundarios</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {bombeo.chiller.secundarios.map(
                        (secundario: any, idx: number) => (
                          <div
                            key={idx}
                            className="ext-sm opacity-75 p-8 bg-gray-100 rounded-2xl mb-2"
                          >
                            <div className="font-bold">
                              Secundario {secundario.Secundario}
                            </div>
                            <div>Comando: {secundario.data.Comando}</div>
                            <div>Frecuencia: {secundario.data.Frecuencia}</div>
                            <div>Estado: {secundario.data.Estado}</div>
                          </div>
                        )
                      )}
                    </div>

                    {/* 🎛️  Control de encendido/apagado y frecuencia Secundarios */}
                    {[secundario1State, secundario2State, secundario3State].map((secundarioState, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-[auto_1fr] items-center my-4 gap-4 w-full"
                      >
                        <div className="self-start">
                          <AvatarComponent variant="light" size="large">
                          {idx + 1}
                          </AvatarComponent>
                        </div>
                        <div>
                          {/* Switch row */}
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h3 className="text font-bold">Secundario {idx + 1}</h3>
                              <p className="text-sm opacity-50">
                              {secundarioState?.Comando === 1 ? "Encendido" : "Apagado"}
                              </p>
                            </div>
                            <label className="inline-flex items-center cursor-pointer" style={{ opacity: isPostingData ? 0.5 : 1 }}>
                              <input
                              type="checkbox"
                              className="sr-only peer"
                              disabled={isPostingData}
                              checked={secundarioState?.Comando === 1}
                              onChange={() => {
                                if (idx === 0) {
                                  setSecundario1State(prev =>
                                    prev
                                      ? { ...prev, Comando: prev.Comando === 1 ? 0 : 1 }
                                      : null
                                  );
                                } else if (idx === 1) {
                                  setSecundario2State(prev =>
                                    prev
                                      ? { ...prev, Comando: prev.Comando === 1 ? 0 : 1 }
                                      : null
                                  );
                                } else if (idx === 2) {
                                  setSecundario3State(prev =>
                                    prev
                                      ? { ...prev, Comando: prev.Comando === 1 ? 0 : 1 }
                                      : null
                                  );
                                }
                              }}
                              />
                              <div className={`w-11 h-6 rounded-full transition-all relative ${secundarioState?.Comando === 1 ? "bg-orange-400" : "bg-gray-200"}`}>
                                <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${secundarioState?.Comando === 1 ? "translate-x-5 bg-blue-600" : ""}`}></span>
                              </div>
                            </label>
                          </div>
                          {/* Slider row */}
                          <div className="flex flex-col gap-1 w-full">
                            <div>
                              <h3 className="small">Frecuencia</h3>
                              <p className="text-sm opacity-50 flex items-center gap-1">
                                <input
                                  type="number"
                                  className="w-12 text-center bg-transparent border-none outline-none p-0 m-0"
                                  value={secundarioState?.Frecuencia ?? 0}
                                  max={55}
                                  min={18}
                                  disabled={secundarioState?.Comando !== 1 || isPostingData}
                                  onChange={e => {
                                    const value = Number(e.target.value);
                                    if (idx === 0) {
                                      setSecundario1State(prev => prev ? { ...prev, Frecuencia: value } : null);
                                    } else if (idx === 1) {
                                      setSecundario2State(prev => prev ? { ...prev, Frecuencia: value } : null);
                                    } else if (idx === 2) {
                                      setSecundario3State(prev => prev ? { ...prev, Frecuencia: value } : null);
                                    }
                                  }}
                                />
                                Hz
                              </p>
                            </div>
                            <div>
                              <input
                                type="range"
                                className="appearance-none w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-black"
                                value={secundarioState?.Frecuencia ?? 0}
                                max={55}
                                min={18}
                                disabled={secundarioState?.Comando !== 1 || isPostingData}
                                onChange={e => {
                                  const value = Number(e.target.value);
                                  if (idx === 0) {
                                    setSecundario1State(prev => prev ? { ...prev, Frecuencia: value } : null);
                                  } else if (idx === 1) {
                                    setSecundario2State(prev => prev ? { ...prev, Frecuencia: value } : null);
                                  } else if (idx === 2) {
                                    setSecundario3State(prev => prev ? { ...prev, Frecuencia: value } : null);
                                  }
                                }}
                              />
                            </div>
                            <div className="flex justify-end mt-1">
                              <ButtonComponent
                                size="sm"
                                disabled={isPostingData}
                                onClick={async () => {
                                  setisPostingData(true);
                                  if (idx === 0) {
                                    await postBombPri(secundario1State!);
                                  } else if (idx === 1) {
                                    await postBombPri(secundario2State!);
                                  } else if (idx === 2) {
                                    await postBombPri(secundario3State!);
                                  }
                                  setTimeout(() => {
                                    setisPostingData(false);
                                    alert("Actualizacion de estado solicitada exitosamente, espere unos minutos para ver los cambios (Si no se actualiza, refresque la pagina)");
                                    window.location.reload();
                                  }, 30000);
                                }}
                              >
                                {isPostingData ? "Enviado..." : "Actualizar estado →"}
                              </ButtonComponent>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {pumps[0] == 3 && bombeo?.bombeos && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bombeo.bombeos.map((bombeoItem: any, idx: number) => (
                    <div
                      key={idx}
                      className="ext-sm opacity-75 p-8 bg-gray-100 rounded-2xl mb-2"
                    >
                      <div className="font-bold">
                        Bombeo {bombeoItem.Bombeo}
                      </div>
                      <div>Comando: {bombeoItem.data.Comando}</div>
                      <div>Frecuencia: {bombeoItem.data.Frecuencia}</div>
                      <div>Estado: {bombeoItem.data.Estado}</div>
                    </div>
                  ))}

                  {[terciario1State, terciario2State, ].map((terciarioState, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-[auto_1fr] items-center my-4 gap-4 w-full"
                    >
                      <div className="self-start">
                        <AvatarComponent variant="light" size="large">
                          {idx + 1}
                        </AvatarComponent>
                      </div>
                      <div>
                        {/* Switch row */}
                        <div className="flex items-center justify-between mb-2">
                          <div>
                          <h3 className="text font-bold">Terciario {idx + 1}</h3>
                          <p className="text-sm opacity-50">
                            {terciarioState?.Comando === 1 ? "Encendido" : "Apagado"}
                          </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            disabled={isPostingData}
                            checked={terciarioState?.Comando === 1}
                            onChange={() => {
                            if (idx === 0) {
                              setTerciario1State(prev =>
                              prev
                                ? { ...prev, Comando: prev.Comando === 1 ? 0 : 1 }
                                : null
                              );
                            } else if (idx === 1) {
                              setTerciario2State(prev =>
                              prev
                                ? { ...prev, Comando: prev.Comando === 1 ? 0 : 1 }
                                : null
                              );
                            }
                            }}
                          />
                            <div
                            className={`w-11 h-6 rounded-full transition-all relative ${
                              terciarioState?.Comando === 1
                              ? "bg-orange-400"
                              : "bg-gray-200"
                            }`}
                            >
                            <span
                              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                              terciarioState?.Comando === 1
                                ? "translate-x-5 bg-blue-600"
                                : ""
                              }`}
                            ></span>
                          </div>
                          </label>
                        </div>
                        {/* Slider row */}
                        <div className="flex flex-col gap-1 w-full">
                          <div>
                          <h3 className="small">Frecuencia</h3>
                          <p className="text-sm opacity-50 flex items-center gap-1">
                            <input
                            type="number"
                            className="w-12 text-center bg-transparent border-none outline-none p-0 m-0"
                            value={terciarioState?.Frecuencia ?? 0}
                            max={55}
                            min={18}
                            disabled={terciarioState?.Comando !== 1 || isPostingData}
                            onChange={e => {
                              const value = Number(e.target.value);
                              if (idx === 0) {
                              setTerciario1State(prev =>
                                prev ? { ...prev, Frecuencia: value } : null
                              );
                              } else if (idx === 1) {
                              setTerciario2State(prev =>
                                prev ? { ...prev, Frecuencia: value } : null
                              );
                              }
                            }}
                            />
                            Hz
                          </p>
                          </div>
                          <div>
                          <input
                            type="range"
                            className="appearance-none w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-black"
                            value={terciarioState?.Frecuencia ?? 0}
                            max={55}
                            min={18}
                            disabled={terciarioState?.Comando !== 1 || isPostingData}
                            onChange={e => {
                            const value = Number(e.target.value);
                            if (idx === 0) {
                              setTerciario1State(prev =>
                              prev ? { ...prev, Frecuencia: value } : null
                              );
                            } else if (idx === 1) {
                              setTerciario2State(prev =>
                              prev ? { ...prev, Frecuencia: value } : null
                              );
                            }
                            }}
                          />
                          </div>
                          
                            <div className="flex justify-end mt-1">
                            <ButtonComponent
                              size="sm"
                              disabled={isPostingData}
                              onClick={async () => {
                              setisPostingData(true);
                              if (idx === 0) {
                                await postBombTer(terciario1State!);
                              } else if (idx === 1) {
                                await postBombTer(terciario2State!);
                              }
                              // Wait 20 seconds before showing alert
                              setTimeout(() => {
                                setisPostingData(false);
                                alert("Actualizacion de estado solicitada exitosamente, espere unos minutos para ver los cambios (Si no se actualiza, refresque la pagina)");
                                window.location.reload();
                              }, 30000);
                              }}
                            >
                              {isPostingData ? "Enviado..." : "Actualizar estado →"}
                            </ButtonComponent>
                            
                          </div>
                        </div>
                      </div>
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
