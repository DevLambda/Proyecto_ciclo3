import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div>
        <header>
            <ul className="navbar">
                <li id="logo">DevLambda</li>
                <Link to='/Ventas'><li className="botonNavbar">Gestión de ventas</li></Link>
                <Link to='/GestionarProductos'><li className="botonNavbar">Gestión de productos</li></Link>
                <Link to='/GestionarUsuarios'><li className="botonNavbar">Gestión de usuarios</li></Link>
                <Link to='/'><button className="botonSalir">Salir</button></Link>                
            </ul>
        </header>
    </div>
    )
}

export default Header
