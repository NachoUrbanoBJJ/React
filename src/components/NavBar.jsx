import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            <h1>Sara</h1>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;