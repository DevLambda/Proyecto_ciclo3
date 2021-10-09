import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Filtros from '../components/Filtros'

const GestionarProductosBackend = [
    {
        idProducto: "0001",
        descripcion: "Bonsai Komono",
        valor: "$120.000",
        estado: "Disponible",
    },
    {
        idProducto: "0002",
        descripcion: "Bonsai Shito",
        valor: "$220.000",
        estado: "No Disponible",
    },
    {
        idProducto: "0003",
        descripcion: "Bonsai Kotate",
        valor: "$150.000",
        estado: "",
    },
    {
        idProducto: "0004",
        descripcion: "Bonsai Shohin",
        valor: "$110.000",
        estado: "",
    },
    {
        idProducto: "0005",
        descripcion: "Bonsai 1",
        valor: "$150.000",
        estado: "",
    },
    {
        idProducto: "0006",
        descripcion: "Bonsai 2",
        valor: "$120.000",
        estado: "",
    },
]

const GestionarProductos = () => {

    const [GestionarProductos, setGestionarProductos] = useState([]);
    const [mostrarTablaProductos, setMostrarTablaProductos] = useState(true);
    const [textoBoton,setTextoBoton] = useState('Crear nuevo Producto');
    const [estado, setEstado] = useState('Disponible');
    //const [colorBoton,setColorBoton] = useState();


    useEffect(() => {
        setGestionarProductos(GestionarProductosBackend);
    }, []);

    useEffect(() => {
        if (mostrarTablaProductos) {
            setTextoBoton('Crear nuevo Producto');
        } else {   
            setTextoBoton('Volver a Gestionar Productos');
            //setColorBoton();
        }
    }, [mostrarTablaProductos]);

        
    return (
        <div>
            <button
            onClick={() => {
                setMostrarTablaProductos(!mostrarTablaProductos)
            }}
            className="botonCrear">                
            {textoBoton}
            </button>
            {mostrarTablaProductos ? (<TablaProductos listaProductos={GestionarProductos}/>
            ) : ( <RegistrarProductos
                setMostrarTablaProductos={setMostrarTablaProductos}
                listaProductos={GestionarProductos}
                setGestionarProductos={setGestionarProductos}
            />
            )}
            <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
    )
}    
/*------------ Tabla Productos --------------*/

const TablaProductos = ({ listaProductos }) => {
    useEffect(() => {
        console.log("listado de productos en la tabla",listaProductos)
    }, [listaProductos]);
    
    return (
        <div>
            <Header/>
            <div className="textosInicioSeccion">
            <div className="tituloSeccion">Gestionar productos</div>
            <div className="descripcionSeccion">Aquí encuentras los productos, los actualizas o agregas nuevos.</div>
        </div>   
            <section>    
                <ul className="posicionBuscador"> 
                    <li>
                        <div className="label">Ingresa el ID del producto:</div>
                        <Filtros/>
                    </li>
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
                            </tr>yarn
                            </thead>
                        <tbody>
                            {listaProductos.map((producto, estaDisponible) => {
                                return (
                                    <tr>
                                        <td>{producto.idProducto}</td>
                                        <td>{producto.descripcion}</td>
                                        <td>{producto.valor}</td>
                                        <td><label className={producto.estado==='Disponible' ? 'badgeAvailable':'badgeNotAvailable'}>{producto.estado}</label></td>
                                        <td><button className="editButton">
                                            <span className="material-icons">edit</span>
                                            </button>
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
    );
};

/*------------ Crear Nuevos Productos --------------*/

const RegistrarProductos = ({ setMostrarTablaProductos, listaProductos, setGestionarProductos }) => {
    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoProducto = {};
        fd.forEach((value, key) => {
            nuevoProducto[key] = value;
        });

        setMostrarTablaProductos(true);
        setGestionarProductos([...listaProductos, nuevoProducto]);
        toast.success('Producto creado con éxito');
    };
    
    return(
        <div>
            <Header/>
            <div className="textosInicioSeccion">
            <div className="tituloSeccion">Agregar nuevo producto</div>
            <div className="descripcionSeccion">Ingresa los datos del nuevo producto.</div>
        </div>
            <div className="contenedorFormulario">
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>

                <label htmlFor="id">ID de Producto
                <input type="text" name="idProducto"
                placeholder="Ejemplo: 0001" required/>
                </label>
            
                <label htmlFor="descripcionProducto">Descripción del producto
                <select name="descripcion" required defaultValue={0} >
                    <option disabled value={0}> Selecciona un producto</option>
                        <option>Bonsai Chumono</option>
                        <option>Bonsai Komono</option>
                        <option>Bonsai Kotate</option>
                        <option>Bonsai Omono</option>
                        <option>Bonsai Shito</option>
                        <option>Bonsai Shohin</option>
                </select>
                </label>

                <label htmlFor="valorProducto">Valor producto
                <input type="text" name="valor"
                placeholder="Ingresa el valor en pesos..." required/>
                </label>
            
                <label htmlFor="estadoProducto">Estado del producto
                    <select name="estado" required defaultValue={0} >
                        <option disabled value={0}> Selecciona un estado</option>
                        <option>Disponible</option>
                        <option>No disponible</option>
                    </select>
                </label>
                <button type="submit" className="botonGuardarProducto"> Guardar nuevo producto
                </button>
            </form>
            </div>
        <Footer/>
    </div>
    );
};

export default GestionarProductos;
