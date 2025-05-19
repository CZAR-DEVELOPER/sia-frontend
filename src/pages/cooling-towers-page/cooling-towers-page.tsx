import React from "react";
import NavbarComponent from "../../components/navbar/navbar-component";
import ContainerComponent from "../../components/container/container_component";

const CoolingTowersPage: React.FC = () => {
  const [coolingTowersState, setCoolingTowersState] = React.useState([
    {
      value: 0,
      label: "Temp. de retorno condensados",
      unit: "°C",
    },
    {
      value: 0,
      label: "Temp. exterior",
      unit: "°C",
    },
  ]);

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <NavbarComponent title="Visualizacion de torres de enfriamiento" />

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
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4"></section>

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
                    <span className="text-xl ">{status.value}</span>
                    <span className="text-sm"> {status.unit}</span>
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
