import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filtros from '../components/Filtros'

const GestionarVentasBackend = [
    {
        idVenta: "0001",
        fecha_venta:"08/10/2021",
        fecha_pago:"8/10/2021",
        estado_venta: "Cancelada",
        idCliente:'0001',
        nombre_cliente:'Laura Rojas',
        total_venta: "$120.000",
        idVendedor: "001",
    },
    {
        idVenta: "0002",
        fecha_venta:"08/10/2021",
        fecha_pago:"8/10/2021",
        estado_venta: "Cancelada",
        idCliente:'0001',
        nombre_cliente:'Laura Rojas',
        total_venta: "$120.000",
        idVendedor: "001",
    },
    {
        idVenta: "0003",
        fecha_venta:"08/10/2021",
        fecha_pago:"8/10/2021",
        estado_venta: "Cancelada",
        idCliente:'0001',
        nombre_cliente:'Laura Rojas',
        total_venta: "$120.000",
        idVendedor: "001",
    },
    {
        idVenta: "0004",
        fecha_venta:"08/10/2021",
        fecha_pago:"8/10/2021",
        estado_venta: "Cancelada",
        idCliente:'0001',
        nombre_cliente:'Laura Rojas',
        total_venta: "$120.000",
        idVendedor: "001",
    },
]


const Ventas = () => {

    const [Ventas, setVentas] = useState([]);

    useEffect(() => {
        setVentas(GestionarVentasBackend);
    }, []);

    return (
    <div>
        <Header/> 
            <div className="textosInicioSeccion">
                <div className="tituloSeccion">
                    <span>Gestionar Ventas</span>
                    <button  className="botonCrear">Registrar Venta</button>
                </div>
                <div className="descripcionSeccion">Consulta el histórico de ventas, actualiza el estado de estas y/o edita la información que requieras. Lo único que no podrás editar es el ID de venta.
            </div>
    </div> 
        <section>
            <ul className="posicionBuscador">
                <li>
                    <div className="label">Ingresa el ID de la venta: </div>
                            <Filtros/>
                </li>
            </ul>

                    <div className="productsTable">
                        <table summary="Ventas registradas" className="usersTable">
                            <caption></caption>
                                <thead>
                                <tr>
                                    <th scope="col">ID Venta</th>
                                    <th scope="col">Fecha Venta</th>
                                    <th scope="col">Fecha Pago</th>
                                    <th scope="col">Estado Venta</th>
                                    <th scope="col">ID Cliente</th>
                                    <th scope="col">Nombre Cliente</th>
                                    <th scope="col">Valor total</th>
                                    <th scope="col">ID Vendedor</th>
                                    <th scope="col"></th>
        
                                </tr>
                            </thead>
                            <tbody>
                                        {GestionarVentasBackend.map((ventas) => {
                                        return(
                                        <tr>
                                                <td>{ventas.idVenta}</td>
                                                <td>{ventas.fecha_venta}</td>
                                                <td>{ventas.fecha_pago}</td>
                                                <td><label className={ventas.estado_venta==='Aprobado'?"badgeAvailable":"badgeNotAvailable"}>{ventas.estado_venta}</label></td>
                                                <td>{ventas.idCliente}</td>
                                                <td>{ventas.nombre_cliente}</td>
                                                <td>{ventas.total_venta}</td>
                                                <td>{ventas.idVendedor}</td>
                                                <td><button className="editButton">
                                                    <span className="material-icons">edit</span></button>
                                                </td>
                                            </tr>
                                        );
                                            })}
                            </tbody>
                        </table>   
                    </div>
                </section>  
        <Footer/> 
    </div>
    )
}

export default Ventas;
