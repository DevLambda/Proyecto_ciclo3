import React from 'react'
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { logout } = useAuth0();
    return (
    <div>
        <header>
            <ul className="navbar">
                <li id="logo">DevLambda</li>
                <Link to='/Ventas'><li className="botonNavbar">Gestión de ventas</li></Link>
                <Link to='/GestionarProductos'><li className="botonNavbar">Gestión de productos</li></Link>
                <Link to='/GestionarUsuarios'><li className="botonNavbar">Gestión de usuarios</li></Link>
                <button className="botonSalir" onClick={() => logout({ returnTo: window.location.origin })}>Salir</button>               
            </ul>
        </header>
    </div>
    )
}

export default Header
