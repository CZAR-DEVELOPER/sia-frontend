import React from "react";
import ButtonComponent from "../button/button_component";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface FloorSidebarProps {
  defaultVisible?: boolean;
}

const FloorSidebarComponent: React.FC<FloorSidebarProps> = ({
  defaultVisible = false,
}) => {
  // HOOKS
  const [isSidebarVisible, setIsSidebarVisible] =
    React.useState(defaultVisible);

  // Buildings list
  const buildingsList = [
    {
      name: "Edificio B",
      id: "B",
      floors: [
        { name: "Piso 1", id: "1", isFloor: true, customUrl: '' },
        { name: "Piso 2", id: "2", isFloor: true, customUrl: '' },
        { name: "Piso 3", id: "3", isFloor: true, customUrl: '' },
        { name: "Piso 4", id: "4", isFloor: true, customUrl: '' },
        { name: "Bombeo terciario B", id: "B3-B", isFloor: false, customUrl: 'pumps/3' },

      ],
    },
    {
      name: "Edificio E",
      id: "E",
      floors: [
        { name: "Piso 1", id: "1", isFloor: true, customUrl: '' },
        { name: "Piso 2", id: "2", isFloor: true, customUrl: '' },
        { name: "Piso 3", id: "3", isFloor: true, customUrl: '' },
        { name: "Piso 4", id: "4", isFloor: true, customUrl: '' },
        {
          name: "Bombeo terciario E",
          id: "B3-E",
          isFloor: false,
          customUrl: "pumps/3/E/BE",
        },

      ],
    },
    {
      name: "Edificio F",
      id: "F",
      floors: [
        { name: "Bombeo primario y secundario", id: "B1,2", isFloor: false, customUrl: 'pumps/1,2' },
        { name: "Chillers", id: "C", isFloor: false, customUrl: 'chillers' },
        { name: "Torres de enfriamiento", id: "T", isFloor: false, customUrl: 'cooling-towers' },
      ],
    },
  ];

  return (
    <>
      <AnimatePresence>
        {isSidebarVisible ? (
          <motion.section
            initial={{  opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-8 bg-gray-50/75 w-100 max-h-[calc(100vh-16px)] overflow-y-auto p-4 rounded-2xl z-50 backdrop-blur-sm"
          >
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-2xl me-4">Todos los edificios</h1>
              <ButtonComponent
                size="sm"
                style="icon"
                onClick={() => {
                  setIsSidebarVisible(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </ButtonComponent>
            </div>

            {buildingsList.map((building) => (
              <div key={building.id} className="mt-4">
                <h2 className="text-xl">{building.name}</h2>
                {building.floors.map((floor) => (
                  <Link
                    key={floor.id}
                    to={floor.isFloor ? `/floor?building=${building.id}&level=${floor.id}` : '/'+floor.customUrl}
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
          </motion.section>
        ) : (
          <ButtonComponent
            onClick={() => {
              setIsSidebarVisible(true);
            }}
            className="fixed bottom-8 left-8 flex flex-row items-center z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
              <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
            </svg>
            <span className="ms-2">Lista de pisos</span>
          </ButtonComponent>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloorSidebarComponent;
