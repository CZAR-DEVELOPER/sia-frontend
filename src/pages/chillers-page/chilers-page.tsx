import React from "react";
import NavbarComponent from "../../components/navbar/navbar-component";
import ContainerComponent from "../../components/container/container_component";
import ButtonComponent from "../../components/button/button_component";
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
      <NavbarComponent title="Torre de chillers"></NavbarComponent>

      <div className="grid grid-cols-[1fr_auto] h-full ">
        {/* Main Content */}
        <ContainerComponent>
          <div className="flex justify-between mb-4">
            <div>
              <h1 className="text-2xl ">Cuarto de chillers</h1>
            </div>
          </div>

          {/* ANIMATIONS SECTIONS */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
             

              <div className="flex justify-between items-center">
                <h2 className="text-xl my-4 text-center">Chiller 1</h2>

                <ButtonComponent
                  size="sm"
                  style={chillersState.chiller_1 ? "solid" : "outline"}
                  className="flex items-center justify-center"
                  onClick={() => {
                    setChillerState({
                      ...chillersState,
                      chiller_1: !chillersState.chiller_1,
                    });
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
                    {chillersState.chiller_1 ? "Apagar" : "Encender"}
                  </span>
                </ButtonComponent>
              </div>
              <div className="bg-gray-50/25  w-full h-65 my-6 flex items-center justify-center ">
                <img
                  src={ChillerStandby}
                  alt="UMA"
                  className=" h-full object-contain"
                />
              </div>
            </div>


            <div>
             

             <div className="flex justify-between items-center">
               <h2 className="text-xl my-4 text-center">Chiller 2</h2>

               <ButtonComponent
                 size="sm"
                 style={chillersState.chiller_2 ? "solid" : "outline"}
                 className="flex items-center justify-center"
                 onClick={() => {
                   setChillerState({
                     ...chillersState,
                     chiller_2: !chillersState.chiller_2,
                   });
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
                   {chillersState.chiller_2 ? "Apagar" : "Encender"}
                 </span>
               </ButtonComponent>
             </div>
             <div className="bg-gray-50/25  w-full h-65 my-6 flex items-center justify-center ">
               <img
                 src={ChillerStandby}
                 alt="UMA"
                 className=" h-full object-contain"
               />
             </div>
           </div>

            <div>
             

             <div className="flex justify-between items-center">
               <h2 className="text-xl my-4 text-center">Chiller 3</h2>

               <ButtonComponent
                 size="sm"
                 style={chillersState.chiller_3 ? "solid" : "outline"}
                 className="flex items-center justify-center"
                 onClick={() => {
                   setChillerState({
                     ...chillersState,
                     chiller_3: !chillersState.chiller_3,
                   });
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
                   {chillersState.chiller_3 ? "Apagar" : "Encender"}
                 </span>
               </ButtonComponent>
             </div>
             <div className="bg-gray-50/25  w-full h-65 my-6 flex items-center justify-center ">
               <img
                 src={ChillerStandby}
                 alt="UMA"
                 className=" h-full object-contain"
               />
             </div>
           </div>
            
          
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
