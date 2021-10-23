import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {RegistrarUsuarios} from '../utils/api';

const GestionarUsuarios = () => {

    const [Usuarios, setUsuarios] = useState([]);
    const [mostrarTablaUsuarios, setMostrarTablaUsuarios] = useState(true);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
      
    useEffect(() => {
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
            obtenerUsuarios((response) => {
                console.log('la respuesta que se recibio fue', response);
                setUsuarios(response.data);
            },
            (error) => {
                console.error('Salio un error:', error);
            }
            );
            setEjecutarConsulta(false); 
        }
    }, [ejecutarConsulta]);
         
    return (
        <div>
            {mostrarTablaUsuarios ? (
            <TablaUsuarios listaUsuarios={Usuarios} setEjecutarConsulta={setEjecutarConsulta}/>
            ) : (
                <RegistrarUsuario
                    setMostrarTablaUsuarios={setMostrarTablaUsuarios}
                    listaUsuarios={Usuarios}
                    setUsuarios={setUsuarios}/>
                )}
            <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
    );
};            

/*------------ FORMULARIO Crear Nuevos Usuarios --------------*/

const RegistrarUsuario = ({ setMostrarTablaUsuarios }) => {
    const form = useRef(null);

    //async trabaja con await axios    
    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoUsuario = {};
        fd.forEach((value, key) => {
            nuevoUsuario[key] = value;
        });
        //se define el método POST y la url 3001 (AQUÍ SE MUESTRAN DATOS)
        await RegistrarUsuarios(
            {
                id_usuario: nuevoUsuario.id_usuario,
                given_name: nuevoUsuario.given_name,
                family_name: nuevoUsuario.family_name,
                email: nuevoUsuario.email,
                rol:nuevoUsuario.rol,
                estado:nuevoUsuario.estado,
            },
            (response) => {
              console.log(response.data);
              toast.success('Nuevo Usuario agregado con éxito');
            },
            (error) => {
              console.error(error);
              toast.error('Error agregando el Usuario');
            }
          );
      
        setMostrarTablaUsuarios(true);
    };
      
    
    return(
        <div>
            <Header/>
            <div className="textosInicioSeccion">
            <div className="tituloSeccion">
                <span>Agregar nuevo Usuario</span>
                    </div>
            <div className="descripcionSeccion">Ingresa los datos del nuevo Usuario.</div>
        </div>
            <div className="contenedorFormulario">
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>

                <label htmlFor="id">Cedula
                <input type="number" name="id_usuario"
                placeholder="Ejemplo: 0001" required/>
                </label>
            
                <label htmlFor="NombreUsuario">Nombres
                <input type="text" name="given_name"
                placeholder="Ingresa nombres..." required/>
                </label>

                <label htmlFor="ApellidorUsuario">Apellido
                <input type="text" name="family_name"
                placeholder="Ingresa apellidos..." required/>
                </label>

                <label htmlFor="emailUsuario">Correo
                <input type="email" name="email"
                placeholder="Ingresa el valor en pesos..." required/>
                </label>

                <label htmlFor="rolUsuario">Rol del Usuario
                    <select name="estado" required defaultValue={0} >
                        <option disabled value={0}> Selecciona un estado</option>
                        <option>Administrativo</option>
                        <option>Vendedor</option>
                        <option>Cliente</option>
                    </select>
                </label>

                <label htmlFor="estadoUsuario">Rol del Usuario
                    <select name="estado" required defaultValue={0} >
                        <option disabled value={0}> Pendiente</option>
                    </select>
                </label>
                
                <button type="submit" className="botonGuardarUsuario"> Guardar nuevo Usuario
                </button>
            </form>
            </div>
        <Footer/>
    </div>
    );
};

export default GestionarUsuarios;