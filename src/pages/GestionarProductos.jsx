import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Filtros from '../components/Filtros'
import { Link } from "react-router-dom";

const GestionarProductos = () => {
    return (
        <div>
            <Header/>
            <main>
        <section>
            <div className="entradaTextos">
                <div className="titulo">Gestionar productos</div>
                <div className="descripcion">Aquí encuentras los productos, los actualizas o agregas nuevos.</div>
            </div>
        </section>
        <section>    
            <ul className="toolsProducts">
                <li>
                    <div className="label">Ingresa el ID del producto:</div>
                    <Filtros/>
                </li>
                <Link to="/AgregarProductos"><button className="botonAgregar1">Agregar nuevo Producto</button></Link>
            </ul>
            <div className="productsTable">
                <table summary="Productos registrados">
                    <caption></caption>
                        <thead>
                        <tr>
                            <th scope="col">ID Producto</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Actividad</th>
                        </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Zapatos</td>
                            <td>$120.000</td>
                            <td><label className="badgeAvailable">Disponible</label></td>
                            <td><button className="editButton"><span classname="material-icons md-18">edit</span>
                            </button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maletín</td>
                            <td>$90.000</td>
                            <td><label className="badgeNotAvailable">No disponible</label></td>
                            <td>
                              <Link to='/Productos'><button className="editButton"><span className="material-icons">edit</span></button></Link>  
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        </section>
    </main>
    <Footer/>

        </div>
    )
}

export default GestionarProductos
