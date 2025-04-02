import React from "react";
// Router
import { Link, useSearchParams } from "react-router-dom";
// Components
//import NavbarComponent from "../../components/navbar/navbar-component";
//import ContainerComponent from "../../components/container/container_component";
// Maps
import mapB1 from "../../assets/maps/B1.png";
import mapB2 from "../../assets/maps/B2.png";
import mapB3 from "../../assets/maps/B3.png";
import mapB4 from "../../assets/maps/B4.png";
import ContainerComponent from "../../components/container/container_component";
import ButtonComponent from "../../components/button/button_component";
import NavbarComponent from "../../components/navbar/navbar-component";
import ImageWithTexts from "../../components/floor-maps/floor-maps-component";
//import ButtonComponent from "../../components/button/button_component";

const FloorPage: React.FC = () => {
  //Buildings list

  const buildingsList = [
    {
      name: "Edificio B",
      id: "B",
      floors: [
        { name: "Piso 1", id: "1", isFloor: true },
        { name: "Piso 2", id: "2", isFloor: true },
        { name: "Piso 3", id: "3", isFloor: true },
        { name: "Piso 4", id: "4", isFloor: true },
      ],
    },
    {
      name: "Edificio F",
      id: "F",
      floors: [
        { name: "Piso 1", id: "1", isFloor: true },
        { name: "Piso 2", id: "2", isFloor: true },
        { name: "Piso 3", id: "3", isFloor: true },
        { name: "Piso 4", id: "4", isFloor: true },
      ],
    },
  ];

  //ROUTER
  const [searchParams] = useSearchParams();
  const level = searchParams.get("level"); // Obtén el parámetro "level"
  const building = searchParams.get("building"); // Obtén el parámetro "building"

  let currentMap;

  switch (level) {
    case "1":
      currentMap = mapB1;
      break;
    case "2":
      currentMap = mapB2;
      break;
    case "3":
      currentMap = mapB3;
      break;
    case "4":
      currentMap = mapB4;
      break;
    default:
      currentMap = mapB1;
      break;
  }

  return (
    <>
      <NavbarComponent
        title={"Edificio" + building + " - " + "Piso " + level}
      ></NavbarComponent>

      <section className="mt-2 float-left bg-gray-100/50 w-75 overflow-y-auto p-4 rounded-2xl m-4">
        <div className="flex flex-row justify-between items-center">
        <ButtonComponent
          size="sm"
          style="icon"
          onClick={() => {
            window.history.back();
          }}
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
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </ButtonComponent>
        </div>

        <h1 className="text-2xl mt-4">Todos los edificios</h1>
       
        {buildingsList.map((building) => (
          <div key={building.id} className="mt-4">
            <h2 className="text-xl">{building.name}</h2>
            {building.floors.map((floor) => (
              <Link
                key={floor.id}
                to={`/floor?building=${building.id}&level=${floor.id}`}
                className="ms-2 btn btn-primary cursor-pointer flex flex-row items-center my-2 hover:opacity-50 text-md"
              >
                <div className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full">
                  <p className="text-md">{floor.id}</p>
                </div>
                <p className="ms-2">{floor.name}</p>
              </Link>
            ))}
          </div>
        ))}
        
      </section>

      <ContainerComponent className="flex justify-center grow  ">
        <div className="height-100 h-150 xl:h-150 2xl:h-200 self-center pb-10">

          <ImageWithTexts
            texts={[
              { x: 0, y: 20, label: "A" },
              { x: 30, y: 40, label: "B" },
              { x: 50, y: 60, label: "C" },
            ]}
            imageUrl={currentMap}></ImageWithTexts>
        </div>
      </ContainerComponent>
    </>
  );
};

export default FloorPage;
