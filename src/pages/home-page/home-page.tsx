import React from 'react';
import ContainerComponent from '../../components/container/container_component';
import NavbarComponent from '../../components/navbar/navbar-component';
import all_buildings from '../../assets/images/all_buildings.png';

import './home-styles.css';

const HomePage: React.FC = () => {
    return (
        <>
        <NavbarComponent />
        <ContainerComponent>
            <h1 className='text-5xl'>Bienvenido</h1>
            <p className='opacity-50'>Elige el edificio al que deseas acceder</p>
            <div className='flex justify-center my-8'>
                <img src={all_buildings} className='buildings'/>
            </div>
        </ContainerComponent>
        </>
    );
};

export default HomePage;
