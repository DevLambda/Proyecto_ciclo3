import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Filtros from '../components/Filtros'
import { nanoid } from 'nanoid';


const GestionarProductosBackend = [
    {
        idProducto: "0001",
        descripcion: "Bonsai Komono",
        valor: "$120.000",
        estado: "No Disponible",
    },
    {
        idProducto: "0002",
        descripcion: "Bonsai Shito",
        valor: "$220.000",
        estado: "Disponible",
    },
    {
        idProducto: "0003",
        descripcion: "Bonsai Kotate",
        valor: "$150.000",
        estado: "Disponible",
    },
    {
        idProducto: "0004",
        descripcion: "Bonsai Shohin",
        valor: "$110.000",
        estado: "Disponible",
    },
]

const GestionarProductos = () => {

    const [GestionarProductos, setGestionarProductos] = useState([]);
    const [mostrarTablaProductos, setMostrarTablaProductos] = useState(true);
    const [textoBoton,setTextoBoton] = useState('Crear nuevo Producto');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    //const [colorBoton,setColorBoton] = useState();

    /**** PENDIENTE DE AJUSTE ¿SE OBTIENE productos O GestionarProductos
     * 
    useEffect(() => {
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
          obtenerGestionarProductos(setGestionarProductos, setEjecutarConsulta);
        }
      }, [ejecutarConsulta]);
      */

    //obtener lista desde el back 
    useEffect(() => {
    if (mostrarTablaProductos) {
        setEjecutarConsulta(true);
    }
    }, [mostrarTablaProductos]);
      

    /*useEffect(() => {
        setGestionarProductos(GestionarProductosBackend);
    }, []);*/

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
            <div>
                <button
                onClick={() => {
                    setMostrarTablaProductos(!mostrarTablaProductos)
                }}
                className="botonCrear">                
                {textoBoton}
                </button>
            </div>

            {mostrarTablaProductos ? (
            <TablaProductos listaProductos={GestionarProductos}
            setEjecutarConsulta={setEjecutarConsulta}/>
            ) : ( <RegistrarProductos
                setMostrarTablaProductos={setMostrarTablaProductos}
                listaProductos={GestionarProductos}
                setGestionarProductos={setGestionarProductos}/>
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

    // ******** AQUÍ VA el useEffect de filtro y búsqueda *********
    
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
                                <th scope="col">Acción</th>
                            </tr>
                            </thead>
                        <tbody>
                            {listaProductos.map((producto) => {
                                //despues de un .map poner key (utilizar la librería nanoid)
                                /* Este código está repetido y modificado en fila productos
                                -incluyendo la línea de arriba {lista producto.map(..........

                                return (
                                    <tr key={nanoid()}>
                                        <td>{producto.idProducto}</td>
                                        <td>{producto.descripcion}</td>
                                        <td>{producto.valor}</td>
                                        <td><label className={producto.estado==='Disponible' ? 'badgeAvailable':'badgeNotAvailable'}>
                                            {producto.estado}</label></td>
                                        <td><button className="editButton">
                                            <span className="material-icons">edit</span>
                                            </button>
                                        </td>
                                    </tr>
                                );*/
                            })}
                        </tbody>
                    </table>
                </div>                
            </section>
            <Footer/>
        </div>
    );
};


/*------------ Fila Productos - donde se pueden editar --------------*/

const FilaProductos = ({ producto, setEjecutarConsulta }) => {
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoProducto, setInfoProducto] = useState({

        idProducto: producto.idProducto,
        descripcion: producto.descripcion,
        valor: producto.valor,
        estado: producto.estado,
    });

    const actualizarProducto = async () => {
    //enviar la info al back y se define el método POST
        const options = {
            method: 'PATCH',
            //****** AJUSTAR LA URL ******
            url: `http://localhost:5000/GestionarProductos/${producto.idProducto}/`,
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevoProducto },
        };
    //async trabaja con await axios 
    await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            toast.success('Producto editado con éxito');
            setEdit(false);
            setEjecutarConsulta(true);
        })
        .catch(function (error) {
            toast.error('Error editando el producto');
            console.error(error);
        });
    };
/******* Código con -input- para editar los producto **********/

    return (
        <tr>{edit ? (
            /****** El idProducto no se modifica - preguntar si id se crea automaticamente
            o se puede asignar manual ******/
            <>
              <td>{infoNuevoProducto.idProducto}</td>
              <td>
                <input
                  type='text'
                  value={infoNuevoProducto.idProducto}
                  onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, idProducto: e.target.value })}
                />
              </td>
              <td>
                <input
                  type='text'
                  value={infoNuevoProducto.descripcion}
                  onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, descripción: e.target.value })}
                />
              </td>
              <td>
                <input
                  type='text'
                  value={infoNuevoProducto.valor}
                  onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, valor: e.target.value })}
                />
              </td>
              <td>
                <input
                  type='text'
                  value={infoNuevoProducto.estado}
                  onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, estado: e.target.value })}
                />
              </td>
            </>
        ) : (
            <>
                <td>{producto.idProducto}</td>
                <td>{producto.despricción}</td>
                <td>{producto.valor}</td>
                <td><label className={producto.estado==='Disponible' ? 'badgeAvailable':'badgeNotAvailable'}>
                    {producto.estado}</label></td>
                <td><button className="editButton">
                    <span className="material-icons">edit</span>
                    </button>
                </td>
            </>
            )}
            <td>
                <div>
                    {edit ? (
                        <>
                        <i
                        onClick={() => actualizarProducto()}
                        className="checkActualizarButton"
                        />
                        <i onClick={() => setEdit(!edit)}
                        className="cancelEditButton"/>
                        </>
                    ) : (
                        /**** RESOLVER SI AQUÍ VA INCLUIDO EL CONDICIONAL
                        Y EL BOTON DE EDITAR ESTADO *****/
                        <>
                        <i onClick={() => setEdit(!edit)}
                        className=""/>
                        </>
                    )}
                </div>
            </td>
        </tr>
    );
};
               

/*------------ FORMULARIO Crear Nuevos Productos --------------*/

const RegistrarProductos = ({ setMostrarTablaProductos, listaProductos, setGestionarProductos }) => {
    const form = useRef(null);

    //async trabaja con await axios    
    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoProducto = {};
        fd.forEach((value, key) => {
            nuevoProducto[key] = value;
        });
        //se define el método POST y la url 5000 (AQUÍ SE MUESTRAN DATOS)
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/producto/nuevo/',
            headers: { 'Content-Type': 'application/json' },
            data: { idProducto: nuevoProducto.idProducto, descripcion: nuevoProducto.descripcion,
                valor: nuevoProducto.valor, estado: nuevoProducto.estado },
        };

        //await para funciones asincronas *** axios para conectar a la BD
        // Mensajes de validación
        await axios 
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success('Producto creado con éxito');
            })
            .catch(function (error) {
                console.error(error);
                toast.error('Error creando el producto');
            });
      
        setMostrarTablaProductos(true);
    };
      
    
    return(
        <div>
            <Header/>
            <div className="textosInicioSeccion">
            <div className="tituloSeccion">
                <span>Agregar nuevo producto</span>
                    </div>
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
