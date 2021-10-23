import {registrarUsuarios} from '../utils/api';
import React, {useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*------------ FORMULARIO Crear Nuevos Usuarios --------------*/

const RegistrarUsuario = () => {
    const form = useRef(null);

    //async trabaja con await axios    
    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoUsuario = {};
        fd.forEach((value, key) => {
            nuevoUsuario[key] = value;
        });
        //se define el método POST
        await registrarUsuarios(
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
    };
      
    
    return(
        <div id="registrarUsuarios"> 
                <div id="tituloSeccionUsuarios">
                    <span>Registrar nuevo Usuario</span>
                    <span className="descripcionSeccion">Ingresa los datos del nuevo Usuario.</span>
                </div>


            <div className="contenedorFormulario">
                <form ref={form} onSubmit={submitForm}>

                    <label htmlFor="id">Cédula
                    <input type="text" name="id_usuario"
                    placeholder="Ingresa número cedula sin puntos ni comas, Ej:10999009"
                    required/>
                    </label>
                
                    <label htmlFor="NombreUsuario">Nombres
                    <input type="text" name="given_name"
                    placeholder="Ingresa nombre completo..." required/>
                    </label>

                    <label htmlFor="ApellidorUsuario">Apellidos
                    <input type="text" name="family_name"
                    placeholder="Ingresa apellidos..." required/>
                    </label>

                    <label htmlFor="emailUsuario">Correo
                    <input type="email" id="email" name="email"
                    placeholder="Ejemplo: hola@hotmail.com" required/>
                    </label>
                    <br/>
                    <label htmlFor="rolUsuario">Rol del Usuario
                        <select name="estado" required defaultValue={0} >
                            <option disabled value={0}> Selecciona un rol</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>
                        </select>
                    </label>

                    <input id="input_ventas" type="hidden" name="estado" value = "Pendiente" required/>
                    
                    <button type="submit" className="botonGuardarProducto"> Guardar nuevo Usuario </button>
                    </form>
                 <ToastContainer position='bottom-center' autoClose={4000} />    
            </div>
    </div>
    );
};

export default RegistrarUsuario;