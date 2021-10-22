import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { obtenerVentas, registrarVentas, editarVentas } from '../utils/api';
import { obtenerProductos } from '../utils/api';
import { obtenerUsuarios } from '../utils/api';
import { nanoid } from 'nanoid';

const Ventas = () => {
    const [Ventas, setVentas] = useState([]);
    const [mostrarTablaVentas, setMostrarTablaVentas] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Registrar Venta');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
            obtenerVentas((response) => {
                console.log('la respuesta que se recibio fue', response);
                setVentas(response.data);
            },
                (error) => {
                    console.error('Salio un error:', error);
                }
            );
            setEjecutarConsulta(false);
        }
    }, [ejecutarConsulta]);

    useEffect(() => {
        if (mostrarTablaVentas) {
            setEjecutarConsulta(true);
        }
    }, [mostrarTablaVentas]);

    useEffect(() => {
        if (mostrarTablaVentas) {
            setTextoBoton('Registrar Venta');
        } else {
            setTextoBoton('Volver a Gestionar Ventas');
        }
    }, [mostrarTablaVentas]);

    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        setMostrarTablaVentas(!mostrarTablaVentas)
                    }}
                    className="botonCrear">
                    {textoBoton}
                </button>
            </div>

            {mostrarTablaVentas ? (<TablaVentas listaVentas={Ventas} setEjecutarConsulta={setEjecutarConsulta} />
            ) : (<RegistrarVentas
                setMostrarTablaVentas={setMostrarTablaVentas}
                listaVentas={Ventas}
                setVentas={setVentas} />
            )}
            <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
    )
}

/*---------Tabla ventas--------------------*/

const TablaVentas = ({ listaVentas, setEjecutarConsulta }) => {
    const [busqueda, setBusqueda] = useState('');
    const [ventaFiltrados, setVentaFiltrados] = useState(listaVentas);

    useEffect(() => {
        setVentaFiltrados(
            listaVentas.filter((elemento) => {
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());

            })
        );
    }, [busqueda, listaVentas]);


    return (
        <div>
            <Header />
            <div className="textosInicioSeccion">
                <div className="tituloSeccion">Gestionar Ventas
                </div>
                <div className="descripcionSeccion">Consulta el histórico de ventas, actualiza el estado de estas y/o edita la información que requieras. Lo único que no podrás editar es el ID de venta.</div>
            </div>
            <section>
                <ul className="posicionBuscador">
                    <li>
                        <div className="label">Ingresa el ID de la venta: </div>
                        <input id="busqueda" type="text" value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)} />
                        <button className="botonBuscar" type="submit">Buscar</button>
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
                                <th scope="col">Nombre Cliente</th>
                                <th scope="col">Nombre Vendedor</th>
                                <th scope="col">Valor total</th>
                                <th id="acciones" colspan="2">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ventaFiltrados.map((Ventas) => {
                                return (
                                    <FilaVentas
                                        key={nanoid()}
                                        Ventas={Ventas}
                                        setEjecutarConsulta={setEjecutarConsulta}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </div>
    );
};

/*------------Editar ventas de la tabla -------------------------->*/

const FilaVentas = ({ Ventas, setEjecutarConsulta}) => {
    const [edit, setEdit] = useState(false);
    const [infoNuevaVenta, setInfoNuevaVenta] = useState(
        {
            _id: Ventas._id,
            fecha_venta: Ventas.fecha_venta,
            fecha_pago: Ventas.fecha_pago,
            estado_venta: Ventas.estado_venta,
            nombre_cliente: Ventas.nombre_cliente,
            vendedor:Ventas.estado_venta,
            total: Ventas.total,
        }
    );

    const actualizarVenta = async () => {
        await editarVentas(
            
            {
                _id:Ventas._id,
                fecha_venta: infoNuevaVenta.fecha_venta,
                fecha_pago: infoNuevaVenta.fecha_pago,
                estado_venta: infoNuevaVenta.estado_venta,
                nombre_cliente: infoNuevaVenta.nombre_cliente,
                vendedor:infoNuevaVenta.estado_venta,
                total: infoNuevaVenta.total,
            },
            (response) => {
                console.log(response.data);
                toast.success('Producto editado con éxito');
                setEdit(false);
                setEjecutarConsulta(true);
            },
            (error) => {
                toast.error('Error editando el producto');
                console.error(error);
            }
        );
    };

    return (
        <tr>
            {edit ? (
                <>
                    <td>{Ventas._id}</td>
                    <td>{Ventas.fecha_venta}</td>
                    <td>{Ventas.fecha_pago}</td>
                    <td><input className="estiloCampos" type="date" /></td>
                    <td>
                        <select name="estado_venta" className="estilosCampos"
                            required
                            defaultValue={setInfoNuevaVenta.estado_venta}
                            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, estado_venta: e.target.value })}>
                            <option disabled value={0}>Selecciona un estado</option>
                            <option>Entregada</option>
                            <option>Cancelada</option>
                            <option>En Progreso</option>
                        </select>
                    </td>
                    <td>{Ventas.nombre_cliente}</td>
                    <td>{Ventas.estado_venta}</td>
                    <td>{Ventas.total}</td>
                    <td>
                        <button className="checkButton" onClick={actualizarVenta()}>
                            <span className="material-icons">check</span></button>
                    </td>
                    <td>
                        <button className="cancelButton" onClick={() => setEdit(!edit)}>
                            <span className="material-icons">cancel</span>
                        </button>
                    </td>
                </>
            ) : (
                <>
                    <td>{Ventas._id}</td>
                    <td>{Ventas.fecha_venta}</td>
                    <td>{Ventas.fecha_pago}</td>
                    <td><label className={Ventas.estado_venta === 'Entregada' ? 'badgeAvailable' : Ventas.estado_venta === 'En Progreso' ? "badgeInProgress" : 'badgeNotAvailable'}>
                        {Ventas.estado_venta}</label></td>
                    <td>{Ventas.nombre_cliente}</td>
                    <td>{Ventas.estado_venta}</td>
                    <td>{Ventas.total}</td>
                    <td><button className="editButton" onClick={() => setEdit(!edit)}>
                        <span className="material-icons">edit</span>
                    </button>
                    </td>
                </>
            )}
        </tr>
    );
};

