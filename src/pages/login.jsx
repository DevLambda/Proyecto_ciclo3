import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
        <div className="container">
            <div className="divlogo"> 
               <h1>DevLambda</h1> 
                <div className="divinternopiedepagina">
                <p>Equipo DevLambda/Grupo8/Ciclo3/UdeA/MisionTic 2022</p>
                </div>
            </div>  

            <div className="divlogin">
                <h1>Bienvenido<br></br>a tu plataforma de ventas</h1>
                 <div>  
                  <Link to='/RegistrarUsuario'><button className="botonlogin" type="submit">Regístrate</button><br/></Link>
                  <h2 id="h2">- Ó -</h2>
                  </div>
                 <div>
                    <button className="botonlogin" type="submit" onClick={() => loginWithRedirect()} >Ingresa con Google</button>
                  </div>
              
            </div>
         </div>
    </div>
  );
}


export default Login;