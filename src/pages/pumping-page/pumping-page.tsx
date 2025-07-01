// Simple React pumping page component
import React from "react";
import NavbarComponent from "../../components/navbar/navbar-component";
import { useParams } from "react-router";
import ContainerComponent from "../../components/container/container_component";
import PumpBlack from "../../assets/3d_models/pumps/pump_black.webm";
import PumpBlue from "../../assets/3d_models/pumps/pump_blue.webm";

const PumpingPage: React.FC = () => {
  //Get url params
  const { numbers } = useParams();
  const pumps = numbers?.split(",").map(Number) || [];

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

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 "></div>
            </section>
          </ContainerComponent>
        </div>
      </div>
    </div>
  );
};

export default PumpingPage;
