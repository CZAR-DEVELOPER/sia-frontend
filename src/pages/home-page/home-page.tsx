import React from "react";
//COMPONENTS
import ContainerComponent from "../../components/container/container_component";
import NavbarComponent from "../../components/navbar/navbar-component";
import MouseFollowerComponent from "../../components/mouse-follower/mouse-follower-component";
import Sidebar from "../../components/sidebar/sidebar-component";
//STYLES
import "./home-styles.css";
//IMAGES
import allBuildings from "../../assets/images/all_buildings.png";
//LIBRARIES
import ImageMapper, { MapArea } from "react-img-mapper";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const name = "my-map";
  const [parentWidth, setParentWidth] = React.useState(100);

  //HOOKS

  const [sidebarController, setSidebarController] = React.useState({id:"", isOpen: false, title: '', floors: [{name: "Piso 1", id: "1", isFloor: true, customUrl: ""}], closeButton: false});
  const [mouseFollowerController, setMouseFollowerController] = React.useState({isVisible: false, label: ''});

  // GET JSON FROM BELOW URL AS AN EXAMPLE
  const areas = [
    
    {
      id: "B",
      label:"Edificio B",
      floors: [
        {name: "Piso 1", id: "1", isFloor: true, customUrl: ''},
        {name: "Piso 2", id: "2", isFloor: true, customUrl: ''},
        {name: "Piso 3", id: "3", isFloor: true, customUrl: ''},
        {name: "Piso 4", id: "4", isFloor: true, customUrl: ''},
        {name: "Bombeo", id: "Bombeo", isFloor: false, customUrl: ''},
      ],
      shape: "poly",
      fillColor: "#ffffff40",
      strokeColor: "white",
      coords: [
        597.5, 364.35, 860.29, 280.21, 962.46, 378.77, 950.44, 426.85, 976.88,
        454.5, 970.77, 528.27, 776.15, 619.16, 706.95, 533.52, 675.77, 538.01,
        675.12, 440.1, 597.5, 364.35,
      ],
      polygon: [
        [597.5, 364.35],
        [860.29, 280.21],
        [962.46, 378.77],
        [950.44, 426.85],
        [976.88, 454.5],
        [970.77, 528.27],
        [776.15, 619.16],
        [706.95, 533.52],
        [675.77, 538.01],
        [675.12, 440.1],
        [597.5, 364.35],
      ],
     
    },
    {
      id: "F",
      label:"Edificio F",
      floors: [
        {name: "Bombeo", id: "Bombeo", isFloor: false, customUrl: ''},
        {name: "Chillers", id: "Chillers", isFloor: false,  customUrl: 'chillers'},
        {name: "Torres de enfriamiento", id: "Torres de enfriamiento",  isFloor: false,  customUrl: 'cooling-towers'},
      ],
      shape: "poly",
      name: "st1",
      fillColor: "#ffffff80",
      strokeColor: "white",
      coords: [
        593.38, 46.5, 593.08, 30.2, 705.21, 4.24, 787.66, 74.07, 650.48, 109.51,
        623.79, 77.69, 620.71, 57.15, 604.15, 43.99, 593.38, 46.5,
      ],
      polygon: [
        [593.38, 46.5],
        [593.08, 30.2],
        [705.21, 4.24],
        [787.66, 74.07],
        [650.48, 109.51],
        [623.79, 77.69],
        [620.71, 57.15],
        [604.15, 43.99],
        [593.38, 46.5],
      ],
      prefillColor: "red",
    },
  ];

  const handleAreaClick = (area: MapArea) => {
    console.log(area);

    //Fetch section Data
    const selectedArea = areas.find((a) => a.id === area.id);
    

    setSidebarController({id:selectedArea!.id, isOpen: true, title: selectedArea!.label, floors: selectedArea!.floors, closeButton: true});
  };

  const updateLabelState = (area: MapArea, isVisible:boolean) => {
    //Fetch section Data
    const selectedArea = areas.find((a) => a.id === area.id);
    
    setMouseFollowerController({isVisible: isVisible, label: selectedArea!.label});

  };

  return (
    <div className="flex flex-col h-screen">
      <NavbarComponent title="Edificios" goBackButton={false} />
      <ContainerComponent className="grow flex flex-col">
        <section>
          <h1 className="text-4xl">Corporativo Televisa Santa fé</h1>
          <p className="opacity-50">
            Selecciona el edificio al que deseas acceder
          </p>
        </section>

        {/* IMAGE MAP SECTION*/}

        <section className="grow flex justify-center">
          <div
            className="w-150 xl:w-150 2xl:w-200  self-center pb-10"
            ref={(el) => {
              if (el) {
                //Set parent width
                setParentWidth(el.clientWidth);
              }
            }}
          >
            <ImageMapper
              src={allBuildings}
              name={name}
              areas={areas}
              ref={null}
              onClick={handleAreaClick}
              onMouseEnter={(area) => updateLabelState(area, true)}
              onMouseLeave={(area) => updateLabelState(area, false)}
              responsive={true}
              parentWidth={parentWidth}
              natural={true}
              imgProps={{draggable:false}}
            />
          </div>
        </section>

        <MouseFollowerComponent
          isVisible={mouseFollowerController.isVisible}
          label={mouseFollowerController.label}
        />
      </ContainerComponent>

      <Sidebar
        isOpen={sidebarController.isOpen}
        title={sidebarController.title}
        closeButton={true}
        onCloseButton={() =>
          setSidebarController({id:"", isOpen: false, title: "", floors:[], closeButton: false })
        }
      >
      
        <p className="opacity-75 mb-4 ">Selecciona un area</p>

        {sidebarController.floors.map((floor) => (
          <Link
            to={ floor.isFloor ? `/floor?building=${sidebarController.id}&level=${floor.id}`: floor.customUrl}
            key={floor.id}
            className="btn btn-primary cursor-pointer flex flex-row items-center mb-2 hover:opacity-50"
            onClick={() => console.log(`Piso ${floor}`)}
          >
            <div className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full">
              <p className="text-md ">{floor.name[0]}</p>
            </div>
            <p className="px-2">{floor.name}</p>
          </Link>
        ))}
      </Sidebar>
    </div>
  );
};

export default HomePage;
