import React from 'react'
import { Link } from "react-router-dom";

const linkStyle = {
    color:'white'
  };

const Header = () => {
    return (
    <div>
        <header>
            <ul className="navbar">
                <li id="logo">DevLambda</li>
                <Link to='/Ventas' style={linkStyle}><li className="botonNavbar">Gestión de ventas</li></Link>
                <Link to='/GestionarProductos'style={linkStyle}><li className="botonNavbar">Gestión de productos</li></Link>
                <Link to='/Usuarios' style={linkStyle}><li className="botonNavbar">Gestión de usuarios</li></Link>
                <Link to='/'><button type="submit" className="botonSalir" style={linkStyle}>Salir</button></Link>
                
            </ul>
        </header>
    </div>
    )
}

export default Header

