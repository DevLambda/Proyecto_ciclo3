import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
        <div className="container">
            <div className="divlogo"> 
               <div className="divinternologo"><h1>DevLambda</h1></div>            
                <div className="divinternopiedepagina">
                <p >Equípo Devlambda/Gruppo8/Ciclo3/UdeA/MisionTic 2022</p>
                </div>
            </div>  

            <div className="divlogin">
                <h1>Bienvenido <br></br> a tu plataforma de ventas</h1>
                <p>Ingresa tus datos.</p>
                <form>
                <label for="username"> Usuario</label><br />
                <input type="text" className="label" placeholder="Enter Username"></input><br />
                <label for="password">Contraseña</label><br />
                <input type="password" className="label" placeholder="Enter Password"></input><br />
                <Link to='/RegistrarVentas'>
                <input className="botonlogin" type="submit" value="Ingresar"></input><br />
                </Link>
                <script src="https://accounts.google.com/gsi/client" async defer></script>
                </form>  
                
                <br></br>
                <span className="auth">Olvidó su contraseña?</span><span class="auth">Registrarme</span>
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