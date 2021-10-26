import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { obtenerVentas, registrarVentas, editarVentas } from '../utils/api';
import { obtenerProductos } from '../utils/api';
import { obtenerUsuarios } from '../utils/api';
import { nanoid } from 'nanoid';
import accounting from "accounting";

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
                        setMostrarTablaVentas(!mostrarTablaVentas);

                        
                    }}
                    className={textoBoton==='Volver a Gestionar Ventas'?'botonCrear2':'botonCrear'}>
                    {textoBoton}
                </button>
            </div>

            {mostrarTablaVentas ? (<TablaVentas listaVentas={Ventas} setEjecutarConsulta={setEjecutarConsulta} />
            ) : (<RegistrarVentas
                setMostrarTablaVentas={setMostrarTablaVentas}
                listaVentas={Ventas}
                setVentas={setVentas} />
            )}
            <ToastContainer position='bottom-center' autoClose={3000} />
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
            totalVenta: Ventas.totalVenta,
            
        }
    );

    const actualizarVenta = async () => {
        await editarVentas(
            
            {
                _id: Ventas._id,
                fecha_pago: infoNuevaVenta.fecha_pago,
                estado_venta: infoNuevaVenta.estado_venta,
            },
            (response) => {
                toast.success('Venta editada con éxito'); 
                setEdit(false);
                setEjecutarConsulta(true);
                
            },
            (error) => {
                toast.error('Error actualizando venta');
                console.error(error);
            }
        );
    };

    return (
        <tr>
            {edit ? (
                <>
                    <td>{Ventas._id.slice(10)}</td>
                    <td>{Ventas.fecha_venta}</td>
                    <td>
                        <input className="estiloCampos" name="fecha_pago"
                        type="date" 
                        defaultValue={infoNuevaVenta.fecha_pago}
                        onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, fecha_pago: e.target.value })}>
                        </input>
                    </td>
                    <td>
                        <select name="estado_venta" className="estilosCampos"
                            defaultValue={infoNuevaVenta.estado_venta}
                            onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, estado_venta: e.target.value })}>
                            <option disabled value={0}>Selecciona un estado</option>
                            <option>Entregada</option>
                            <option>Cancelada</option>
                            <option>En Progreso</option>
                        </select>
                    </td>
                    <td>{Ventas.nombre_cliente}</td>
                    <td>{Ventas.vendedor}</td>
                    <td>{accounting.formatMoney(Ventas.totalVenta)}</td>
                    <td>
                        <button className="checkButton" onClick={actualizarVenta}>
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
                    <td>{Ventas._id.slice(10)}</td>
                    <td>{Ventas.fecha_venta}</td>
                    <td>{Ventas.fecha_pago}</td>
                    <td><label className={Ventas.estado_venta === 'Entregada' ? 'badgeAvailable' : Ventas.estado_venta === 'En Progreso' ? "badgeInProgress" : 'badgeNotAvailable'}>
                        {Ventas.estado_venta}</label></td>
                    <td>{Ventas.nombre_cliente}</td>
                    <td>{Ventas.vendedor}</td>{/*aquí va nombre vendedor*/}
                    <td>{accounting.formatMoney(Ventas.totalVenta)}</td>
                    <td><button className="editButton" onClick={() => setEdit(true)}>
                        <span className="material-icons">edit</span>
                    </button>
                    </td>
                </>
            )}
        </tr>
    );
};

/*------------Registrar Ventas----------------------*/

const RegistrarVentas = ({totalVenta}) => {

    const form = useRef(null);
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [productosTabla, setProductosTabla] = useState([]);
    const [totalVenta, setTotalVenta]=useState(0);

    useEffect(() => {
        //se leen los datos de usuarios de la base de datos
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
        //se leen los datos de productos de la base de datos
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
        console.log(form.current)

        const nuevaVenta = {};
        fd.forEach((value, key) => {
            nuevaVenta[key] = value;
            
        });

        nuevaVenta['totalVenta']=totalVenta;
        console.log('form data', nuevaVenta);


        const listaProductos = Object.keys(nuevaVenta)
        .map((k) => {
            if (k.includes('producto')) {
            return productosTabla.filter((v) => v._id === nuevaVenta[k])[0];
            }
            return null;
        })
        .filter((v) => v);
    
        //variable que contiene los datos de la venta a enviar
            const datosVenta = {

                ced_cliente: nuevaVenta.ced_cliente,
                nombre_cliente: nuevaVenta.nombre_cliente,
                tel_cliente: nuevaVenta.tel_cliente,
                fecha_venta: nuevaVenta.fecha_venta,
                fecha_pago: nuevaVenta.fecha_pago,
                productos: listaProductos,
                quantity: nuevaVenta.quantity,
                totalVenta: nuevaVenta.totalVenta, 
                estado_venta:nuevaVenta.estado_venta,   
                vendedor: nuevaVenta.vendedor
            };

        //POST registrar ventas

            await registrarVentas(
                datosVenta,
                (response) => {
                toast.success('Venta registrada con éxito'); 
                },
                (error) => {
                toast.error('Error registrando venta');
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
                                    return (<option key={nanoid()} value={`${el.given_name} ${el.family_name}`}>{`${el.given_name} ${el.family_name}`}</option>)
                                })}
                        </select></label>
                    
                    {/* Es para que asigne por defecto el estado en progreso */}
                    <input id="input_ventas" type="hidden" name="estado_venta" value = "En Progreso" required/>

                        <TablaProductos 
                        productos={productos}
                        setProductos={setProductos}
                        setProductosTabla={setProductosTabla}
                        setTotalVenta={setTotalVenta}
                        />
                    <span name="total_venta" id="total">Total Venta: {accounting.formatMoney(totalVenta)}</span> <br/>
                <button type="submit" className="btn_new"><i className="fas fa-edit"></i>Registrar venta</button>  
            </form>
        </section>
    <Footer />
</div>
    );
};

//Esta función agrega los productos a comprar a la tabla, este componente se lee en la funcion RegistrarVentas
const TablaProductos= ({productos, setProductos, setProductosTabla, setTotalVenta})=>{

    const [productoAAgregar, setProductoAAgregar] = useState([]);
    const [filasTabla, setFilasTabla] = useState([]);  
    
    /*Este use effect setea filas tabla y productos que se agregan a la tabla, 
    dentro se hace el cálculo del total de la venta recorriendo las filas de la tabla 
    y sumando el total de cada una*/

    useEffect(() => {
        let total=0;
        filasTabla.forEach( (f)=>{
            total =total+f.total;
            setTotalVenta(total);
        });
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
                <i class="fas fa-plus"></i>
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
            {/* <span name="total_venta" id="total">Total Venta: {totalVenta}</span>               */}
        </div>
    );
};
//es el componente de las filas de productos que añade en la función TablaProductos
const FilaProducto = ({ pro, index, eliminarProducto, modificarProducto }) => {
    
    const [producto, setProducto] = useState(pro);
    
    useEffect(() => {
      console.log('pro', producto);
    }, [producto]);
    
    return (
      <tr>
        <td>{producto.idProducto}</td>
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
        <td>{accounting.formatMoney(producto.valor)}</td>
        <td>{accounting.formatMoney(parseFloat(producto.total ?? 0))}</td>
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
