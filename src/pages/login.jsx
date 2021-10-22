import { Link } from "react-router-dom";
// import google from '../src/media/google_logo.png';
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
                {/* <p>Ingresa tus datos.</p><br></br> 
                <form>
                <label for="username"> Usuario</label><br/>
                <input type="text"  placeholder="Enter Username"></input><br />
                <label for="password">Contraseña</label><br />
                <input type="password" placeholder="Enter Password"></input><br /> */}
                 <div>  
                    {/* <img src={google} alt='Logo Google' className='logoGoogle'/> */}
                    <button className="botonlogin" type="submit">Registrarme con Google</button><br></br> 
                  </div>
                
                 <div>
                    <button className="botonlogin" type="submit" onClick={() => loginWithRedirect()} >Ingresar con Google</button>
                  </div>
               
                {/* <script src="https://accounts.google.com/gsi/client" async defer></script> */}
                {/*</form>              
                <br></br>
                  <span className="auth">¿No tienes cuenta?</span><span class="register">Regístrate</span>
                  <span className="auth">Olvidé mi contraseña</span> */}
                <div id="g_id_onload"
                  data-client_id="1062176196992-1b403cldkrck8tg2vqs57htuc4eptlrb.apps.googleusercontent.com"
                  data-ux_mode="redirect"
                  data-login_uri="https://www.example.com/your_login_endpoint">
                </div>
                <div className="g_id_signin" data-type="standard"></div>  
            </div>
         </div>
    
    </div>
  );
}


export default Login;