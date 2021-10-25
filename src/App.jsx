
import Login from './pages/login';
import Ventas from './pages/Ventas';
import GestionarProductos from './pages/GestionarProductos';
import GestionarUsuarios from './pages/GestionarUsuarios';
import './styles/App.css'
import { Auth0Provider } from "@auth0/auth0-react";
import RegistrarUsuario from './pages/RegistrarUsuario';
// import PrivateRoute from './components/PrivateRoute';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Auth0Provider
    domain="proyectodevlambda.us.auth0.com"
    clientId="cnDsWAKlkwmY49b27NOXXa0DWvYJRBLx"
    redirectUri= {`${window.location.origin}/Ventas`}>   
    
    <div className="App">
      <Router>
        <Switch>

         <Route path='/Index'>
          <Login />
         </Route>

         <Route path='/RegistrarUsuario'>
          <RegistrarUsuario/>
         </Route>
        
          <Route path='/Ventas'>
          {/* <PrivateRoute> */}
              <Ventas />
          {/* </PrivateRoute> */}
          </Route>

         <Route path='/GestionarProductos'>
         {/* <PrivateRoute> */}
          <GestionarProductos />
          {/* </PrivateRoute> */}
         </Route>

         <Route path='/GestionarUsuarios'>
         {/* <PrivateRoute> */}
          <GestionarUsuarios />
          {/* </PrivateRoute> */}
         </Route>

         <Route path='/'>
          <Login />
         </Route>

        </Switch>
      </Router>
       
    </div>
  </Auth0Provider>
  );
}



export default App;


