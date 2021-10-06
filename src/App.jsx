
import Login from './pages/login';
import Ventas from './pages/Ventas';
import Productos from './pages/Productos';
import GestionarProductos from './pages/GestionarProductos';
import AgregarProductos from './pages/AgregarProductos';
import RegistrarVentas from './pages/RegistrarVentas';
import './styles/App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

         <Route path='/Index'>
          <Login />
         </Route>

         <Route path='/RegistrarVentas'>
          <RegistrarVentas />
         </Route>

         <Route path='/Ventas'>
          <Ventas />
         </Route>

         <Route path='/GestionarProductos'>
          <GestionarProductos />
         </Route>

              <Route path='/Productos'>
                <Productos />
              </Route>

              <Route path='/AgregarProductos'>
              <AgregarProductos />
              </Route>


         <Route path='/'>
          <Login />
         </Route>

        </Switch>
      </Router>
       
    </div>
  );
}



export default App;