/*------------Registrar Ventas----------------------*/

const RegistrarVentas = () => {

    const form = useRef(null);
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [productosTabla, setProductosTabla] = useState([]);

    useEffect(() => {
        const fetchVendedores = async () => {
          await obtenerUsuarios(
            (response) => {
              setVendedores(response.data);
            },
            (error) => {
              console.error(error);
            }
          );
        };
        const fetchProductos = async () => {
          await obtenerProductos(
            (response) => {
              setProductos(response.data);
            },
            (error) => {
              console.error(error);
            }
          );
        };
    
        fetchVendedores();
        fetchProductos();

      }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevaVenta = {};
        fd.forEach((value, key) => {
            nuevaVenta[key] = value;
        });

        console.log('form data', nuevaVenta);

        const listaProductos = Object.keys(nuevaVenta)
        .map((k) => {
            if (k.includes('producto')) {
            return productosTabla.filter((v) => v._id === nuevaVenta[k])[0];
            }
            return null;
        })
        .filter((v) => v);
        
            const datosVenta = {

                ced_cliente: nuevaVenta.ced_cliente,
                nombre_cliente: nuevaVenta.nombre_cliente,
                tel_cliente: nuevaVenta.tel_cliente,
                fecha_venta: nuevaVenta.fecha_venta,
                fecha_pago: nuevaVenta.fecha_pago,
                productos: listaProductos,
<<<<<<< HEAD
                quantity: nuevaVenta.quantity,
                total_venta: nuevaVenta.total_venta, 
                estado_venta:nuevaVenta.estado_venta,   
                vendedor: vendedores.filter((v) => v._id === nuevaVenta.vendedor)[0],  
=======
                quantity: nuevaVenta.quantity,   
                estado_venta: nuevaVenta.estado_venta      
>>>>>>> 93a51783b4d5f0ceb93296e9e825255aab596cdf
            };

            //falta poner el TOAST
            await registrarVentas(
                datosVenta,
                (response) => {
                console.log(response);
                },
                (error) => {
                console.error(error);
                }
            );
    };
    
    return (
        <div>
            <Header />
            <div className="textosInicioSeccion">
                <div className="tituloSeccion">
                    <span>Registrar nueva venta</span></div>
                <div className="descripcionSeccion">Ingresa los datos de la venta a registrar.</div>
            </div>

            <section className="contenedorFormVentas" id="container">
                
                <form ref={form} onSubmit={submitForm} name="form_ventas" id="form_ventas">
                    <h4>Datos del Cliente</h4>

                    <label id="label">Cédula
                    <input id="input_ventas" type="text" name="ced_cliente" required /></label>

                    <label id="label">Nombre Completo
                    <input id="input_ventas" type="text" name="nombre_cliente" required /></label>

                    <label id="label">Teléfono
                    <input id="input_ventas" type="text" name="tel_cliente" required /></label>

                    <h4>Datos de la Venta</h4>

                    <label id="label">Fecha de facturación
                    <input id=" input_fecha" type="date" name="fecha_venta" required /></label>

                    <label id="label">Fecha de Pago
                    <input id="input_fecha" type="date" name="fecha_pago" required /></label>


                    <label id="label">Vendedor
                        <select id="listaProductos1" name="vendedor" required defaultValue="">
                            <option disabled value="">Seleccione un vendedor</option>
                            {vendedores.map((el)=>{
                                    return (<option key={nanoid()} value={el._id}>{`${el.given_name} ${el.family_name}`}</option>)
                                })}
                        </select></label>
                    
                    {/* Es para que asigne por defecto el estado en progreso */}
                    <input id="input_ventas" type="hidden" name="estado_venta" value = "En Progreso" required/>

                        <TablaProductos 
                        productos={productos}
                        setProductos={setProductos}
                        setProductosTabla={setProductosTabla}
                        />
                <button type="submit" className="btn_new"><i className="fas fa-edit"></i>Registrar venta</button>
            </form>
        </section>
    <Footer />
</div>
    );
};

