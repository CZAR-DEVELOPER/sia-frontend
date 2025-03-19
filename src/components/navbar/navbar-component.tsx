import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent: React.FC = () => {
    return (
        <nav className="flex justify-between px-8 py-4">
            <div className="navbar-logo">
                <Link to="/">Logo</Link>
            </div>
            <div>
            <Link to="/home" className='me-2'>Inicio</Link>
            <Link to="/home" className='me-2'>Ajustes</Link>
            <Link to="/home" className='me-2'>Cerrar sesión</Link>
            
            </div>
        </nav>
    );
};

export default NavbarComponent;