const TablaProductos= ({productos, setProductos, setProductosTabla})=>{

    const [productoAAgregar, setProductoAAgregar] = useState([]);
    const [filasTabla, setFilasTabla] = useState([]);  
    const [totalVenta, setTotalVenta] = useState(0);
    
    useEffect(() => {
        let total=0;
        filasTabla.forEach( (f)=>{
            total =total+f.total;
        });
        setTotalVenta(total);
        setProductosTabla(filasTabla);
    }, [filasTabla, setProductosTabla]);

    const agregarProducto = () => {
        setFilasTabla([...filasTabla, productoAAgregar]);
        setProductos(productos.filter((v) => v._id !== productoAAgregar._id));
        setProductoAAgregar({});
      };
    
    const eliminarProducto = (productoAEliminar) => {
        setFilasTabla(filasTabla.filter((v) => v._id !== productoAEliminar._id));
        setProductos([...productos, productoAEliminar]);
      };

    const modificarProducto = (producto, quantity) => {
        setFilasTabla(
          filasTabla.map((ft) => {
            if (ft._id === producto._id) {
              ft.quantity = quantity;
              ft.total = producto.valor * quantity;
            }
            return ft;
          })
        );
      };


    return (
        <div>
            <label id="label">
                Producto
                <select id="listaProductos1"
                    value={productoAAgregar._id ?? ""} 
                    onChange={(e) => 
                    setProductoAAgregar(productos.filter((v) => v._id === e.target.value)[0])
                    }
                >
                    <option disabled value=""> 
                        Seleccione un producto
                    </option>
                    {productos.map((el)=> {
                        return (
                        <option 
                            key={nanoid()} 
                            value={el._id}>
                        {el.descripcion}</option>);
                        })}
                </select>
            </label>
            <input name="estado_venta" value="En Progreso" type="hidden"/>
            <button 
                type="button" 
                className="btn_new"  
                onClick={()=> agregarProducto()}>
                Agregar producto
            </button>
                
                <table border="1" id="tbl_venta">
                    <thead>
                        <tr>
                            <th id="t_ventas">Código</th>
                            <th id="t_ventas">Producto</th>
                            <th id="t_ventas">Cantidad</th>
                            <th id="t_ventas">Precio Unitario</th>
                            <th id="t_ventas">Total</th>
                            <th id="t_ventas">Eliminar</th>
                            <th className="hidden">Input</th>
                        </tr>
                    </thead>

                    <tbody id="detalle_venta">
                        
                        {filasTabla.map((el,index)=>{
                            return (
                                <FilaProducto
                                key={el._id}
                                pro={el}
                                index={index}
                                eliminarProducto={eliminarProducto}
                                modificarProducto={modificarProducto}
                            />  
                            );   
                        })}
                    </tbody>
                </table> 
            <span name="total_venta" id="total">Total Venta {totalVenta}</span>              
        </div>
    );
};


const FilaProducto = ({ pro, index, eliminarProducto, modificarProducto }) => {
    
    const [producto, setProducto] = useState(pro);
    
    useEffect(() => {
      console.log('pro', producto);
    }, [producto]);
    
    return (
      <tr>
        <td>{producto._id}</td>
        <td>{producto.descripcion}</td>
        <td>
          <label htmlFor={`valor_${index}`}>
            <input
              type='number'
              id="input_cantidad"
              name={`quantity_${index}`}
              value={producto.quantity}
              min={0}
              onChange={(e) => {
                modificarProducto(producto, e.target.value === '' ? '0' : e.target.value);
                setProducto({
                  ...producto,
                  quantity: e.target.value === '' ? '0' : e.target.value,
                  total:
                    parseFloat(producto.valor) *
                    parseFloat(e.target.value === '' ? '0' : e.target.value),
                });
              }}
            />
          </label>
        </td>
        <td>{producto.valor}</td>
        <td>{parseFloat(producto.total ?? 0)}</td>
        <td>
          <i
            onClick={() => eliminarProducto(producto)}
            className='far fa-trash-alt cursor-pointer'
          />
        </td>
        <td className="hidden">
          <input hidden defaultValue={producto._id} name={`producto_${index}`} />
        </td>
      </tr>
    );
  };
  
export default Ventas;